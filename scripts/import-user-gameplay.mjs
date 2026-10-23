/**
 * Copy user cheat screenshots (long Windows paths) into public/images,
 * then write SEO-named PNGs for gameplay + blog.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-fortnite-cheats-com-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

/** Skip Valorant screenshot only. */
const SKIP_SUBSTRINGS = ['065800-cb09d0b5'];

const GAMEPLAY = [
  { file: 'fortnite-esp-wallhack.png', alt: 'Fortnite ESP wallhack cheat gameplay with player boxes distance tags and aimbot FOV' },
  { file: 'fortnite-aimbot-combat.png', alt: 'Fortnite aimbot cheat gameplay with FOV circle and green skeleton ESP on enemy' },
  { file: 'fortnite-player-esp.png', alt: 'Fortnite player ESP wallhack showing skeletons boxes and distance meters' },
  { file: 'fortnite-radar-hack.png', alt: 'Fortnite radar and ESP overlay with enemy name tags health and range markers' },
  { file: 'fortnite-auto-aim.png', alt: 'Fortnite sniper aimbot cheat with green ESP box weapon label and FOV circle' },
  { file: 'fortnite-loot-radar.png', alt: 'Fortnite loot and chest ESP gameplay with enemy boxes and distance trackers' },
  { file: 'fortnite-skin-changer.png', alt: 'Fortnite cheat gameplay with chams skeleton ESP and aim lock on pier' },
  { file: 'fortnite-thermal-esp.png', alt: 'Fortnite thermal vision ESP showing skeleton wallhack HP and distance' },
  { file: 'fortnite-build-fight-esp.png', alt: 'Fortnite build fight ESP wallhack with names HP bars and FOV circle' },
  { file: 'fortnite-arena-wallhack.png', alt: 'Fortnite arena wallhack ESP with wireframe players and weapon tags' },
  { file: 'fortnite-spawn-island-esp.png', alt: 'Fortnite spawn island ESP with skeleton boxes and aimbot reticle' },
  { file: 'fortnite-long-range-esp.png', alt: 'Fortnite long range ESP wallhack with enemy names health and weapons' },
  { file: 'fortnite-aimbot-lock.png', alt: 'Fortnite aimbot lock with green skeleton ESP FOV circle and head priority' },
  { file: 'fortnite-chams-esp.png', alt: 'Fortnite chams and skeleton ESP cheat on wooden pier' },
  { file: 'fortnite-squad-esp.png', alt: 'Fortnite multi-player ESP wallhack with boxes skeletons and distances' },
  { file: 'fortnite-combat-esp.png', alt: 'Fortnite combat ESP and aimbot overlay in open field fight' },
];

const BLOG = [
  'fortnite-cheat-codes-guide.png',
  'fortnite-console-cheats-tips.png',
  'how-to-use-fortnite-cheat-codes.png',
  'fortnite-cheats-features-guide.png',
  'fortnite-console-commands-cheats.png',
  'fortnite-lite-vs-pro.png',
  'fortnite-elite-tier-guide.png',
  'fortnite-aimbot-ranked-guide.png',
  'fortnite-esp-wallhack-setup.png',
  'fortnite-radar-hack-guide.png',
  'fortnite-skin-changer-guide.png',
  'eac-patch-day-checklist.png',
  'fortnite-hwid-spoofer-after-ban.png',
  'how-to-buy-fortnite-cheats-2026.png',
  'fortnite-aimbot-combat-guide.png',
  'eac-bypass-fortnite-guide.png',
  'fortnite-external-cheat-guide.png',
  'fortnite-stream-proof-setup.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  if (resolved.startsWith('\\\\?\\')) return resolved;
  return `\\\\?\\${resolved}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listAssetPngs() {
  const entries = fs.readdirSync(longPath(assetsDir));
  return entries
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .filter((f) => !SKIP_SUBSTRINGS.some((s) => f.includes(s)))
    .sort();
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), buf.length);
}

ensureDir(importDir);
ensureDir(gameplayDir);
ensureDir(blogDir);

const sources = listAssetPngs();
console.log(`Found ${sources.length} source screenshots`);

const shortFiles = [];
for (let i = 0; i < sources.length; i++) {
  const name = sources[i];
  const short = `shot-${String(i + 1).padStart(2, '0')}.png`;
  const from = longPath(path.join(assetsDir, name));
  const to = path.join(importDir, short);
  fs.copyFileSync(from, to);
  shortFiles.push(to);
  console.log('copied', short, '←', name.slice(-40));
}

if (!shortFiles.length) {
  console.error('No screenshots copied.');
  process.exit(1);
}

const alts = [];
for (let i = 0; i < GAMEPLAY.length; i++) {
  const src = shortFiles[i % shortFiles.length];
  const dest = path.join(gameplayDir, GAMEPLAY[i].file);
  await writeResizedPng(src, dest);
  alts.push({ file: GAMEPLAY[i].file, alt: GAMEPLAY[i].alt, srcIndex: i % shortFiles.length });
}

for (let i = 0; i < BLOG.length; i++) {
  // Offset so blog covers prefer different frames than gameplay slots when possible
  const src = shortFiles[(i + 3) % shortFiles.length];
  await writeResizedPng(src, path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'),
  JSON.stringify({ gameplay: alts, sourceCount: shortFiles.length }, null, 2),
);

console.log('Done. Next: npm run optimize:images');
