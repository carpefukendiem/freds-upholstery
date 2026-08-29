#!/usr/bin/env node
/**
 * Downloads every image referenced in src/data/images.ts into public/images/.
 *
 * Run this on your own machine — it needs network access to the GoHighLevel CDN:
 *   npm run images:download
 *
 * Then set NEXT_PUBLIC_LOCAL_IMAGES=true in .env.local and the whole site
 * switches from CDN URLs to local files. Nothing else needs to change.
 *
 * Do this before the GHL account lapses. Right now every photo on the site is
 * hosted by a service the business may stop paying for.
 */

import { mkdir, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

const CDN =
  "https://images.leadconnectorhq.com/image/f_webp/q_90/r_1600/u_https://assets.cdn.filesafe.space";

// Parsed straight out of the manifest so the two can't drift apart.
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

  // brand assets + avatars use assetUrl(Tn, "file") form
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
  console.log(`Downloading ${assets.length} images to public/images/\n`);

  let ok = 0;
  let skipped = 0;
  const failed = [];

  for (const { file, tenant } of assets) {
    const dest = join(OUT, file);
    if (await exists(dest)) {
      skipped++;
      continue;
    }
    const url = `${CDN}/${tenant}/media/${file}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1000) throw new Error(`suspiciously small (${buf.length}b)`);
      await writeFile(dest, buf);
      ok++;
      process.stdout.write(`  ✓ ${file}\n`);
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
