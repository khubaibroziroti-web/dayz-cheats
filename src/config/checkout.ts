import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/**
 * Checkout destinations are used only by the server side redirect route.
 */
export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for legacy /go/[slug]/ checkout redirect paths. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  dayz: 'dayz',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Direct affiliate checkout URL for the selected product. */
export function checkoutPath(product: CheckoutProduct = 'dayz'): string {
  return CHECKOUT[product];
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('dayz');

/** Map internal product slugs to checkout destinations. */
export function checkoutForSlug(slug: string): string {
  return checkoutPath('dayz');
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
  if (href.includes('%2Fproducts%2Fdayz') || href.includes('/products/dayz')) {
    return checkoutPath('dayz');
  }

  return href;
}
