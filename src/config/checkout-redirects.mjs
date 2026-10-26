/** Affiliate checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  rust: 'https://levocheats.com/go/KHUBAIBB?to=%2Frust-cheats',
  skinChanger: 'https://levocheats.com/go/KHUBAIBB?to=%2Fskin-changer-cheats',
  hwidSpoofer: 'https://levocheats.com/go/KHUBAIBB?to=%2Fhwid-spoofer',
  ugc: 'https://levocheats.com/go/KHUBAIBB?to=%2Fgame-accounts',
};

/** Checkout paths map to server side destinations. */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/rust', CHECKOUT_URLS.rust],
  ['/go/rust/', CHECKOUT_URLS.rust],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
