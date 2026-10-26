import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const faviconMarkup = [
  '<link rel="icon" type="image/png" sizes="32x32" href="/dayz-favicon-32.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="/dayz-favicon-16.png">',
  '<link rel="shortcut icon" href="/dayz-favicon.ico">',
  '<link rel="apple-touch-icon" sizes="180x180" href="/dayz-apple-touch-icon.png">',
].join('');

function listHtmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? listHtmlFiles(entryPath)
      : entry.isFile() && entry.name.endsWith('.html')
        ? [entryPath]
        : [];
  });
}

let updated = 0;

for (const filePath of listHtmlFiles(distDir)) {
  const html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('/dayz-favicon.ico')) continue;

  const finalizedHtml = html.includes('</head>')
    ? html.replace('</head>', `${faviconMarkup}</head>`)
    : html.replace(/^(<!doctype html>)/i, `$1${faviconMarkup}`);

  if (finalizedHtml === html) {
    throw new Error(`Unable to add favicon markup to ${filePath}`);
  }

  fs.writeFileSync(filePath, finalizedHtml);
  updated += 1;
}

console.log(`Favicon finalized across generated HTML (${updated} page${updated === 1 ? '' : 's'} updated).`);
