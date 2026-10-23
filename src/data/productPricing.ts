export type ProductPlanId = 'weekly' | 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const standardPlans: ProductPlan[] = [
  { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: 'USD / month' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'USD · one-time' },
];

const rustPlans: ProductPlan[] = [
  { id: 'weekly', label: '1 Week', priceUsd: 15, priceNote: '7 days' },
  { id: 'monthly', label: '1 Month', priceUsd: 35, priceNote: '30 days · Popular' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'Lifetime' },
];

const ugcPlans: ProductPlan[] = [
  { id: 'onetime', label: 'One-time access', priceUsd: 50, priceNote: 'USD · one-time' },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'elite') return rustPlans;
  if (productSlug === 'ugc') return ugcPlans;
  return standardPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
