import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'DayZ Cheats',
    domain: 'getdayzcheats.net',
    title: 'DayZ Cheats for PC | ESP, Aimbot & Wallhack',
    description: 'Compare DayZ cheats for Windows PC with player ESP, infected and item tracking, vehicle ESP, configurable aimbot options, and monthly or lifetime access.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: productBase, label: 'Products' },
    { href: '/blog/', label: 'Guides' },
    { href: '/forum/', label: 'Community' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'DayZ PC product', eyebrow: 'DayZ cheats for Windows PC',
    titleLine1: 'DayZ Cheats', titleLine2: 'ESP, Aimbot & Wallhack',
    subtitle: 'Review the listed DayZ player ESP, infected and item tracking, vehicle markers, aimbot controls, system requirements, and access plans before checkout.',
    ctaPrimary: 'View DayZ cheats', ctaDiscord: 'Contact support', modesLabel: 'Product highlights',
    modes: ['Player ESP', 'Item ESP', 'Vehicle ESP', 'Aimbot'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Product features', title: 'DayZ cheat feature overview',
    subtitle: 'A clear summary of the controls publicly listed for the referenced DayZ product. Availability can change, so confirm current details before purchase.',
    items: [
      {
        title: 'Aimbot controls', subtitle: 'FOV, range and target settings',
        desc: 'Toggle the listed aim module and configure field of view, aim distance, target groups, target bone and visual targeting aids.',
        bullets: ['Customizable field of view and aim distance', 'Player, infected and animal filters', 'Nearest, head, neck and pelvis target options', 'Target line and FOV display styles'],
        tags: ['DayZ aimbot', 'aim distance', 'target settings'], bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP', subtitle: 'Player information at a glance',
        desc: 'The public feature list includes player boxes, skeletons, health, names, distance, inventory and item-in-hand information.',
        bullets: ['Box, filled box and head-dot options', 'Skeleton and health bar', 'Name, distance and inventory information', 'Friend display and maximum-distance controls'],
        tags: ['player ESP', 'skeleton', 'inventory'], bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Infected ESP', subtitle: 'Track nearby infected',
        desc: 'Separate infected tracking is listed alongside the player and world display groups.',
        bullets: ['Dedicated infected display group', 'Separate from player filters', 'Designed for survival awareness'],
        tags: ['infected ESP', 'zombie tracking', 'survival'], bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'World and vehicle ESP', subtitle: 'Animals, vehicles and crash sites',
        desc: 'World options include animals, health displays, vehicles and helicopter-crash markers.',
        bullets: ['Animal ESP', 'Text or bar health styles', 'Vehicle ESP', 'Helicopter-crash markers'],
        tags: ['vehicle ESP', 'animal ESP', 'helicrash'], bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Item ESP', subtitle: 'Item quality and display filters',
        desc: 'Item controls list quality information, text or bar styles, battle mode and a hover-only display option.',
        bullets: ['Item-quality information', 'Text and bar quality styles', 'Battle mode', 'Show-only-when-hovering option'],
        tags: ['item ESP', 'loot quality', 'filters'], bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Display and config options', subtitle: 'Tune the menu for your setup',
        desc: 'The listing includes daytime, third-person, grass, crosshair and local-position options plus saved configuration controls.',
        bullets: ['Always-day and no-grass options', 'Third-person unlock and crosshair', 'FPS limit', 'Save and load configuration'],
        tags: ['configuration', 'display options', 'save config'], bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Before checkout', title: 'Review the facts before choosing access',
    subtitle: 'This site organizes public product information into a readable comparison and sends checkout to the named third-party partner.',
    usLabel: 'GetDayZCheats', otherLabel: 'Unclear listing',
    rows: [
      { title: 'Published plan prices', desc: 'Monthly access is listed at $35 and lifetime access at $150.' },
      { title: 'Detailed feature groups', desc: 'Aim, player, infected, world, item, miscellaneous and configuration controls are separated clearly.' },
      { title: 'Visible requirements', desc: 'Windows, processor platform and firmware requirements are shown before checkout.' },
      { title: 'Affiliate transparency', desc: 'Purchase buttons lead to an external partner, and this relationship is disclosed.' },
      { title: 'Support paths', desc: 'FAQ, setup guides and contact information remain available from every page.' },
    ],
    metrics: [
      { value: '$35', title: 'Monthly', desc: 'The referenced listing describes 31 days of access.' },
      { value: '$150', title: 'Lifetime', desc: 'The referenced listing describes unlimited-duration access.' },
      { value: '10/11', title: 'Windows', desc: 'The published requirements list Windows 10 and Windows 11.' },
    ],
  },
  setup: {
    eyebrow: 'Purchase flow', titleLead: 'Review, choose and', titleHighlight: 'continue securely',
    intro: 'Read the current feature list and requirements, choose the access duration, and complete purchase through the external checkout partner.',
    ctaPrimary: 'View product', ctaSecondary: 'Read FAQ', ctaPrimaryHref: productBase, ctaSecondaryHref: '/faq/',
    steps: [
      { step: 'Step 1', title: 'Review the product', desc: 'Compare features, limitations, system requirements and current plan information.' },
      { step: 'Step 2', title: 'Choose a duration', desc: 'Select monthly or lifetime access based on the current partner listing.' },
      { step: 'Step 3', title: 'Complete partner checkout', desc: 'Purchase and delivery are handled by the external merchant linked from this site.' },
    ],
  },
  compatibility: {
    eyebrow: 'Requirements', title: 'Windows PC compatibility',
    subtitle: 'Confirm the current product requirements with the merchant before purchase.',
    items: ['Windows 10', 'Windows 11', 'Intel and AMD', 'HVCI enabled', 'Core Isolation enabled', 'TPM enabled', 'Secure Boot enabled', 'Stable internet'],
  },
  cheats: {
    eyebrow: 'DayZ product', title: 'DayZ Cheats', subtitle: 'One product with monthly and lifetime duration options.',
    viewAll: 'View product details', explore: 'Explore',
    items: [{
      badge: 'Two duration options', tier: 'Windows PC', name: 'DayZ Cheats', title: 'DayZ Cheats',
      desc: 'Player, infected, world and item ESP with configurable aim, display and configuration controls.',
      features: ['Player ESP', 'Infected ESP', 'Vehicle and world ESP', 'Item quality display', 'Configurable aim controls', 'Save and load config'],
      more: 20, href: `${productBase}elite/`, variant: 'popular',
    }],
  },
  products: {
    eyebrow: 'Product', title: 'DayZ cheats and access plans',
    subtitle: 'Review the product details and choose monthly or lifetime access through the checkout partner.',
    viewAll: 'View product', get: 'View', explore: 'Explore',
    items: [{
      badge: 'Available through partner', category: 'Windows PC', title: 'DayZ Cheats', subtitle: 'ESP, aimbot and configuration tools',
      desc: 'A single DayZ product listing with published monthly and lifetime duration options.',
      features: ['Monthly: $35', 'Lifetime: $150', 'Windows 10/11', 'English menu'], more: 20, href: `${productBase}elite/`,
    }],
  },
  blog: {
    eyebrow: 'DayZ guides', title: 'DayZ product guides', subtitle: 'Plain-language explanations of features, requirements, plans and pre-purchase checks.',
    latestTitle: 'Latest guides', latestSubtitle: 'Find product, requirements and buying information.', filterAll: 'All articles',
    sortLabel: 'Sort by', sortNewest: 'Newest first', sortOldest: 'Oldest first', sortShortRead: 'Shortest read', sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.', viewAll: 'View all guides', read: 'Read guide', items: [],
  },
  toolkit: {
    eyebrow: 'Menu groups', title: 'Features organized by purpose', subtitle: 'Use the published feature groups to understand what the product listing includes.',
    items: [
      { num: '01', label: 'Aim', title: 'Aimbot controls', desc: 'FOV, aim distance, target filters, bone choices and target-line styles.' },
      { num: '02', label: 'Players', title: 'Player information', desc: 'Boxes, skeletons, health, name, distance, inventory and held items.' },
      { num: '03', label: 'World', title: 'World awareness', desc: 'Infected, animals, vehicles and helicopter-crash markers.' },
      { num: '04', label: 'Items', title: 'Item-quality display', desc: 'Quality labels, display styles, battle mode and hover filtering.' },
      { num: '05', label: 'Display', title: 'Visual options', desc: 'Daylight, third-person, grass, crosshair and local-position controls.' },
      { num: '06', label: 'Config', title: 'Saved settings', desc: 'FPS limit, language selection, save config and load config.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works', badge: '3 steps', titleBefore: 'From product review to', titleHighlight: 'partner checkout',
    subtitle: 'Check the facts, choose a duration and continue to the external merchant.', ctaLabel: 'View DayZ cheats', ctaHref: productBase,
    ctaSecondary: 'Read FAQ', ctaSecondaryHref: '/faq/',
    items: [
      { num: '01', phase: 'Research', title: 'Read the details', desc: 'Review features, system requirements, limitations and current plan information.' },
      { num: '02', phase: 'Choose', title: 'Select a duration', desc: 'Compare the published monthly and lifetime options.' },
      { num: '03', phase: 'Checkout', title: 'Use the partner store', desc: 'Purchase, billing and digital delivery are handled on the external merchant website.' },
    ],
  },
  fieldNotes: {
    eyebrow: 'Important notes', title: 'Before you continue',
    items: [
      { num: '01', title: 'Confirm current information', desc: 'Availability and compatibility can change after game or platform updates.' },
      { num: '02', title: 'Review requirements', desc: 'Check Windows and firmware requirements before choosing a plan.' },
      { num: '03', title: 'Understand the relationship', desc: 'This is an affiliate information website; checkout and fulfillment happen externally.' },
    ],
  },
  support: {
    eyebrow: 'Support', title: 'DayZ product support', subtitle: 'Find pre-purchase information, guides and contact options.',
    channels: [
      { icon: 'users', title: 'Before you buy', desc: 'Review the product, requirements and available durations.', linkLabel: 'View product', href: productBase },
      { icon: 'messageCircle', title: 'Community hub', desc: 'Browse DayZ product topics and useful resources.', linkLabel: 'Open community', href: '/forum/' },
      { icon: 'navFaq', title: 'FAQ', desc: 'Read compatibility, billing and product answers.', linkLabel: 'View FAQ', href: '/faq/' },
      { icon: 'navBlog', title: 'Setup guides', desc: 'Read requirements, feature and buying guides.', linkLabel: 'Read guides', href: '/blog/' },
    ],
    ticketTitle: 'Include with your question',
    ticketItems: [
      { title: 'Product and plan', desc: 'Say whether your question concerns monthly or lifetime access.' },
      { title: 'System information', desc: 'Include your Windows version and processor platform.' },
      { title: 'Exact issue', desc: 'Provide the complete message or checkout problem without sharing passwords or payment details.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ', title: 'DayZ cheats FAQ', subtitle: 'Straightforward answers based on the public product listing.',
    items: [
      { num: '01', q: 'Which operating systems are listed?', a: 'The public requirements list Windows 10 and Windows 11 on Intel or AMD systems.' },
      { num: '02', q: 'Which access durations are available?', a: 'The referenced listing currently shows monthly access at $35 and lifetime access at $150.' },
      { num: '03', q: 'What player information is listed?', a: 'Player options include boxes, skeleton, health, name, distance, inventory and item-in-hand information.' },
      { num: '04', q: 'Does the listing include world and item information?', a: 'Yes. The public feature list names infected, animals, vehicles, helicopter-crash markers, item quality and display filters.' },
      { num: '05', q: 'Where does checkout happen?', a: 'Purchase buttons send visitors to an external affiliate partner. That merchant handles payment, delivery and purchase support.' },
      { num: '06', q: 'Can compatibility change?', a: 'Yes. Software, game and platform updates can change compatibility. Confirm current information with the merchant before purchase.' },
    ],
  },
  footer: {
    tagline: 'DayZ product information, requirements, plans and independent buying guides.', explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', scrollTarget: 'features' },
      { href: `${productBase}elite/`, label: 'DayZ product details' },
      { href: productBase, label: 'Plans and requirements' },
      { href: '/blog/', label: 'Guides' },
      { href: '/faq/', label: 'FAQ' },
    ],
    support: 'Support', legal: 'Legal', privacy: 'Privacy Policy', terms: 'Terms & Conditions', about: 'About',
  },
  legalPages: {
    about: {
      title: 'About GetDayZCheats | DayZ Product Guide',
      description: 'Learn how GetDayZCheats organizes DayZ product details, requirements, plan information and affiliate links.',
      sections: [
        { heading: 'What this website does', paragraphs: ['GetDayZCheats is an informational affiliate website. We organize publicly supplied product information, requirements and plan details into readable pages.', 'Game and product names are used for identification. This website is not the game publisher or developer.'] },
        { heading: 'Affiliate relationship', paragraphs: ['Some links lead to third-party merchants. We may receive a commission when a visitor purchases through an affiliate link, without changing the listed checkout price.'] },
        { heading: 'Accuracy', paragraphs: ['Products, prices and compatibility can change. Confirm current information on the merchant website before purchasing.'] },
      ],
    },
    privacy: {
      title: 'Privacy Policy | GetDayZCheats', description: 'How GetDayZCheats handles basic website analytics, cookies and information sent through support channels.',
      sections: [
        { heading: 'Information handled by this site', paragraphs: ['The website may process basic server logs and privacy-conscious analytics when enabled. External checkout websites handle their own payment and account information under their own policies.'] },
        { heading: 'Cookies and local storage', paragraphs: ['Local storage may remember your light or dark theme preference. Optional analytics may use cookies when configured.'] },
        { heading: 'External websites', paragraphs: ['Affiliate merchants and other external websites have separate privacy practices. Review their policies before submitting personal or payment information.'] },
        { heading: 'Contact', paragraphs: ['Use the Support page for privacy questions. Do not send passwords, license keys or payment-card information.'] },
      ],
    },
    terms: {
      title: 'Terms and Affiliate Disclosure | GetDayZCheats', description: 'Terms covering informational content, affiliate links, third-party checkout and product-information limitations.',
      sections: [
        { heading: 'Informational website', paragraphs: ['GetDayZCheats provides product information and links to third-party merchants. We do not claim to be the game publisher or developer.'] },
        { heading: 'Affiliate links', paragraphs: ['We may earn a commission from qualifying purchases made through certain links. Affiliate relationships do not replace the merchant’s own terms, privacy policy, delivery process or refund policy.'] },
        { heading: 'Prices and product details', paragraphs: ['Prices, features, availability and compatibility can change. The external merchant’s checkout and current product page control the final transaction details.'] },
        { heading: 'Purchases and refunds', paragraphs: ['Payments, license delivery and refund requests are handled by the external merchant under its published terms. Review those terms before purchase.'] },
        { heading: 'Risk and responsibility', paragraphs: ['Third-party software can violate a game or service’s terms and may result in account restrictions. Visitors are responsible for reviewing applicable rules and understanding the risks before purchasing or using any product.'] },
      ],
    },
    support: {
      title: 'DayZ Product Support and Purchase Help', description: 'Find DayZ product requirements, buying information, FAQs and external merchant support guidance.',
    },
  },
  ui: {
    skipLink: 'Skip to main content', browseCheats: 'Try Now', browseCheatsMobile: 'View product', homeAria: 'DayZ Cheats home',
    checkoutAria: 'Open DayZ product checkout', discordAria: 'Open DayZ product support', menuOpen: 'Open menu', menuClose: 'Close menu',
    themeLight: 'Switch to light mode', themeDark: 'Switch to dark mode',
  },
};
