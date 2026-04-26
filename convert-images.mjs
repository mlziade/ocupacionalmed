import sharp from "sharp";
import { readdir, mkdir, copyFile } from "fs/promises";
import { join, extname, basename } from "path";

const SRC = new URL("./images/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const DEST = new URL("./ocupacionalmed/public/images/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

await mkdir(DEST, { recursive: true });

const files = await readdir(SRC);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const src = join(SRC, file);

  // Keep the transparent PNG as-is
  if (file === "medica-em-pe-transparente.png") {
    await copyFile(src, join(DEST, file));
    console.log(`Copied  ${file}`);
    continue;
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    const outName = basename(file, ext) + ".webp";
    await sharp(src)
      .webp({ quality: 85 })
      .toFile(join(DEST, outName));
    console.log(`Converted  ${file} → ${outName}`);
  }
}

console.log("Done.");
