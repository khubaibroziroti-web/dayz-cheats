import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

walk(dist);
const errors = [];

function targetExists(href) {
  const clean = href.split(/[?#]/)[0];
  if (!clean || clean === '/') return fs.existsSync(path.join(dist, 'index.html'));
  const relative = clean.replace(/^\//, '');
  const candidates = clean.endsWith('/')
    ? [path.join(dist, relative, 'index.html')]
    : [path.join(dist, relative), path.join(dist, `${relative}.html`), path.join(dist, relative, 'index.html')];
  return candidates.some((candidate) => fs.existsSync(candidate));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(dist, file);
  if (/http-equiv="refresh"/i.test(html)) continue;
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1 && relative !== '404.html') errors.push(`${relative}: expected one H1, found ${h1Count}`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) errors.push(`${relative}: missing meta description`);
  if (!/<link\s+rel="canonical"\s+href="https:\/\/getdayzcheats\.net\//i.test(html)) errors.push(`${relative}: missing production canonical`);
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/i.test(match[0])) errors.push(`${relative}: image without alt attribute`);
  }
  for (const match of html.matchAll(/\bhref="([^"]+)"/gi)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/go/')) continue;
    if (!targetExists(href)) errors.push(`${relative}: broken internal link ${href}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: H1, metadata, canonicals, image alt text and internal links passed.`);
