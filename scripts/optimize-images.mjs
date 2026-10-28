import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const defaultDirs = [
  'public/images/dayz-screenshots',
];
const protectedSources = new Set([
  'dayz-arena-wallhack.png',
  'dayz-chams-esp.png',
  'dayz-combat-esp.png',
  'dayz-long-range-esp.png',
  'dayz-loot-radar.png',
  'dayz-radar-hack.png',
  'dayz-skin-changer.png',
  'dayz-spawn-island-esp.png',
]);
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : defaultDirs;

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter((file) =>
    /\.(png|jpe?g|webp)$/i.test(file) &&
    !/-\d+\.webp$/i.test(file) &&
    !protectedSources.has(file.toLowerCase()),
  );

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.(png|jpe?g|webp)$/i, '');

    if (path.extname(file).toLowerCase() !== '.webp') {
      await sharp(input)
        .webp({ quality: 90, effort: 5, smartSubsample: true })
        .toFile(path.join(dir, `${base}.webp`));
      console.log(`Wrote ${path.relative(root, path.join(dir, `${base}.webp`))}`);
    }

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 90, effort: 5, smartSubsample: true })
        .toFile(output);
      console.log(`Wrote ${path.relative(root, output)}`);
    }
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
