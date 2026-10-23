import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
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

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  label?: string;
  text: string;
}

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

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['fortnite-esp-wallhack-setup', 'fortnite-lite-vs-pro', 'fortnite-radar-hack-guide', 'eac-patch-day-checklist'],
  pro: [
    'fortnite-aimbot-ranked-guide',
    'fortnite-aimbot-combat-guide',
    'fortnite-lite-vs-pro',
    'fortnite-stream-proof-setup',
  ],
  elite: [
    'fortnite-elite-tier-guide',
    'fortnite-cheats-features-guide',
    'fortnite-esp-wallhack-setup',
    'eac-patch-day-checklist',
    'how-to-buy-fortnite-cheats-2026',
  ],
  'hwid-spoofer': [
    'fortnite-hwid-spoofer-after-ban',
    'eac-bypass-fortnite-guide',
    'eac-patch-day-checklist',
    'fortnite-external-cheat-guide',
  ],
  ugc: [
    'eac-bypass-fortnite-guide',
    'fortnite-hwid-spoofer-after-ban',
    'how-to-buy-fortnite-cheats-2026',
  ],
  'unlock-all': [
    'fortnite-skin-changer-guide',
    'fortnite-cheats-features-guide',
    'fortnite-stream-proof-setup',
  ],
};

const productBase = '/products/rust-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on getrustcheat.com and support status channel before purchase—especially after a Rust or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite rust cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open support team and confirm availability, Rust game platform platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Zero Build.',
  },
];

const rustAcquisition: ProductAcquisition = {
  title: 'How to get Rust Cheats',
  steps: [
    { num: '01', title: 'Check status', desc: 'Confirm the Rust product status is online before purchase.' },
    { num: '02', title: 'Pick a plan', desc: 'Choose an access duration and continue to checkout.' },
    { num: '03', title: 'Complete payment', desc: 'Pay by card, PayPal, or cryptocurrency. The key unlocks after payment.' },
    { num: '04', title: 'Install and start', desc: 'Use the product guide and setup help to install the software.' },
  ],
};

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rust and EAC receive frequent updates. Confirm module availability on the live status panel at getrustcheat.com before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Rust can violate game terms of service and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const rustSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', label: 'Operating system', text: 'Windows 10 version 21H2 or 22H2, or any Windows 11 version.' },
  { icon: 'reqCpu', label: 'Processor', text: 'Intel Core i7-3770 or AMD Ryzen 5 1600, or better.' },
  { icon: 'reqCpu', label: 'Graphics card', text: 'NVIDIA GTX 1060 or AMD RX 580, or better.' },
  { icon: 'reqCpu', label: 'Memory', text: '10 GB minimum; 16 GB recommended.' },
  { icon: 'reqSettings', label: 'Storage', text: '2 GB of free storage.' },
  { icon: 'reqWifi', label: 'Internet', text: 'Stable broadband connection.' },
  { icon: 'reqSettings', label: 'BIOS', text: 'Secure Boot disabled.' },
  { icon: 'reqEpic', label: 'Game', text: 'Latest Rust version.' },
  { icon: 'reqWifi', label: 'Cloud DMA', text: 'Required for full functionality.' },
];

const templateUtilityRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqEpic', text: 'Current Rust client with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access.' },
  { icon: 'reqCpu', text: 'A system that meets Rust published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/fortnite-esp-wallhack.png`,
    alt: 'Fortnite PC ESP wallhack overlay with player boxes, distance tags, and aimbot FOV circle',
    caption: 'ESP wallhack',
    captionDesc: 'Player boxes, distance tags and FOV overlay in Rust.',
  },
  gpScripts: {
    src: `${gameplay}/fortnite-aimbot-combat.png`,
    alt: 'Fortnite PC aimbot in combat with FOV circle and green skeleton ESP on an enemy',
    caption: 'Aimbot',
    captionDesc: 'Aimbot FOV and skeleton ESP on an enemy player.',
  },
  gpZoomHack: {
    src: `${gameplay}/fortnite-radar-hack.png`,
    alt: 'Fortnite radar hack and ESP overlay showing enemy names, health bars, and range markers',
    caption: 'Radar / ESP',
    captionDesc: 'Enemy name tags, health and range on radar ESP.',
  },
  gpSkinChanger: {
    src: `${gameplay}/fortnite-skin-changer.png`,
    alt: 'Fortnite chams and skeleton ESP with aim lock during a pier fight on PC',
    caption: 'Chams / ESP',
    captionDesc: 'Skeleton ESP and aim lock on a pier fight.',
  },
  gpAutoKill: {
    src: `${gameplay}/fortnite-auto-aim.png`,
    alt: 'Fortnite sniper aimbot with green ESP box, weapon label, and scoped FOV circle',
    caption: 'Sniper aimbot',
    captionDesc: 'Scoped aimbot with ESP box and weapon label.',
  },
  gpFarmBot: {
    src: `${gameplay}/fortnite-loot-radar.png`,
    alt: 'Fortnite loot and chest ESP with enemy boxes and distance trackers on the map',
    caption: 'Loot ESP',
    captionDesc: 'Loot and enemy ESP with distance trackers.',
  },
  gpHeroEsp: {
    src: `${gameplay}/fortnite-player-esp.png`,
    alt: 'Fortnite player ESP wallhack showing skeletons, boxes, and distance meters',
    caption: 'Player ESP',
    captionDesc: 'Skeletons, boxes and distance meters on players.',
  },
  gpThermal: {
    src: `${gameplay}/fortnite-thermal-esp.png`,
    alt: 'Fortnite thermal ESP wallhack with skeleton outlines, HP, and distance readouts',
    caption: 'Thermal ESP',
    captionDesc: 'Thermal view with skeleton wallhack, HP and distance.',
  },
  gpBuildFight: {
    src: `${gameplay}/fortnite-build-fight-esp.png`,
    alt: 'Fortnite build-fight ESP wallhack through builds with names, HP bars, and FOV',
    caption: 'Build fight ESP',
    captionDesc: 'ESP through builds with names, HP and FOV.',
  },
  gpArena: {
    src: `${gameplay}/fortnite-arena-wallhack.png`,
    alt: 'Fortnite arena wallhack ESP with wireframe players and weapon tags',
    caption: 'Arena wallhack',
    captionDesc: 'Wireframe ESP and weapon tags in an arena.',
  },
  gpSpawn: {
    src: `${gameplay}/fortnite-spawn-island-esp.png`,
    alt: 'Fortnite spawn island ESP with skeleton boxes and aimbot reticle overlay',
    caption: 'Spawn island ESP',
    captionDesc: 'Skeleton boxes and aimbot reticle on spawn island.',
  },
  gpLongRange: {
    src: `${gameplay}/fortnite-long-range-esp.png`,
    alt: 'Fortnite long-range ESP wallhack with enemy names, health, and weapons through cover',
    caption: 'Long range ESP',
    captionDesc: 'Long-range enemy names, health and weapons through cover.',
  },
  gpAimLock: {
    src: `${gameplay}/fortnite-aimbot-lock.png`,
    alt: 'Fortnite aimbot lock with green skeleton ESP, FOV circle, and head-bone priority',
    caption: 'Aimbot lock',
    captionDesc: 'Aimbot lock with skeleton ESP and head priority.',
  },
  gpChams: {
    src: `${gameplay}/fortnite-chams-esp.png`,
    alt: 'Fortnite chams and skeleton ESP cheat overlay on a wooden pier',
    caption: 'Chams ESP',
    captionDesc: 'Chams and skeleton ESP on a wooden pier.',
  },
  gpSquad: {
    src: `${gameplay}/fortnite-squad-esp.png`,
    alt: 'Fortnite multi-player squad ESP wallhack with boxes, skeletons, and distances',
    caption: 'Squad ESP',
    captionDesc: 'Multi-player ESP boxes, skeletons and distances.',
  },
  gpCombat: {
    src: `${gameplay}/fortnite-combat-esp.png`,
    alt: 'Fortnite combat ESP and aimbot overlay during an open-field fight on PC',
    caption: 'Combat ESP',
    captionDesc: 'ESP and aimbot overlay in an open-field fight.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const rustScreenshots = {
  ice: {
    src: '/images/rust-screenshots/rust-ice-field.webp',
    alt: 'Rust first-person view over snow with a weapon and visual markers.',
    caption: 'Snowfield view', captionDesc: 'First-person view across a snowy Rust area.',
  },
  aim: {
    src: '/images/rust-screenshots/rust-snow-aim.webp',
    alt: 'Rust first-person view aiming through a sight toward a snowy structure.',
    caption: 'Aim view', captionDesc: 'Aiming toward a structure in a snowy Rust scene.',
  },
  inventory: {
    src: '/images/rust-screenshots/rust-inventory-panel.webp',
    alt: 'Rust inventory and item interface over a forest scene.',
    caption: 'Item interface', captionDesc: 'The in-game item interface is open.',
  },
  snow: {
    src: '/images/rust-screenshots/rust-snow-panel.webp',
    alt: 'Rust item interface displayed over a snowy open area.',
    caption: 'Snow and items', captionDesc: 'An item panel over a snowy Rust scene.',
  },
  night: {
    src: '/images/rust-screenshots/rust-night-highlight.webp',
    alt: 'Rust nighttime view with a highlighted character and visual markers.',
    caption: 'Night scene', captionDesc: 'A character outline and markers in a nighttime scene.',
    width: 701, height: 438, widths: [640],
  },
  day: {
    src: '/images/rust-screenshots/rust-day-settings.webp',
    alt: 'Rust outdoor view with an on-screen settings panel.',
    caption: 'Settings panel', captionDesc: 'A settings panel shown over an outdoor Rust scene.',
  },
  combat: {
    src: '/images/rust-screenshots/rust-combat-panel.webp',
    alt: 'Rust combat view with a green settings panel and a player outline.',
    caption: 'Combat view', captionDesc: 'A player outline and settings panel in a Rust scene.',
  },
} satisfies Record<string, ProductSlide>;

function rustSlide(...keys: (keyof typeof rustScreenshots)[]): ProductSlide[] {
  return keys.map((key) => ({ ...rustScreenshots[key] }));
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'fortnite-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Rust Lite is built for players who want map awareness first. In ranked, knowing enemy positions, chest locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Rust Pro is the sweet spot for ranked grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aimbot, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with aimbot that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Rust Cheats groups visual ESP, weapon controls, aimbot settings, miscellaneous options and configuration tools. The product listing reports 116 included modules.',
    },
    { type: 'h2', text: 'Status and updates' },
    {
      type: 'p',
      text: 'Check live product status before launch, especially after a game or anti-cheat update. Free updates apply during the selected key period, and setup help is included.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and reboot-van locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Battle Royale and Zero Build ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Aimbot, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so aimbot stay natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at getrustcheat.com—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Included feature groups' },
    {
      type: 'p',
      text: 'The listed controls cover players, scientists, animals, ores, collectables, traps, stashes, tool cupboards, dropped items, vehicles, weapons, aiming, miscellaneous options and configuration.',
    },
    { type: 'h2', text: 'Cloud DMA' },
    {
      type: 'p',
      text: 'Cloud DMA is required for full functionality. The product page also lists AWS as an option.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Rust accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/rust-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Rust account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for game platform review. Pair with [HWID Spoofer](/products/rust-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: rustSlide('ice', 'snow', 'day'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: templateUtilityRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Chest & loot locator',
      'POI awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'Zero Build preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Rust Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, chest markers, loot timers and radar. No aimbot. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in Battle Royale and Zero Build without combat automation. Overlays are updated after Rust patches.',
      ],
    },
  },
  pro: {
    images: rustSlide('aim', 'day', 'combat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: templateUtilityRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon aimbot profiles',
      'Third-party alert integration',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'support team operator support',
    ],
    overview: {
      title: 'Rust Pro: aimbot plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for Battle Royale and Zero Build. Bone priority and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: rustSlide('aim', 'day', 'combat'),
    goodToKnow: 'Check live product status before launching, especially after Rust or Easy Anti-Cheat updates.',
    limitations: 'Compatibility may change after Rust or Easy Anti-Cheat updates. Check current status before launch.',
    systemRequirements: rustSystemRequirements,
    fullFeatures: [
      'Toggle Players', 'Custom Players Color', 'Custom Team Color', 'Player Distance Slider',
      'Toggle Scientists', 'Custom Scientists Color', 'Scientists Distance', 'ESP Style',
      'Box ESP', 'Skeleton ESP', 'Name ESP', 'Health ESP', 'Player Item ESP', 'Player Weapon ESP',
      'Toggle Animal ESP', 'Animal ESP Color', 'Animal Distance Slider', 'Boar ESP', 'Deer ESP',
      'Bear ESP', 'Polar Bear ESP', 'Wolf ESP', 'Horse ESP', 'Chicken ESP', 'Toggle Ores ESP',
      'Ores Distance Slider', 'Sulfur ESP', 'Sulfur Color', 'Metal ESP', 'Metal Color',
      'Stone ESP', 'Stone Color', 'Toggle Collectables ESP', 'Collectables Color',
      'Collectables Distance Slider', 'Wood ESP', 'Berry ESP', 'Hemp ESP', 'Food ESP',
      'Toggle Traps', 'Traps Color', 'Traps Distance Slider', 'Shotgun Traps ESP',
      'Auto Turret ESP', 'Snap Traps ESP', 'Flame Turrets ESP', 'Land Mines ESP', 'Samsite ESP',
      'Toggle Hidden Stashes', 'Toggle Tool Cupboards', 'Toggle Dropped Items', 'Dropped Items ESP',
      'Dropped Items Distance Slider', 'Toggle Weapons Only', 'Toggle Vehicles', 'Vehicles Color',
      'Vehicle Distance Slider', 'Instant Eoka', 'Instant Compound', 'Instant Bow', 'No Recoil',
      'No Recoil Yaw', 'No Recoil Pitch', 'No Sway', 'No Spread', 'No Bob', 'Sprint Melee',
      'Far Melee', 'Fat Melee', 'Recoil While Scope', 'Auto Reload Sniper', 'Always Automatic',
      'Rapid Fire', 'Longneck', 'Longneck Key', 'Shortneck', 'Shortneck Key', 'Leftside Peek',
      'Leftside Peek Key', 'Rightside Peek Key', 'Toggle Aimbot', 'Aimbot FOV Slider',
      'FOV Circle', 'Aimbot Smoothing Slider', 'Custom Aim Bone', 'Custom Aim Key', 'AdminFlag',
      'Stash Exploit', 'Bright Night', 'Fullbright', 'Spiderman', 'Infinite Jump', 'Low Gravity',
      'Climb Assist', 'Climb Assist Key', 'Climb Assist #2', 'No Fall Damage', 'Zoom', 'Zoom Key',
      'FOV Changer', 'FOV Value Slider', 'Flyhack', 'Flyhack Key', 'Self Kill', 'Close Cheat',
      'Toggle Watermark', 'Font Slider', 'Icon Size Slider', 'Corner Size Slider', 'Box Width Slider',
      'Skeleton Size Slider', 'Game Width', 'Update FPS Slider', 'Renderer FPS Slider', 'AWS option',
      'Cloud DMA option',
    ],
    overview: {
      title: 'Rust Cheats',
      paragraphs: [
        'The Rust feature set includes visual ESP controls, weapon options, aimbot settings, miscellaneous tools and configuration controls.',
        'The listing states 116 modules. Cloud DMA is required for full functionality, and AWS is listed as an option.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rust.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Rust after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'support team recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for Rust PC bans',
      paragraphs: [
        'Use the HWID Spoofer when Easy Anti-Cheat flags your PC hardware but the Rust account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only EAC bans. After spoofing, use a safer cheat profile before Ranked.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on getrustcheat.com or at checkout on getrustcheat.com.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for support team and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for game platform restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. support team can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify game inventory or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: templateUtilityRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Pickaxe & wrap customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, wraps and pickaxes on your Rust client. It does not change your game inventory or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = 'Rust Cheats';
    return {
      slug,
      kind: 'tier',
      category: 'Survival',
      badge: cheat.badge,
      tier: cheat.tier,
      name: displayName,
      title: displayName,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: slug === 'elite' ? rustAcquisition : acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = rustSlide('aim', 'day', 'combat');

export const heroSlides = rustSlide('ice', 'aim', 'inventory', 'snow', 'night', 'day', 'combat');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Product details for Rust Cheats, HWID Spoofer, UGC Account Recovery and Skin Changer.',
  buyUrl: checkoutPath('rust'),
};
