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
    alt: 'Illustrative DayZ survival scene used to introduce the player ESP feature group.',
    caption: 'Player information',
    captionDesc: 'Illustrative survival scene for the player ESP feature group.',
  },
  {
    src: `${imageBase}/dayz-world-esp.webp`,
    alt: 'Illustrative DayZ survival landscape used to introduce world and vehicle ESP features.',
    caption: 'World information',
    captionDesc: 'Illustrative survival scene for world and vehicle information.',
  },
  {
    src: `${imageBase}/dayz-item-esp.webp`,
    alt: 'Illustrative DayZ inventory scene used to introduce item-quality display features.',
    caption: 'Item information',
    captionDesc: 'Illustrative survival scene for item-quality display features.',
  },
];

const product: ProductPage = {
  slug: 'elite',
  kind: 'tier',
  badge: 'Monthly or lifetime',
  category: 'Windows PC',
  tier: 'DayZ',
  name: 'DayZ Cheats',
  title: 'DayZ Cheats',
  subtitle: 'Player, infected, world and item ESP with configurable aim and display controls.',
  desc: 'Review the publicly listed DayZ product features, system requirements and access durations before continuing to partner checkout.',
  features: ['Player ESP', 'Infected ESP', 'World and vehicle ESP', 'Item-quality display', 'Configurable aim controls', 'Save and load config'],
  more: 20,
  variant: 'popular',
  buyUrl: checkoutPath('dayz'),
  images: heroSlides,
  overview: {
    title: 'DayZ product overview',
    paragraphs: [
      'The public listing groups controls into aimbot, player ESP, infected ESP, world ESP, item ESP, miscellaneous and configuration sections.',
      'Monthly access is listed at $35 for 31 days. Lifetime access is listed at $150. Confirm current price, availability and compatibility on the partner checkout page.',
    ],
  },
  acquisition: {
    title: 'How to review and purchase',
    steps: [
      { num: '01', title: 'Review features', desc: 'Read the complete feature list and decide whether it matches what you are looking for.' },
      { num: '02', title: 'Check requirements', desc: 'Confirm Windows and firmware requirements before choosing access.' },
      { num: '03', title: 'Choose a duration', desc: 'Compare the published monthly and lifetime options.' },
      { num: '04', title: 'Continue to partner checkout', desc: 'The external merchant handles payment, digital delivery and purchase support.' },
    ],
  },
  goodToKnow: 'Product availability, pricing and compatibility can change. Confirm the current information on the external merchant page before purchase.',
  limitations: 'Third-party software can violate game or platform terms and can result in account restrictions. Use is at the purchaser’s own risk.',
  fullFeatures: [
    'Toggle aimbot', 'Customizable field of view', 'Customizable aim distance',
    'Player, infected and animal target filters', 'Nearest, head, neck and pelvis target choices',
    'Solid or gradient FOV style', 'Solid or gradient target line',
    'Friend display', 'Corner or full player box', 'Solid or gradient filled box',
    'Head dot', 'Skeleton', 'Health bar', 'Player name', 'Player distance',
    'Player inventory', 'Item in hands', 'Traces', 'Maximum display distance',
    'Infected ESP', 'Animal ESP', 'Text or bar health display', 'Vehicle ESP',
    'Helicopter-crash markers', 'Item quality', 'Text or bar quality style',
    'Battle mode', 'Show only when hovering', 'No clip', 'Always day',
    'Local position', 'Third-person unlock', 'No grass', 'Crosshair',
    'FPS limit', 'English and Chinese menu options', 'Save config', 'Load config',
  ],
  systemRequirements: [
    { icon: 'reqWindows', label: 'Operating system', text: 'Windows 10 or Windows 11.' },
    { icon: 'reqCpu', label: 'Processor platform', text: 'Intel or AMD.' },
    { icon: 'reqSettings', label: 'HVCI', text: 'HVCI enabled.' },
    { icon: 'reqSettings', label: 'Core Isolation', text: 'Core Isolation enabled.' },
    { icon: 'reqSettings', label: 'TPM', text: 'TPM enabled.' },
    { icon: 'reqSettings', label: 'Secure Boot', text: 'Secure Boot enabled.' },
    { icon: 'reqWifi', label: 'Internet', text: 'Stable internet connection for current loader access.' },
  ],
  about: [
    { type: 'p', text: 'This page summarizes the feature and requirements information published by the referenced product merchant.' },
    { type: 'h2', text: 'Affiliate disclosure' },
    { type: 'p', text: 'Purchase links lead to an external affiliate partner. This website may earn a commission from qualifying purchases.' },
  ],
  body: [
    { type: 'h2', text: 'Plan options' },
    { type: 'p', text: 'The public listing currently shows monthly access at $35 for 31 days and lifetime access at $150.' },
    { type: 'h2', text: 'Check before purchase' },
    { type: 'p', text: 'Review current merchant terms, compatibility, delivery and refund information before completing checkout.' },
  ],
  relatedBlogSlugs: ['dayz-cheats-pricing-plans', 'dayz-cheats-system-requirements', 'dayz-esp-features-guide'],
};

export const productPages: ProductPage[] = [product];
export const cheatPages = productPages;
export const productRelatedBlogSlugs: Record<string, string[]> = { elite: product.relatedBlogSlugs };

export function getProductPage(slug: string) { return productPages.find((entry) => entry.slug === slug); }
export function getCheatPage(slug: string) { return getProductPage(slug); }
export function getAllProductSlugs() { return productPages.map((entry) => entry.slug); }
export function getAllCheatSlugs() { return getAllProductSlugs(); }

export const productHub = {
  path: '/products/dayz-cheats/',
  title: 'DayZ Cheats',
  subtitle: 'Product features, requirements and access plans',
  description: 'Compare the listed DayZ product features, Windows requirements, monthly plan and lifetime access option.',
  buyUrl: checkoutPath('dayz'),
};
