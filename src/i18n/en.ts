import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Rust Cheat',
    domain: 'getrustcheat.com',
    title: 'Buy Undetected Rust Cheat | Aimbot, ESP & Wallhack',
    description:
      'Buy undetected Rust cheats for PC: aimbot, ESP, wallhack, radar, loot ESP and skin changer. Updated after Easy Anti-Cheat patches.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Rust online',
    eyebrow: 'Undetected Rust cheats',
    titleLine1: 'Undetected Rust Cheat',
    titleLine2: 'Aimbot, ESP & Wallhack',
    subtitle:
      'Buy Rust cheats for PC — aimbot, ESP, wallhack, radar and loot ESP for Battle Royale, Zero Build and Ranked. Updated after every EAC patch.',
    ctaPrimary: 'Buy cheats',
    ctaDiscord: 'Contact support',
    modesLabel: 'Modes',
    modes: ['Battle Royale', 'Zero Build', 'Ranked', 'Creative'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Cheat features',
    title: 'Rust cheat modules',
    subtitle: 'Aimbot, ESP, wallhack, radar and loot ESP — every module you need to dominate Rust on PC.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Smooth aim, per weapon',
        desc: 'Aimbot for Battle Royale and Zero Build. Set smoothness, FOV, bone priority and separate profiles for ARs, SMGs, shotguns and snipers.',
        bullets: [
          'Smoothness and FOV sliders',
          'Bone priority: head, chest or closest',
          'Profiles for AR, SMG, shotgun and sniper',
          'Prediction on moving targets',
          'Presets for Ranked, Zero Build and Creative',
        ],
        tags: ['rust aimbot', 'smoothness', 'bone priority'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'ESP / Wallhack',
        subtitle: 'See players through builds',
        desc: 'Boxes, skeletons, distance and health on enemies through walls and builds.',
        bullets: [
          'Player boxes, skeletons, HP and distance',
          'Team colors and wall visibility',
          'Alerts when enemies push or go missing',
        ],
        tags: ['rust ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar',
        subtitle: 'Know where fights are',
        desc: '2D radar for nearby enemies, storm edge and fights around you.',
        bullets: ['Enemy dots on mini-radar', 'Storm and POI markers', 'Works with ESP wallhack'],
        tags: ['rust radar', 'mini-map', 'rotations'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Loot / Chest ESP',
        subtitle: 'Find chests and loot',
        desc: 'Shows chests, floor loot and rare drops with distance so you can loot and leave faster.',
        bullets: ['Chest and floor-loot ESP', 'Rare and mythic markers', 'Reboot van and supply drop hints'],
        tags: ['chest ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Skin Changer',
        subtitle: 'Local outfit preview',
        desc: 'Preview outfits, wraps and pickaxes on your client only. Does not change game store purchases.',
        bullets: [
          'Outfit, wrap and pickaxe preview',
          'Favorites and loadout export',
          'Included with Elite or sold as Unlock All',
        ],
        tags: ['skin changer', 'unlock all', 'cosmetics'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Hide overlays on stream',
        desc: 'You see ESP and aimbot on your screen. OBS and Game Bar capture a clean game feed.',
        bullets: [
          'OBS and Game Bar modes',
          'Toggle per module',
          'Setup notes in the portal',
        ],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Cloud Config & EAC Updates',
        subtitle: 'After every patch',
        desc: 'Save configs to the cloud. Loader updates go out after Rust and Easy Anti-Cheat patches.',
        bullets: ['Cloud backup for aimbot and ESP', 'Loader updates after EAC patches', 'Status notes in support status channel'],
        tags: ['cloud sync', 'EAC updates', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Modes',
        subtitle: 'BR, Zero Build, Ranked, Creative',
        desc: 'Presets for Battle Royale, Zero Build, Ranked and Creative practice maps.',
        bullets: ['Battle Royale and Zero Build presets', 'Safer Ranked defaults', 'Creative maps for aim practice'],
        tags: ['Battle Royale', 'Zero Build', 'Ranked'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Extra tools',
        subtitle: 'Elite options',
        desc: 'Auto Finish, Auto Shield Break and loot assist on Elite, on top of aimbot and wallhack.',
        bullets: [
          'Auto Finish on low-HP enemies',
          'Auto Shield Break',
          'Loot assist on Elite',
        ],
        tags: ['auto finish', 'loot assist', 'utilities'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why our cheats',
    title: 'Rust cheats that stay online',
    subtitle:
      'Most cheat shops go down after EAC patches and leave you with bots. We ship loader updates fast, keep aimbot defaults safe for Ranked, and answer on support team 24/7.',
    usLabel: 'Rust Cheat',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'New builds usually go out within hours of a Rust or EAC update. Check support status channel before you queue.',
      },
      {
        title: 'Smooth aimbot defaults',
        desc: 'Default smoothness, FOV and bone priority are set for Ranked. You can tighten them later if you want.',
      },
      {
        title: 'support team',
        desc: 'People on support help with loader setup, weapon configs and HWID resets. Coverage is 24/7.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'External loader with OBS-safe mode so overlays stay off your stream.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save Battle Royale, Zero Build and per-weapon settings and load them on another PC.',
      },
      {
        title: 'HWID resets',
        desc: 'Hardware resets and license moves go through support team. Most shops lock you to one PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Usual time to ship a loader after a big Rust or EAC update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'support help for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Users',
        desc: 'PC players using aimbot, ESP and tools on getrustcheat.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Buy cheats. Play in',
    titleHighlight: 'three steps',
    intro:
      'Buy your Rust cheat, download the loader, load a preset, then open Rust. support help is there if you get stuck.',
    ctaPrimary: 'Buy cheats',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Buy and download the loader',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load presets',
        desc: 'Run the loader, pick a Ranked or Zero Build preset, and set aimbot and ESP.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch Rust on game platform, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after Rust updates before you launch.',
    items: ['Windows 10 & 11', 'Rust game client', 'Rust client', 'Auto updater', 'Config cloud sync', 'support team', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Rust product',
    title: 'Rust Cheats',
    subtitle: 'Rust visual ESP, weapon controls, aiming options and other listed modules.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Check status',
        tier: 'Survival',
        name: 'Rust Cheats',
        title: 'Rust Cheats',
        desc: 'Rust feature set with visual ESP, weapon options, aimbot settings, miscellaneous tools and configuration controls.',
        features: ['Visual ESP', 'Weapon options', 'Aimbot settings', 'Miscellaneous tools', 'Configuration controls', 'Cloud DMA required for full functionality'],
        more: 110,
        href: `${productBase}elite/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Buy Rust cheats',
    subtitle: 'Elite Rust cheats, HWID spoofer, UGC recovery and Skin Changer — pick what you need.',
    viewAll: 'View all cheats',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Rust HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Buy a Rust HWID spoofer for disk serials, MAC addresses and GPU IDs—run the portal guide before launching cheats again.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Rust UGC Unban Tools',
        subtitle: 'Unban & governance control',
        desc: 'Buy Rust UGC tools for Rust account restrictions, EAC bans and security holds—custom appeal workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Rust Skin Changer',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Buy Rust Skin Changer / Unlock All for outfits, wraps and pickaxes—local preview without game store purchases.',
        features: ['Outfit skin swap', 'Wrap & pickaxe customizer', 'Exclusive set preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Cheat guides',
    title: 'Rust cheat guides',
    subtitle: 'Aimbot setup, ESP wallhack config, Creative practice tips and EAC patch-day checks.',
    latestTitle: 'Latest cheat guides',
    latestSubtitle: 'Filter by topic or sort to find aimbot, ESP, wallhack and patch-day cheat guides.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [],
  },
  toolkit: {
    eyebrow: 'Cheat menu',
    title: 'Rust cheat menu, organized',
    subtitle: 'Every cheat module is grouped so you can tune aimbot and ESP mid-match without digging through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tracking that adapts per weapon', desc: 'Smoothness, FOV, Sticky Aim and Bone Priority in one aimbot tab.' },
      { num: '02', label: 'ESP', title: 'Wallhack that stays readable', desc: 'Boxes, skeletons, distance, health and team color filters.' },
      { num: '03', label: 'Radar', title: 'Loot and rotates on lock', desc: 'Enemy dots, loot timers and mini-radar on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon aimbot profiles', desc: 'Save AR, SMG, shotgun and sniper presets and swap with hotkeys.' },
      { num: '05', label: 'Loot', title: 'Chest ESP & loot assist', desc: 'Chest highlights, rare drops and Elite loot-assist pathing.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Battle Royale, Zero Build, Ranked and Creative presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From buy to',
    titleHighlight: 'in-game cheats.',
    subtitle: 'Buy Rust cheats, download the loader, turn on modules, save your config for next match.',
    ctaLabel: 'Buy cheats',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on getrustcheat.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Lite, Pro or Elite based on which modules you need.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and set up',
        desc: 'Download from the portal, turn on modules, and test in Creative or a bot lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When the settings feel right, save Battle Royale and Zero Build presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check support team and the portal status before you queue Ranked after a Rust update.' },
      { num: '02', title: 'Start slow', desc: 'Use the default aimbot smoothness and ESP range first, then raise them if you need to.' },
      { num: '03', title: 'support help', desc: 'Stuck on the loader or configs? Ask in support team and someone will walk you through it.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Rust Cheat support',
    subtitle: 'Loader, HWID, checkout and account help.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each product includes.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Community Forum',
        desc: 'Guide Q&A, patch talk and tier questions from other Rust players.',
        linkLabel: 'Open forum',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, bans and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'navBlog',
        title: 'Setup guides',
        desc: 'ESP, aimbot, patch-day and HWID walkthroughs on our blog.',
        linkLabel: 'Read guides',
        href: '/blog/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on getrustcheat.com.' },
      { title: 'Platform', desc: 'Windows 10 or 11, Rust game client, and your Rust version.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or Rust game platform.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Rust cheats FAQ',
    subtitle: 'Compatibility, bans, cheat tiers and setup — straight answers before you buy.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Rust cheats are online?',
        a: 'The live status banner is on getrustcheat.com and in the support status channel channel. Always check after a Rust or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rust.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party rust cheats?',
        a: 'Yes—any modification carries risk. EAC and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Rust via Rust game client on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a support team ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Changer live at getrustcheat.com/products/rust-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Rust cheats for PC: aimbot, ESP, wallhack and tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/rust-cheats/elite/', label: 'Elite rust cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/rust-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Rust Cheat | Buy PC Aimbot & ESP',
      description:
        'About Rust Cheat — buy PC Rust cheats (aimbot, ESP, wallhack), utilities and guides at getrustcheat.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Rust Cheat is a PC site for Rust aimbot, ESP, wallhack, radar and Skin Changer products. We post tier comparisons, setup guides and live status notes.',
            'Game and product names are for identification only.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Lite, Pro and Elite Rust cheats, plus HWID Spoofer, Skin Changer and UGC recovery. The blog covers configs, patch checks and Easy Anti-Cheat updates.',
            'Pages are updated when Rust or the loader changes. Check the homepage status banner and support status channel before you play.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use support team or email for loader errors, compatibility and checkout questions. Include your order email, Rust account and Windows version.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Rust Cheat Shop',
      description:
        'How the Rust cheats shop at getrustcheat.com handles analytics, cookies and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser and approximate region through Google Analytics when it is enabled. Checkout runs on external pages. We do not store payment card data on getrustcheat.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which guides and product pages people use so we can fix broken links and improve pages. Support tickets keep the email and message you send until the issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use basic analytics cookies. You can block cookies in your browser. The site still works without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the Support page. Purchase and refund rules are in Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for Rust Cheat | License & Refunds',
      description:
        'Terms for buying Rust cheats on getrustcheat.com — license use, delivery, refunds and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using getrustcheat.com or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Rust cheat tiers (Lite, Pro, Elite) and tools (HWID Spoofer, UGC, Skin Changer / Unlock All) through a portal and Windows loader for Rust game platform.',
            'Product pages list what is included when you buy. Features can change when Rust or Easy Anti-Cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. getrustcheat.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Rust.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Rust on game platform on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Rust build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Rust can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Rust Cheat Support | Loader, HWID & Checkout',
      description:
        'Rust cheats support for loader setup, HWID spoofing and checkout help at getrustcheat.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'RustCheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Rust Cheat on support team',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
