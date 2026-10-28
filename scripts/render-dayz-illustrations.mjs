import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/dayz-screenshots');
await fs.mkdir(outputDir, { recursive: true });

const scenes = [
  { file: 'dayz-player-esp', title: 'PLAYER INFORMATION', accent: '#4ca3ff', labels: ['PLAYER 84m', 'HEALTH', 'ITEM IN HAND'] },
  { file: 'dayz-world-esp', title: 'WORLD INFORMATION', accent: '#5ed99c', labels: ['VEHICLE 210m', 'INFECTED 61m', 'HELICRASH 480m'] },
  { file: 'dayz-item-esp', title: 'ITEM INFORMATION', accent: '#ffbd59', labels: ['MEDICAL', 'TOOLS', 'QUALITY DISPLAY'] },
];

function svg(scene) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#13243d"/><stop offset="0.58" stop-color="#2b4155"/><stop offset="1" stop-color="#101820"/></linearGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#26352e"/><stop offset="1" stop-color="#0b1210"/></linearGradient>
    <radialGradient id="sun"><stop stop-color="#f2d39b" stop-opacity=".65"/><stop offset="1" stop-color="#f2d39b" stop-opacity="0"/></radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="1200" height="750" fill="url(#sky)"/>
  <circle cx="890" cy="170" r="170" fill="url(#sun)"/>
  <path d="M0 430L150 350 245 405 355 305 470 390 615 275 720 365 860 300 1010 380 1200 285V750H0Z" fill="#182723"/>
  <path d="M0 510L170 430 330 500 510 400 660 490 815 405 1010 500 1200 430V750H0Z" fill="url(#ground)"/>
  <g fill="#0c1412">
    <path d="M110 500l24-145 24 145h-15v90h-20v-90z"/><path d="M190 515l30-190 30 190h-18v100h-24v-100z"/>
    <path d="M1020 505l28-175 28 175h-17v100h-22v-100z"/><path d="M1100 520l24-145 24 145h-15v85h-20v-85z"/>
  </g>
  <g fill="#141b1c" stroke="#334047" stroke-width="4">
    <path d="M700 390h240v180H700z"/><path d="M675 390l145-90 145 90z"/>
    <rect x="735" y="440" width="58" height="130"/><rect x="840" y="430" width="60" height="58"/>
  </g>
  <path d="M540 610c15-68 26-111 34-129 8-18 29-29 49-29 22 0 42 12 50 31 8 19 20 61 36 127z" fill="#0a0d0f"/>
  <circle cx="623" cy="420" r="31" fill="#0a0d0f"/>
  <path d="M578 500l-70 68M668 500l75 62" stroke="#0a0d0f" stroke-width="28" stroke-linecap="round"/>
  <path d="M594 608l-42 92M654 608l46 92" stroke="#0a0d0f" stroke-width="31" stroke-linecap="round"/>
  <g fill="none" stroke="${scene.accent}" stroke-width="4" filter="url(#glow)"><rect x="554" y="378" width="138" height="256" rx="4"/><path d="M545 420h-32v60M701 420h32v60M545 590h-32v-60M701 590h32v-60"/></g>
  <g font-family="Arial, sans-serif" fill="#eef6ff">
    <rect x="42" y="40" width="470" height="92" rx="14" fill="#08111c" fill-opacity=".78" stroke="${scene.accent}" stroke-opacity=".7"/>
    <text x="72" y="82" font-size="18" font-weight="700" fill="${scene.accent}">GETDAYZCHEATS.NET</text>
    <text x="72" y="113" font-size="29" font-weight="800">${scene.title}</text>
    <rect x="914" y="45" width="240" height="42" rx="21" fill="#08111c" fill-opacity=".7"/>
    <text x="1034" y="73" text-anchor="middle" font-size="15" font-weight="700">ILLUSTRATIVE PREVIEW</text>
    ${scene.labels.map((label, index) => `<rect x="${770 + (index % 2) * 190}" y="${520 + Math.floor(index / 2) * 62}" width="175" height="44" rx="8" fill="#08111c" fill-opacity=".82" stroke="${scene.accent}" stroke-opacity=".65"/><text x="${858 + (index % 2) * 190}" y="${548 + Math.floor(index / 2) * 62}" text-anchor="middle" font-size="14" font-weight="700" fill="${scene.accent}">${label}</text>`).join('')}
  </g>
  <g stroke="${scene.accent}" stroke-width="2" opacity=".7"><path d="M40 690h1120"/><path d="M60 675v30M1140 675v30"/></g>
</svg>`;
}

for (const scene of scenes) {
  const input = Buffer.from(svg(scene));
  const base = path.join(outputDir, scene.file);
  await sharp(input).webp({ quality: 88, effort: 5 }).toFile(`${base}.webp`);
  for (const width of [320, 400, 512, 640, 960]) {
    await sharp(input).resize({ width }).webp({ quality: 86, effort: 5 }).toFile(`${base}-${width}.webp`);
  }
  for (const width of [512, 640]) {
    await sharp(input).resize({ width }).avif({ quality: 64, effort: 5 }).toFile(`${base}-${width}.avif`);
  }
}

console.log(`Rendered ${scenes.length} original DayZ-themed illustrations.`);
