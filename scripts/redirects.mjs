/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/dayz-cheats/'],
  ['/cheats/', '/products/dayz-cheats/'],
  ['/cheats/lite', '/products/dayz-cheats/'],
  ['/cheats/lite/', '/products/dayz-cheats/'],
  ['/cheats/pro', '/products/dayz-cheats/'],
  ['/cheats/pro/', '/products/dayz-cheats/'],
  ['/cheats/elite', '/products/dayz-cheats/elite/'],
  ['/cheats/elite/', '/products/dayz-cheats/elite/'],
  ['/cheats/compare', '/products/dayz-cheats/'],
  ['/cheats/compare/', '/products/dayz-cheats/'],
  ['/products/dayz-cheats/utilities', '/products/dayz-cheats/utilities/'],
  ['/products/dayz-cheats', '/products/dayz-cheats/'],
  ['/products/dayz-cheats/account-recovery', '/products/dayz-cheats/ugc/'],
  ['/products/dayz-cheats/account-recovery/', '/products/dayz-cheats/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
