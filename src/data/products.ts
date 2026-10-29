import { checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  width?: number;
  height?: number;
  widths?: readonly number[];
}

export interface ProductOverview { title: string; paragraphs: string[] }
export interface AcquisitionStep { num: string; title: string; desc: string }
export interface ProductAcquisition { title: string; steps: AcquisitionStep[] }
export interface SystemRequirement { icon: IconName; label?: string; text: string }

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

const imageBase = '/images/dayz-screenshots';

export const heroSlides: ProductSlide[] = [
  {
    src: `${imageBase}/dayz-player-esp.webp`,
    alt: 'Illustrative DayZ survival scene introducing the player information feature group.',
    caption: 'Player information',
    captionDesc: 'Illustrative survival scene for the player information group.',
  },
  {
    src: `${imageBase}/dayz-world-esp.webp`,
    alt: 'Illustrative DayZ landscape introducing world and vehicle information features.',
    caption: 'World information',
    captionDesc: 'Illustrative survival scene for world and vehicle information.',
  },
  {
    src: `${imageBase}/dayz-item-esp.webp`,
    alt: 'Illustrative DayZ inventory scene introducing item information features.',
    caption: 'Item information',
    captionDesc: 'Illustrative survival scene for item information features.',
  },
];

const utilitySlides: ProductSlide[] = [
  {
    src: `${imageBase}/dayz-world-esp.webp`,
    alt: 'Illustrative DayZ-themed product preview used for the utility overview.',
    caption: 'Product overview',
    captionDesc: 'Illustrative preview; confirm current product details with the merchant.',
  },
  {
    src: `${imageBase}/dayz-item-esp.webp`,
    alt: 'Illustrative DayZ-themed interface preview used for product information.',
    caption: 'Purchase information',
    captionDesc: 'Review availability and requirements on the external merchant page.',
  },
];

const purchaseSteps: AcquisitionStep[] = [
  { num: '01', title: 'Review the listing', desc: 'Check the current description, availability and requirements.' },
  { num: '02', title: 'Confirm compatibility', desc: 'Verify that the product matches your system, platform or account needs.' },
  { num: '03', title: 'Continue to checkout', desc: 'Use the Buy now button to open the supplied external affiliate destination.' },
  { num: '04', title: 'Use merchant support', desc: 'The external merchant handles payment, delivery, account and refund questions.' },
];

const commonUtilityRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', label: 'Platform', text: 'Confirm the supported platform on the current merchant listing.' },
  { icon: 'reqSettings', label: 'Compatibility', text: 'Review current compatibility and setup requirements before purchase.' },
  { icon: 'reqWifi', label: 'Delivery', text: 'Checkout and digital fulfillment are handled by the external merchant.' },
];

const commonAbout = [
  { type: 'p' as const, text: 'This page organizes the product category and links to the external merchant destination supplied by the site owner.' },
  { type: 'h2' as const, text: 'Affiliate disclosure' },
  { type: 'p' as const, text: 'Purchase links are affiliate links. This website may earn a commission from qualifying purchases without changing the listed merchant price.' },
];

const dayzCheats: ProductPage = {
  slug: 'elite',
  kind: 'tier',
  badge: 'Check status',
  category: 'Survival',
  tier: 'Survival',
  name: 'DayZ Cheats',
  title: 'DayZ Cheats',
  subtitle: 'Player, infected, world and item information with configurable aim and display controls.',
  desc: 'Review the listed DayZ product features, system requirements and access durations before continuing to partner checkout.',
  features: ['Visual ESP', 'Aim controls', 'Player and infected information', 'World and vehicle information', 'Item-quality display', 'Configuration controls'],
  more: 30,
  variant: 'popular',
  buyUrl: checkoutPath('dayz'),
  images: heroSlides,
  overview: {
    title: 'DayZ product overview',
    paragraphs: [
      'The public listing groups controls into aim, player, infected, world, item, miscellaneous and configuration sections.',
      'Monthly access is listed at $35 for 31 days and lifetime access at $150. Confirm current price, availability and compatibility on the partner page.',
    ],
  },
  acquisition: { title: 'How to review and purchase DayZ Cheats', steps: purchaseSteps },
  goodToKnow: 'Product availability, pricing and compatibility can change. Confirm current information on the external merchant page before purchase.',
  limitations: 'Third-party software can violate game or platform terms and may result in account restrictions. Use is at the purchaser’s own risk.',
  fullFeatures: [
    'Toggle aimbot', 'Customizable field of view', 'Customizable aim distance',
    'Player, infected and animal target filters', 'Nearest, head, neck and pelvis target choices',
    'Solid or gradient FOV style', 'Solid or gradient target line', 'Friend display',
    'Corner or full player box', 'Solid or gradient filled box', 'Head dot', 'Skeleton',
    'Health bar', 'Player name', 'Player distance', 'Player inventory', 'Item in hands',
    'Traces', 'Maximum display distance', 'Infected ESP', 'Animal ESP',
    'Text or bar health display', 'Vehicle ESP', 'Helicopter-crash markers',
    'Item quality', 'Text or bar quality style', 'Battle mode', 'Show only when hovering',
    'Always day', 'Local position', 'Third-person unlock', 'No grass', 'Crosshair',
    'FPS limit', 'Save configuration', 'Load configuration',
  ],
  systemRequirements: [
    { icon: 'reqWindows', label: 'Operating system', text: 'Windows 10 or Windows 11.' },
    { icon: 'reqCpu', label: 'Processor platform', text: 'Intel or AMD.' },
    { icon: 'reqSettings', label: 'Firmware settings', text: 'Review HVCI, Core Isolation, TPM and Secure Boot requirements.' },
    { icon: 'reqWifi', label: 'Internet', text: 'Stable internet connection for current product access.' },
  ],
  about: commonAbout,
  body: [
    { type: 'h2', text: 'Plan options' },
    { type: 'p', text: 'The public listing currently shows monthly access at $35 for 31 days and lifetime access at $150.' },
    { type: 'h2', text: 'Check before purchase' },
    { type: 'p', text: 'Review current merchant terms, compatibility, delivery and refund information before completing checkout.' },
  ],
  relatedBlogSlugs: ['dayz-cheats-pricing-plans', 'dayz-cheats-system-requirements', 'dayz-esp-features-guide'],
};

const hwidSpoofer: ProductPage = {
  slug: 'hwid-spoofer', kind: 'utility', badge: 'Available', category: 'System utility',
  name: 'DayZ HWID Spoofer', title: 'DayZ HWID Spoofer',
  subtitle: 'System utility and compatibility tools available through the supplied partner listing.',
  desc: 'Review the current HWID spoofer listing, supported system information and merchant terms before checkout.',
  features: ['Spoofer and cleanup tools', 'System profile options', 'Compatibility review', 'Post-setup verification'],
  more: 9, buyUrl: checkoutPath('hwidSpoofer'), images: utilitySlides,
  overview: { title: 'HWID spoofer overview', paragraphs: ['This card links to the supplied HWID spoofer category. Exact capabilities and supported systems can change, so use the merchant listing as the current source of truth.'] },
  acquisition: { title: 'How to review the HWID Spoofer', steps: purchaseSteps },
  goodToKnow: 'Create a restore point and review the merchant documentation before changing system identifiers or settings.',
  limitations: 'Compatibility and outcomes are not guaranteed. Account or platform restrictions may remain in effect.',
  fullFeatures: ['Spoofer and cleanup tool category', 'System profile options', 'Compatibility information', 'Setup documentation', 'Post-setup verification guidance'],
  systemRequirements: commonUtilityRequirements, about: commonAbout,
  body: [{ type: 'h2', text: 'Verify current support' }, { type: 'p', text: 'Confirm the supported Windows version, hardware and setup steps on the merchant page before purchasing.' }],
  relatedBlogSlugs: ['dayz-product-pre-purchase-checklist', 'dayz-cheats-system-requirements'],
};

const gameAccounts: ProductPage = {
  slug: 'game-accounts', kind: 'utility', badge: 'Available', category: 'Game accounts',
  name: 'DayZ Game Accounts', title: 'DayZ Game Accounts',
  subtitle: 'Browse the external game-account marketplace through the supplied partner link.',
  desc: 'Review platform, region, included content, delivery and seller terms on the merchant listing before purchase.',
  features: ['Account marketplace', 'Listing details', 'Platform and region checks', 'External delivery and support'],
  more: 6, buyUrl: checkoutPath('gameAccounts'), images: utilitySlides,
  overview: { title: 'Game accounts overview', paragraphs: ['The supplied link opens an external game-account category. Availability and individual listing details can change. Read the exact account description and merchant terms before checkout.'] },
  acquisition: { title: 'How to review game accounts', steps: purchaseSteps },
  goodToKnow: 'Confirm the game, platform, region, included access and transfer instructions for the exact listing you choose.',
  limitations: 'This website does not own, deliver or manage marketplace accounts. The external merchant controls availability, fulfillment and support.',
  fullFeatures: ['Marketplace browsing', 'Individual listing descriptions', 'Platform information', 'Region information', 'External fulfillment', 'Merchant purchase support'],
  systemRequirements: commonUtilityRequirements, about: commonAbout,
  body: [{ type: 'h2', text: 'Check every listing' }, { type: 'p', text: 'Account details vary. Verify the title, platform, region, access method and merchant policy before payment.' }],
  relatedBlogSlugs: ['dayz-product-pre-purchase-checklist'],
};

const skinChanger: ProductPage = {
  slug: 'skin-changer', kind: 'utility', badge: 'Available', category: 'Cosmetic',
  name: 'DayZ Skin Changer', title: 'DayZ Skin Changer',
  subtitle: 'Cosmetic customization category available through the supplied partner listing.',
  desc: 'Review the current skin changer listing, supported game version and cosmetic options before checkout.',
  features: ['Cosmetic customization', 'Appearance presets', 'Supported-item review', 'Configuration options'],
  more: 7, buyUrl: checkoutPath('skinChanger'), images: utilitySlides,
  overview: { title: 'Skin changer overview', paragraphs: ['The supplied link opens an external skin changer category. Confirm the supported game, available cosmetic controls and current compatibility on the merchant page.'] },
  acquisition: { title: 'How to review the Skin Changer', steps: purchaseSteps },
  goodToKnow: 'Cosmetic availability and compatibility can change after product or game updates.',
  limitations: 'A local cosmetic tool does not create official ownership of store items. Confirm exactly what the merchant product changes before purchase.',
  fullFeatures: ['Cosmetic customization category', 'Appearance presets', 'Supported-item information', 'Configuration controls', 'Current compatibility information', 'Merchant setup documentation'],
  systemRequirements: commonUtilityRequirements, about: commonAbout,
  body: [{ type: 'h2', text: 'Confirm the supported product' }, { type: 'p', text: 'Check the current merchant listing for supported games, cosmetic options, system requirements and limitations.' }],
  relatedBlogSlugs: ['dayz-product-pre-purchase-checklist'],
};

export const productPages: ProductPage[] = [dayzCheats, hwidSpoofer, gameAccounts, skinChanger];
export const cheatPages = productPages.filter((entry) => entry.kind === 'tier');
export const productRelatedBlogSlugs: Record<string, string[]> = Object.fromEntries(productPages.map((entry) => [entry.slug, entry.relatedBlogSlugs]));

export function getProductPage(slug: string) { return productPages.find((entry) => entry.slug === slug); }
export function getCheatPage(slug: string) { return cheatPages.find((entry) => entry.slug === slug); }
export function getAllProductSlugs() { return productPages.map((entry) => entry.slug); }
export function getAllCheatSlugs() { return cheatPages.map((entry) => entry.slug); }

export const productHub = {
  path: '/products/dayz-cheats/',
  title: 'DayZ Products',
  subtitle: 'DayZ cheats, HWID spoofer, game accounts and skin changer categories',
  description: 'Compare the four supplied DayZ product categories, review the available information and continue to the matching external partner page.',
  buyUrl: checkoutPath('dayz'),
};
