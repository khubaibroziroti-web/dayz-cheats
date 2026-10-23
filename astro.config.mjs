import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://getrustcheat.com',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/rust-cheats/',
    '/cheats/lite/': '/products/rust-cheats/',
    '/cheats/pro/': '/products/rust-cheats/',
    '/cheats/elite/': '/products/rust-cheats/elite/',
    '/cheats/compare/': '/products/rust-cheats/',
    '/products/fortnite-cheats/': '/products/rust-cheats/',
    '/products/fortnite-cheats/elite/': '/products/rust-cheats/elite/',
    '/products/fortnite-cheats/utilities/': '/products/rust-cheats/utilities/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: false,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
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
