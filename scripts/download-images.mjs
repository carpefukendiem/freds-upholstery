#!/usr/bin/env node
/**
 * Downloads every image referenced in src/data/images.ts into public/images/
 * as optimized WebP files.
 *
 *   npm run images:download
 *
 * Then set NEXT_PUBLIC_LOCAL_IMAGES=true in .env.local.
 * Do this before the GHL account lapses.
 */

import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { encodeWebp, toWebpName } from "./to-webp.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

const CDN =
  "https://images.leadconnectorhq.com/image/f_webp/q_90/r_1600/u_https://assets.cdn.filesafe.space";
const FILESAFE = "https://assets.cdn.filesafe.space";

async function fetchAsset(tenant, file) {
  const urls = [`${CDN}/${tenant}/media/${file}`, `${FILESAFE}/${tenant}/media/${file}`];
  let lastErr;
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 200) throw new Error(`suspiciously small (${buf.length}b)`);
      return buf;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

async function loadAssets() {
  const src = await import("node:fs/promises").then((fs) =>
    fs.readFile(join(__dirname, "..", "src", "data", "images.ts"), "utf8")
  );
  const tenants = {
    T1: (src.match(/const T1 = "([^"]+)"/) || [])[1],
    T2: (src.match(/const T2 = "([^"]+)"/) || [])[1],
  };
  const seen = new Map();
  const re = /\{\s*file:\s*"([^"]+)",\s*tenant:\s*(T1|T2)/g;
  let m;
  while ((m = re.exec(src))) seen.set(m[1], tenants[m[2]]);

  const re2 = /assetUrl\((T1|T2),\s*"([^"]+)"\)/g;
  while ((m = re2.exec(src))) seen.set(m[2], tenants[m[1]]);

  return [...seen.entries()].map(([file, tenant]) => ({ file, tenant }));
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const assets = await loadAssets();
  await mkdir(OUT, { recursive: true });
  console.log(`Downloading ${assets.length} images as WebP to public/images/\n`);

  let ok = 0;
  let skipped = 0;
  const failed = [];

  for (const { file, tenant } of assets) {
    const dest = join(OUT, toWebpName(file));
    if (await exists(dest)) {
      skipped++;
      continue;
    }
    try {
      const buf = await fetchAsset(tenant, file);
      const webp = await encodeWebp(buf, file);
      if (webp.length < 80) throw new Error(`webp too small (${webp.length}b)`);
      await writeFile(dest, webp);
      ok++;
      process.stdout.write(`  ✓ ${toWebpName(file)}\n`);
    } catch (err) {
      failed.push({ file, reason: err.message });
      process.stdout.write(`  ✗ ${file} — ${err.message}\n`);
    }
  }

  console.log(`\nDone. ${ok} downloaded, ${skipped} already present, ${failed.length} failed.`);
  if (failed.length) {
    console.log("\nFailed files (pull these manually from the live site):");
    failed.forEach((f) => console.log(`  ${f.file} — ${f.reason}`));
    process.exitCode = 1;
  } else {
    console.log("\nNext step: add NEXT_PUBLIC_LOCAL_IMAGES=true to .env.local");
  }
}

main();
