import type { IconName } from '../components/icons/types';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'safety' | 'products' | 'blog' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

export const siteFaqs: SiteFaqItem[] = [
  { id: 'platforms', topic: 'setup', icon: 'faqPlatforms', q: 'Which operating systems are listed?', a: 'The public product requirements list Windows 10 and Windows 11 on Intel or AMD systems.' },
  { id: 'plans', topic: 'plans', icon: 'faqComparePlans', q: 'Which access plans are currently listed?', a: 'The referenced merchant currently lists monthly access at $35 for 31 days and lifetime access at $150.' },
  { id: 'player-esp', topic: 'esp', icon: 'faqWhatIsEsp', q: 'What player ESP information is listed?', a: 'The public list includes friend display, boxes, filled boxes, head dot, skeleton, health, name, distance, inventory, item in hands, traces and maximum-distance controls.' },
  { id: 'world-esp', topic: 'esp', icon: 'faqZoomHack', q: 'Does the product list world and vehicle information?', a: 'Yes. The public listing names infected, animal, vehicle and helicopter-crash display groups.' },
  { id: 'item-esp', topic: 'esp', icon: 'faqProductsPage', q: 'Which item options are listed?', a: 'Item options include quality information, text or bar display styles, battle mode and a show-only-when-hovering filter.' },
  { id: 'aim-controls', topic: 'products', icon: 'faqWhichTierScripts', q: 'Which aim controls are published?', a: 'The listing names configurable FOV, aim distance, target-group filters, nearest/head/neck/pelvis choices, and visual FOV and target-line styles.' },
  { id: 'firmware', topic: 'setup', icon: 'faqStatus', q: 'Which firmware settings are listed?', a: 'The public requirements currently state that HVCI, Core Isolation, TPM and Secure Boot should be enabled.' },
  { id: 'checkout', topic: 'plans', icon: 'faqAfterBuy', q: 'Where does purchase and delivery happen?', a: 'Purchase buttons lead to an external affiliate partner. The external merchant handles payment, digital delivery and purchase support.' },
  { id: 'affiliate', topic: 'products', icon: 'faqBlogSetup', q: 'Is this an affiliate website?', a: 'Yes. GetDayZCheats may receive a commission from qualifying purchases made through certain links, without changing the listed checkout price.' },
  { id: 'risk', topic: 'safety', icon: 'faqBanRisk', q: 'Can third-party software lead to account restrictions?', a: 'Yes. Third-party software can violate game or service terms and may result in account restrictions. Visitors should understand the applicable rules and risks.' },
  { id: 'compatibility', topic: 'safety', icon: 'faqUndetected', q: 'Is compatibility permanent?', a: 'No. Game, operating-system and product updates can change compatibility. Confirm current information with the merchant before purchase.' },
  { id: 'guides', topic: 'blog', icon: 'faqBlogGuideStart', q: 'What do the guides cover?', a: 'The guides explain published feature groups, system requirements, plan pricing, affiliate checkout and pre-purchase checks.' },
];

export function getLandingFaqs(): SiteFaqItem[] { return siteFaqs.slice(0, 8); }
export function getAllFaqs(): SiteFaqItem[] { return siteFaqs; }

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ', title: 'DayZ product questions',
  subtitle: 'Answers based on the public product listing, current plan information and disclosed affiliate relationship.',
} as const;

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Product FAQ', title: 'Questions before checkout',
  subtitle: 'Review requirements, plans, features and external checkout information.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'safety', 'products', 'blog', 'setup'];

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  return SITE_FAQ_FILTER_TOPICS.filter((topic) => topic === 'all' || present.has(topic));
}

export function getProductFaqs(_slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  return siteFaqs.filter((item) => ['plans', 'esp', 'safety', 'products', 'setup'].includes(item.topic)).slice(0, 10);
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return siteFaqs.filter((item) => ['blog', 'plans', 'safety', 'setup'].includes(item.topic)).slice(0, 6);
}

export const compareRows = [
  { feature: 'Player ESP information', icon: 'comparePlayerEsp' as const, lite: false, pro: false, elite: true },
  { feature: 'Infected ESP', icon: 'compareWardLocator' as const, lite: false, pro: false, elite: true },
  { feature: 'World and vehicle ESP', icon: 'compareZoomHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Item quality display', icon: 'compareRadarHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Configurable aim controls', icon: 'compareAutoCombo' as const, lite: false, pro: false, elite: true },
  { feature: 'Save and load configuration', icon: 'compareCloudBackup' as const, lite: false, pro: false, elite: true },
];
