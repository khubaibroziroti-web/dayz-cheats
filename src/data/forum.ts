export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  date: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent?: 'Informational' | 'Commercial' | 'Transactional' | 'Support' | 'Feature' | 'Status';
  searchTopic?: string;
  suggestedInternalLinks?: { href: string; anchor: string }[];
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'rust-cheats-status-after-update', category: 'Patch Talk', categoryTone: 'orange',
    title: 'Rust updated today. Where do you check cheat status first?',
    excerpt: 'A quick discussion about checking live status after Rust or anti-cheat updates.',
    author: 'scrapmath', age: 'Oct 14, 2026', date: '2026-10-14', commentsCount: 3, upvotes: 0, flair: 'Status check',
    primaryKeyword: 'Rust cheats status', secondaryKeywords: ['Rust cheat update', 'Rust compatibility status'],
    searchIntent: 'Status', searchTopic: 'Where to verify product status after a Rust or anti-cheat update.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'current Rust product status' }, { href: '/support/', anchor: 'support' }],
    body: ['Rust had an update this morning and I am trying to work out the right order before launching anything. Do you check the product status first, or wait for a separate note about the anti-cheat? I would rather not assume yesterday\'s status still applies.'],
    comments: [
      { author: 'statusreader', age: 'Oct 14, 2026', score: 0, body: 'Check the live status before launch. The product guidance specifically says to pay attention after a game or anti-cheat update.' , replies: [
        { author: 'scrapmath', age: 'Oct 14, 2026', score: 0, body: 'Got it. I was looking for a fixed update timer, but the page does not promise one.' },
        { author: 'rustybolt', age: 'Oct 15, 2026', score: 0, body: 'Also check the setup notes if the status changes. Guessing from an old session is how people make extra work for themselves.' },
      ] },
    ],
  },
  {
    slug: 'rust-cheats-pc-requirements-check', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Can someone sanity check these Rust Cheats PC requirements?',
    excerpt: 'Readers compare their PC with the published operating system and hardware checklist.',
    author: 'oxidecup', age: 'Oct 02, 2026', date: '2026-10-02', commentsCount: 3, upvotes: 0, flair: 'Setup question',
    primaryKeyword: 'Rust cheats PC requirements', secondaryKeywords: ['Rust cheat Windows 11', 'Rust cheat CPU and GPU'],
    searchIntent: 'Support', searchTopic: 'How to interpret the listed Windows, processor, graphics, memory, and storage requirements.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the full system requirements' }, { href: '/faq/', anchor: 'setup FAQ' }],
    body: ['The listing says Windows 10 21H2 or 22H2, or Windows 11, plus an i7-3770 or Ryzen 5 1600 and GTX 1060 or RX 580. It also says 10 GB RAM minimum, 16 recommended, and 2 GB free. Is disabling the boot security setting the only BIOS change it calls out?'],
    comments: [
      { author: 'framepacing', age: 'Oct 02, 2026', score: 0, body: 'Yes, it says to disable the BIOS boot security setting. It also calls for stable broadband and says Cloud DMA is needed for full functionality.', replies: [
        { author: 'oxidecup', age: 'Oct 03, 2026', score: 0, body: 'Thanks, I missed that line. I will ask support what I need to know about Cloud DMA before picking a plan.' },
        { author: 'beancanbandit', age: 'Oct 03, 2026', score: 0, body: 'That is the one I would clarify too. Better to ask once than guess from a random comment lol.' },
      ] },
    ],
  },
  {
    slug: 'cloud-dma-rust-product-requirement', category: 'General', categoryTone: 'purple',
    title: 'What does the Cloud DMA requirement mean on the product page?',
    excerpt: 'A focused question on the Cloud DMA requirement and the limits of the published details.',
    author: 'tinroof', age: 'Sep 21, 2026', date: '2026-09-21', commentsCount: 3, upvotes: 0, flair: 'Compatibility',
    primaryKeyword: 'Cloud DMA Rust Cheats', secondaryKeywords: ['Rust Cheats requirement', 'Cloud DMA option'],
    searchIntent: 'Informational', searchTopic: 'What the published Cloud DMA requirement says and which setup details still need support clarification.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the Cloud DMA requirement' }, { href: '/support/', anchor: 'ask support about compatibility' }],
    body: ['I see Cloud DMA listed as required for full functionality, plus AWS and CLOUD-DMA entries under config options. The page does not explain the setup. Is there a current guide for what that means, or should I ask support before checkout?'],
    comments: [
      { author: 'deadzoneandy', age: 'Sep 21, 2026', score: 0, body: 'Ask support. The published details establish the requirement but do not spell out a hardware list or steps, so I would not fill in the blanks from guesses.', replies: [
        { author: 'tinroof', age: 'Sep 22, 2026', score: 0, body: 'Fair. I was hoping I missed a docs link somewhere.' },
        { author: 'wetsocks', age: 'Sep 22, 2026', score: 0, body: 'Same question here. A short compatibility checklist would save a lot of back and forth.' },
      ] },
    ],
  },
  {
    slug: 'rust-player-esp-controls-explained', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Player ESP has a lot of toggles. What is actually listed?',
    excerpt: 'A breakdown of player labels, colors, distance, and the separate scientist controls.',
    author: 'orewatch', age: 'Sep 08, 2026', date: '2026-09-08', commentsCount: 3, upvotes: 0, flair: 'Feature question',
    primaryKeyword: 'Rust player ESP', secondaryKeywords: ['Rust box ESP', 'Rust skeleton ESP', 'Rust name ESP'],
    searchIntent: 'Feature', searchTopic: 'Which player and scientist visual controls are named in the Rust Cheats list.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the full player ESP list' }, { href: '/blog/rust-esp-features-guide/', anchor: 'ESP categories explained' }],
    body: ['I was reading the player ESP section and there are more labels than I expected. The list names box, skeleton, name, health, item, and weapon ESP, plus player/team colors and distance. Scientists are their own toggle and color/distance set, right?'],
    comments: [
      { author: 'copperwire', age: 'Sep 08, 2026', score: 0, body: 'That is how the feature list is grouped, yes. The player entries and scientist entries have separate controls.', replies: [
        { author: 'orewatch', age: 'Sep 08, 2026', score: 0, body: 'Thanks, that is the distinction I could not tell from the shorter card.' },
        { author: 'nohelmet', age: 'Sep 09, 2026', score: 0, body: 'The distance slider wording is handy. At least it is clear which category it belongs to.' },
      ] },
    ],
  },
  {
    slug: 'rust-animal-resource-esp-list', category: 'General', categoryTone: 'purple',
    title: 'Which animals and resources are covered by the ESP list?',
    excerpt: 'Players compare the named animal, ore, and collectable categories in the feature list.',
    author: 'quietpick', age: 'Aug 27, 2026', date: '2026-08-27', commentsCount: 3, upvotes: 0, flair: 'Feature list',
    primaryKeyword: 'Rust animal ESP', secondaryKeywords: ['Rust ore ESP', 'Rust collectable ESP'],
    searchIntent: 'Feature', searchTopic: 'Which animals, ores, and collectables are specifically named in the product feature list.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the named ESP categories' }, { href: '/blog/rust-esp-features-guide/', anchor: 'the ESP feature guide' }],
    body: ['Trying to compare the long list with the card summary. Animals named are boar, deer, bear, polar bear, wolf, horse, and chicken. For resources it says sulfur, metal, and stone. Did I miss another resource category?'],
    comments: [
      { author: 'sulfurbudget', age: 'Aug 27, 2026', score: 0, body: 'That matches the categories in the supplied list. It also names wood, berry, hemp, and food under collectables.', replies: [
        { author: 'quietpick', age: 'Aug 28, 2026', score: 0, body: 'Ah, I was lumping collectables in with ore. Appreciate the correction.' },
        { author: 'grubtax', age: 'Aug 28, 2026', score: 0, body: 'The separate colors and distance controls make more sense when you read it by group.' },
      ] },
    ],
  },
  {
    slug: 'rust-weapon-options-feature-list', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Rust weapon options list: recoil, sway, reload, and more',
    excerpt: 'A practical read-through of the weapon controls named in the Rust Cheats feature list.',
    author: 'latencylog', age: 'Aug 14, 2026', date: '2026-08-14', commentsCount: 3, upvotes: 0, flair: 'Feature question',
    primaryKeyword: 'Rust cheat weapon options', secondaryKeywords: ['Rust no recoil option', 'Rust weapon settings'],
    searchIntent: 'Feature', searchTopic: 'Which weapon controls and options are named in the supplied feature list.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the weapon options list' }, { href: '/faq/', anchor: 'product questions' }],
    body: ['The weapon section lists several options: instant Eoka, compound, and bow; no recoil, sway, spread, and bob; sprint, far, and fat melee; plus auto reload sniper, always automatic, and rapid fire. It also has Longneck, Shortneck, and peek controls. Is that the full group?'],
    comments: [
      { author: 'woodenhorse', age: 'Aug 14, 2026', score: 0, body: 'Those are the entries shown in the weapon group. The page also lists recoil while scoped and key settings for Longneck and peeking.', replies: [
        { author: 'latencylog', age: 'Aug 14, 2026', score: 0, body: 'Right, missed the scoped line. The names are pretty specific, which helps when comparing the tiers.' },
        { author: 'bandageplease', age: 'Aug 15, 2026', score: 0, body: 'It is a hefty list. I would still check status and requirements before worrying about every toggle.' },
      ] },
    ],
  },
  {
    slug: 'rust-traps-and-world-object-esp', category: 'General', categoryTone: 'purple',
    title: 'Does the Rust list include traps, stashes, and tool cupboards?',
    excerpt: 'A question about the named trap types and other world-object toggles.',
    author: 'twigcollector', age: 'Aug 03, 2026', date: '2026-08-03', commentsCount: 3, upvotes: 0, flair: 'Feature question',
    primaryKeyword: 'Rust trap ESP', secondaryKeywords: ['Rust hidden stash ESP', 'Rust tool cupboard ESP'],
    searchIntent: 'Feature', searchTopic: 'Whether the feature list names trap types, hidden stashes, tool cupboards, and dropped items.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the complete world-object list' }, { href: '/blog/rust-esp-features-guide/', anchor: 'the ESP category guide' }],
    body: ['I noticed traps in the second visual section. It names shotgun traps, auto turrets, snap traps, flame turrets, land mines, and SAM sites. Are hidden stashes and tool cupboards also separate toggles?'],
    comments: [
      { author: 'tealbucket', age: 'Aug 03, 2026', score: 0, body: 'Yes, both have their own toggles in the list. Dropped items do too, with a dropped-item ESP and distance setting.', replies: [
        { author: 'twigcollector', age: 'Aug 04, 2026', score: 0, body: 'Nice, thanks. I had skipped over the toggles when scanning the list.' },
        { author: 'rustcrumb', age: 'Aug 04, 2026', score: 0, body: 'Vehicles are grouped there as well, with a color and distance option.' },
      ] },
    ],
  },
  {
    slug: 'rust-aimbot-fov-smoothing-controls', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'FOV circle and smoothing slider: what do the labels tell us?',
    excerpt: 'A discussion about the named aim controls and which details the feature list leaves open.',
    author: 'mosswall', age: 'Jul 29, 2026', date: '2026-07-29', commentsCount: 3, upvotes: 0, flair: 'Controls',
    primaryKeyword: 'Rust aimbot FOV settings', secondaryKeywords: ['Rust aim smoothing', 'Rust custom aim bone'],
    searchIntent: 'Informational', searchTopic: 'What the supplied FOV, smoothing, aim bone, and key controls describe.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the listed aim controls' }, { href: '/blog/rust-aimbot-settings-guide/', anchor: 'a guide to the aim setting labels' }],
    body: ['The aimbot section has a FOV slider, FOV circle, smoothing slider, custom aim bone, and custom aim key. I cannot find a scale or recommended values anywhere in the supplied info. Does the guide explain those once you have access?'],
    comments: [
      { author: 'reedbed', age: 'Jul 29, 2026', score: 0, body: 'The feature summary only names the controls. It does not give values or bone choices, so the current guide or support is the place to confirm those details.', replies: [
        { author: 'mosswall', age: 'Jul 30, 2026', score: 0, body: 'Makes sense. I did not want to assume settings from another game.' },
        { author: 'mousemat', age: 'Jul 30, 2026', score: 0, body: 'That is a good call. Same label does not mean same scale.' },
      ] },
    ],
  },
  {
    slug: 'rust-cheats-plan-duration-question', category: 'Community', categoryTone: 'green',
    title: 'One month or lifetime: how are you comparing the plans?',
    excerpt: 'A buyer question comparing the two listed durations without assuming plan benefits.',
    author: 'thirtyscrap', age: 'Jul 26, 2026', date: '2026-07-26', commentsCount: 3, upvotes: 0, flair: 'Buying question',
    primaryKeyword: 'Rust cheat plans', secondaryKeywords: ['Rust Cheats price', 'Rust cheat duration'],
    searchIntent: 'Commercial', searchTopic: 'How to compare the one-month and lifetime plan durations and listed prices.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/elite/', anchor: 'the current plan options' }, { href: '/blog/rust-cheats-pricing-plans/', anchor: 'plan prices and durations' }],
    body: ['The plan page shows 30 days for $35 and lifetime for $150. Is there any difference in features between them, or is the choice just how long you need access? I could not see a plan comparison beyond duration.'],
    comments: [
      { author: 'quietpick', age: 'Jul 26, 2026', score: 0, body: 'The details supplied here list different durations and prices, but do not describe plan-specific feature differences. I would ask support if that is a deciding factor.', replies: [
        { author: 'thirtyscrap', age: 'Jul 27, 2026', score: 0, body: 'Thanks, that is what I thought. I will compare the duration and clarify before I choose.' },
        { author: 'tinroof', age: 'Jul 27, 2026', score: 0, body: 'Also check the status and requirements first. No point debating durations until compatibility is clear.' },
      ] },
    ],
  },
  {
    slug: 'rust-skin-changer-local-preview', category: 'General', categoryTone: 'purple',
    title: 'Skin changer question: does a local preview change your Rust locker?',
    excerpt: 'A clarification about local cosmetic previews versus account and store inventory.',
    author: 'bluebarrel', age: 'Jul 24, 2026', date: '2026-07-24', commentsCount: 3, upvotes: 0, flair: 'Utility question',
    primaryKeyword: 'Rust skin changer', secondaryKeywords: ['Rust cosmetic preview', 'Rust skin changer local preview'],
    searchIntent: 'Informational', searchTopic: 'What the listed Skin Changer preview changes and what it does not change.',
    suggestedInternalLinks: [{ href: '/products/rust-cheats/unlock-all/', anchor: 'Skin Changer details' }, { href: '/products/rust-cheats/', anchor: 'all Rust products' }],
    body: ['The Skin Changer page says local preview only and that it does not change the game store or other players\' view. So this is for seeing a look on your own client, not adding items to an account locker, right?'],
    comments: [
      { author: 'copperwire', age: 'Jul 24, 2026', score: 0, body: 'That is the stated limit: local preview. It does not update the locker or store, and other players do not see the preview.', replies: [
        { author: 'bluebarrel', age: 'Jul 24, 2026', score: 0, body: 'Cool, that distinction should be right on the short card too. Thanks.' },
        { author: 'orewatch', age: 'Jul 25, 2026', score: 0, body: 'Yeah, expectation setting saves confusion.' },
      ] },
    ],
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
