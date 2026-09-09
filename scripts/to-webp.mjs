import sharp from "sharp";
import { extname } from "node:path";

/** Swap jpeg/jpg/png for webp. Leaves .webp unchanged. */
export function toWebpName(file) {
  return file.replace(/\.(jpe?g|png)$/i, ".webp");
}

/**
 * Encode a buffer (or file path) as WebP.
 * Photos use q=80; PNG graphics keep alpha at q=90 so wordmarks stay crisp.
 */
export async function encodeWebp(input, sourceName = "") {
  const ext = extname(sourceName).toLowerCase();
  const isGraphic = ext === ".png";
  return sharp(input)
    .webp({
      quality: isGraphic ? 90 : 80,
      effort: 6,
      alphaQuality: 100,
    })
    .toBuffer();
}
