/** Affiliate checkout destination supplied by the site owner. */
export const CHECKOUT_URLS = {
  dayz: 'https://levocheats.com/go/KHUBAIB?to=%2Fdayz-cheats',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/dayz', CHECKOUT_URLS.dayz],
  ['/go/dayz/', CHECKOUT_URLS.dayz],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }
  return null;
}
