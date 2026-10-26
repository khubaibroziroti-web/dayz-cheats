import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * Checkout destinations are used only by the server side redirect route.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for legacy /go/[slug]/ checkout redirect paths. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  rust: 'rust',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Direct affiliate checkout URL for the selected product. */
export function checkoutPath(product: CheckoutProduct = 'rust'): string {
  return CHECKOUT[product];
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('rust');

/** Map internal product slugs to checkout destinations. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('rust');
  }
}

/** Resolve blog CTA or legacy href values to direct checkout destinations. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    const internalCheckout = href.match(/^\/go\/([^/]+)\/?$/);
    if (internalCheckout) {
      const product = CHECKOUT_SLUG_TO_PRODUCT[internalCheckout[1]];
      if (product) return CHECKOUT[product];
    }

    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  // Legacy / encoded product paths → internal checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('rust');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (href.includes('%2Fproducts%2Frust') || href.includes('/products/rust')) {
    return checkoutPath('rust');
  }

  return href;
}
