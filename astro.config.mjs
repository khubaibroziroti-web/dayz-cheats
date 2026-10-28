import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://getdayzcheats.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/dayz-cheats/',
    '/cheats/lite/': '/products/dayz-cheats/',
    '/cheats/pro/': '/products/dayz-cheats/',
    '/cheats/elite/': '/products/dayz-cheats/elite/',
    '/cheats/compare/': '/products/dayz-cheats/',
    '/products/dayz-cheats/utilities/': '/products/dayz-cheats/',
  },
  compressHTML: true,
  prefetch: false,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/go/') &&
        !page.includes('/cheats/') &&
        !page.includes('/products/dayz-cheats/utilities/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
