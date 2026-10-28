export type ProductPlanId = 'monthly' | 'lifetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const dayzPlans: ProductPlan[] = [
  { id: 'monthly', label: 'Monthly', priceUsd: 35, priceNote: '31 days of access' },
  { id: 'lifetime', label: 'Lifetime', priceUsd: 150, priceNote: 'Unlimited-duration access' },
];

export function getProductPlans(_productSlug: string): ProductPlan[] { return dayzPlans; }
export function formatPlanPrice(usd: number): string { return `$${usd}`; }
export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
