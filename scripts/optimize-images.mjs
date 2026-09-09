#!/usr/bin/env node
/**
 * Converts every JPEG/PNG in public/images/ to WebP, then removes the original.
 *   node scripts/optimize-images.mjs
 */

import { readdir, readFile, writeFile, unlink, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { encodeWebp, toWebpName } from "./to-webp.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "public", "images");
const SOURCE = /\.(jpe?g|png)$/i;

async function main() {
  const files = (await readdir(DIR)).filter((f) => SOURCE.test(f));
  console.log(`Converting ${files.length} images in public/images/ to WebP\n`);

  let ok = 0;
  let bytesIn = 0;
  let bytesOut = 0;
  const failed = [];

  for (const file of files) {
    const srcPath = join(DIR, file);
    const destPath = join(DIR, toWebpName(file));
    try {
      const input = await readFile(srcPath);
      const webp = await encodeWebp(input, file);
      if (webp.length < 100) throw new Error(`suspiciously small (${webp.length}b)`);
      await writeFile(destPath, webp);
      if (destPath !== srcPath) await unlink(srcPath);
      bytesIn += input.length;
      bytesOut += webp.length;
      ok++;
      const pct = Math.round((1 - webp.length / input.length) * 100);
      process.stdout.write(
        `  ✓ ${file} → ${toWebpName(file)}  ${fmt(input.length)} → ${fmt(webp.length)} (${pct}%)\n`
      );
    } catch (err) {
      failed.push({ file, reason: err.message });
      process.stdout.write(`  ✗ ${file} — ${err.message}\n`);
    }
  }

  const leftover = (await readdir(DIR)).filter((f) => SOURCE.test(f));
  const webps = (await readdir(DIR)).filter((f) => f.endsWith(".webp"));
  console.log(
    `\nDone. ${ok} converted, ${failed.length} failed. Folder: ${webps.length} webp, ${leftover.length} jpeg/png left.`
  );
  if (bytesIn) {
    console.log(`Size: ${fmt(bytesIn)} → ${fmt(bytesOut)} (${Math.round((1 - bytesOut / bytesIn) * 100)}% smaller)`);
  }
  if (failed.length) process.exitCode = 1;
}

function fmt(n) {
  return n < 1024 ? `${n}b` : n < 1024 * 1024 ? `${(n / 1024).toFixed(0)}kb` : `${(n / 1024 / 1024).toFixed(1)}mb`;
}

main();
