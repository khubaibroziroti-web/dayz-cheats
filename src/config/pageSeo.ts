export interface PageSeoEntry { title: string; description: string }

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'DayZ Cheats for PC | ESP, Aimbot & Wallhack',
    description: 'Compare DayZ cheats for Windows PC, including player ESP, infected and item tracking, vehicle ESP, aim controls, requirements and plan prices.',
  },
  '/products/dayz-cheats/': {
    title: 'DayZ Cheats Plans, Features & Requirements',
    description: 'Review the listed DayZ cheat features, Windows requirements, $35 monthly plan and $150 lifetime option before partner checkout.',
  },
  '/products/dayz-cheats/elite/': {
    title: 'DayZ Cheats Product Details | ESP & Aimbot',
    description: 'Explore the published DayZ player ESP, infected ESP, vehicle and item tracking, aimbot controls, system requirements and access plans.',
  },
  '/blog/': {
    title: 'DayZ Cheats Guides | Features, Plans & Requirements',
    description: 'Read straightforward DayZ product guides covering feature groups, Windows requirements, monthly and lifetime plans, and purchase checks.',
  },
  '/forum/': {
    title: 'DayZ Cheats Community Hub | Guides & Help',
    description: 'Browse DayZ product resources, feature guides, requirements, FAQs and support information in one community hub.',
  },
  '/faq/': {
    title: 'DayZ Cheats FAQ | Features, Plans & Compatibility',
    description: 'Answers about DayZ cheat features, Windows compatibility, plan prices, external checkout and changing product availability.',
  },
  '/terms/': {
    title: 'Terms and Affiliate Disclosure | GetDayZCheats',
    description: 'Read the GetDayZCheats affiliate disclosure and terms covering third-party checkout, product information and purchase responsibility.',
  },
  '/privacy/': {
    title: 'Privacy Policy | GetDayZCheats',
    description: 'Learn how GetDayZCheats handles theme preferences, optional analytics, server logs and links to external merchants.',
  },
  '/about/': {
    title: 'About GetDayZCheats | Independent Product Guide',
    description: 'Learn how GetDayZCheats presents DayZ product information, requirements, plan details and disclosed affiliate links.',
  },
  '/support/': {
    title: 'DayZ Product Support | Requirements & Purchase Help',
    description: 'Find DayZ product requirements, plan information, FAQs, guides and external merchant support guidance.',
  },
  '/contact/': {
    title: 'Contact GetDayZCheats | Product and Purchase Help',
    description: 'Find the right contact path for DayZ product questions, checkout help, privacy requests and affiliate disclosures.',
  },
  '/refund-policy/': {
    title: 'Refund Policy | GetDayZCheats',
    description: 'Understand how refunds are handled by the external merchant that processes DayZ product purchases.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | GetDayZCheats',
    description: 'Learn how GetDayZCheats may earn commissions from clearly identified third-party purchase links.',
  },
  '/disclaimer/': {
    title: 'Website Disclaimer | GetDayZCheats',
    description: 'Read important limitations covering product information, compatibility, third-party software and game-service rules.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
