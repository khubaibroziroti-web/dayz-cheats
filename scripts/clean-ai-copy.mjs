import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['FortniteCheats Editorial', 'Fortnite Cheats'],
  ['FortniteCheats Community Forum', 'Fortnite Cheats Forum'],
  ['FortniteCheats Blog', 'Fortnite Cheats Blog'],
  ['FortniteCheats Support', 'Fortnite Cheats Support'],
  ['Join FortniteCheats on Discord', 'Join Fortnite Cheats on Discord'],
  ['FortniteCheats home', 'Fortnite Cheats home'],
  ['FortniteCheats', 'Fortnite Cheats'],
  ["TITLE_PREFIX = 'Fortnite Cheats & Hacks'", "TITLE_PREFIX = 'Fortnite Cheats'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with fortnite aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked Fortnite aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and Zero Build—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Fortnite cheats for Windows PC Battle Royale and Zero Build. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and Zero Build. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Fortnite cheats for Windows PC Battle Royale and Zero Build. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and Zero Build. Check live status before every patch-day queue.',
    'sells Fortnite cheats for Windows PC Battle Royale and Zero Build. Check status before you queue after a patch.',
  ],
  [
    'maintains private fortnite cheats for Windows PC Battle Royale and Zero Build.',
    'sells Fortnite cheats for Windows PC Battle Royale and Zero Build.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Aimbot tracks targets, loot assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external Fortnite cheats for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
