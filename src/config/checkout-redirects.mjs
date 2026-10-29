/** Affiliate checkout destination supplied by the site owner. */
export const CHECKOUT_URLS = {
  dayz: 'https://levocheats.com/go/KHUBAIB?to=%2Fdayz-cheats',
  hwidSpoofer: 'https://levocheats.com/go/KHUBAIB?to=%2Fhwid-spoofer',
  gameAccounts: 'https://levocheats.com/go/KHUBAIB?to=%2Fgame-accounts',
  skinChanger: 'https://levocheats.com/go/KHUBAIB?to=%2Fskin-changer-cheats',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/dayz', CHECKOUT_URLS.dayz],
  ['/go/dayz/', CHECKOUT_URLS.dayz],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/game-accounts', CHECKOUT_URLS.gameAccounts],
  ['/go/game-accounts/', CHECKOUT_URLS.gameAccounts],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }
  return null;
}
