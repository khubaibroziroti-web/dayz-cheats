export interface ForumComment {
  author: string;
  age: string;
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
  commentsCount: number;
  upvotes: number;
  flair: string;
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
    slug: 'dayz-status-after-game-update', category: 'Patch Talk', categoryTone: 'orange',
    title: 'DayZ updated today. What should you check first?',
    excerpt: 'A practical checklist for checking current product information after a DayZ or Windows update.',
    author: 'status-desk', age: 'Oct 28, 2026', date: '2026-10-28', commentsCount: 2, upvotes: 0, flair: 'Status check',
    body: ['After a DayZ, anti-cheat, or Windows update, do not assume the previous compatibility status still applies. Check the current merchant listing and support notices before opening or purchasing third-party software.', 'If current status is not clearly published, wait for confirmation from the merchant support team.'],
    comments: [{ author: 'setup-desk', age: 'Oct 28, 2026', body: 'The safest order is status, compatibility notes, system requirements, and only then setup.', replies: [{ author: 'status-desk', age: 'Oct 28, 2026', body: 'That makes sense. An older status message should not be treated as current.' }] }],
    sourceTitle: 'DayZ product pre-purchase checklist', sourcePath: '/blog/dayz-product-pre-purchase-checklist/',
  },
  {
    slug: 'dayz-windows-requirements-check', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How do I check the DayZ product Windows requirements?',
    excerpt: 'Compare your operating system and firmware settings with the currently published checklist.',
    author: 'setup-desk', age: 'Oct 24, 2026', date: '2026-10-24', commentsCount: 2, upvotes: 0, flair: 'Setup question',
    body: ['The product information currently names Windows 10 or Windows 11 and asks buyers to review HVCI, Core Isolation, TPM, and Secure Boot requirements.', 'Requirements can change, so compare the current merchant listing with your own system before checkout.'],
    comments: [{ author: 'requirements-editor', age: 'Oct 24, 2026', body: 'Use the requirements guide as a checklist, then confirm anything unclear with merchant support.', replies: [{ author: 'setup-desk', age: 'Oct 25, 2026', body: 'I will verify each item instead of assuming a Windows version is enough.' }] }],
    sourceTitle: 'DayZ cheats system requirements', sourcePath: '/blog/dayz-cheats-system-requirements/',
  },
  {
    slug: 'dayz-player-esp-feature-groups', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is included in the listed DayZ player information group?',
    excerpt: 'A plain-language summary of the player labels and display controls named on the product page.',
    author: 'feature-editor', age: 'Oct 20, 2026', date: '2026-10-20', commentsCount: 2, upvotes: 0, flair: 'Feature question',
    body: ['The published list includes friend display, box and filled-box styles, a head dot, skeleton, health bar, player name, distance, inventory, item in hands, traces, and a maximum display distance.', 'Treat the live merchant listing as the current source because features may change after updates.'],
    comments: [{ author: 'guide-editor', age: 'Oct 20, 2026', body: 'The full product page is easier to compare than the short product card.', replies: [{ author: 'feature-editor', age: 'Oct 20, 2026', body: 'Agreed—the categories make more sense when read separately.' }] }],
    sourceTitle: 'DayZ ESP features guide', sourcePath: '/blog/dayz-esp-features-guide/',
  },
  {
    slug: 'dayz-infected-animal-world-information', category: 'General', categoryTone: 'purple',
    title: 'Are infected, animals, vehicles, and crash sites separate categories?',
    excerpt: 'How the current feature list separates infected, animal, vehicle, and world information.',
    author: 'feature-desk', age: 'Oct 16, 2026', date: '2026-10-16', commentsCount: 2, upvotes: 0, flair: 'Feature list',
    body: ['Yes. The current product description separates infected information from animal, vehicle, and helicopter-crash information.', 'The listing also mentions text or bar health display options. Confirm the current controls on the external merchant page before purchase.'],
    comments: [{ author: 'guide-editor', age: 'Oct 16, 2026', body: 'Reading the feature list by group helps avoid mixing world information with player settings.', replies: [{ author: 'feature-desk', age: 'Oct 17, 2026', body: 'That distinction is what I needed.' }] }],
    sourceTitle: 'DayZ ESP features guide', sourcePath: '/blog/dayz-esp-features-guide/',
  },
  {
    slug: 'dayz-monthly-or-lifetime-plan', category: 'Community', categoryTone: 'green',
    title: 'Monthly or lifetime: how should the two plans be compared?',
    excerpt: 'Compare the published duration and price without assuming unlisted plan differences.',
    author: 'plan-desk', age: 'Oct 12, 2026', date: '2026-10-12', commentsCount: 2, upvotes: 0, flair: 'Buying question',
    body: ['The referenced listing currently shows monthly access at $35 for 31 days and lifetime access at $150.', 'The supplied information does not establish different feature sets for the two durations. Confirm the final price, availability, and any plan differences at checkout.'],
    comments: [{ author: 'buying-guide', age: 'Oct 12, 2026', body: 'Start with compatibility and expected duration, then confirm the final merchant terms.', replies: [{ author: 'plan-desk', age: 'Oct 13, 2026', body: 'I will check the current listing before choosing.' }] }],
    sourceTitle: 'Monthly vs lifetime access', sourcePath: '/blog/dayz-cheats-pricing-plans/',
  },
  {
    slug: 'dayz-item-quality-display-options', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What does the DayZ item-quality display list mention?',
    excerpt: 'A short breakdown of the item information options named in the current listing.',
    author: 'item-guide', age: 'Oct 08, 2026', date: '2026-10-08', commentsCount: 2, upvotes: 0, flair: 'Feature question',
    body: ['The published item group names item quality, text or bar quality styles, battle mode, and a show-only-when-hovering option.', 'This page summarizes the supplied list; it does not guarantee permanent availability or compatibility.'],
    comments: [{ author: 'feature-editor', age: 'Oct 08, 2026', body: 'The current listing should always win if it differs from an older guide.', replies: [{ author: 'item-guide', age: 'Oct 09, 2026', body: 'Understood. I will use this as a reading guide, not a status page.' }] }],
    sourceTitle: 'DayZ ESP features guide', sourcePath: '/blog/dayz-esp-features-guide/',
  },
  {
    slug: 'dayz-aim-controls-explained', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Which configurable aim controls are actually listed?',
    excerpt: 'Review the named FOV, distance, smoothing, target, and filter controls without invented settings.',
    author: 'controls-editor', age: 'Oct 04, 2026', date: '2026-10-04', commentsCount: 2, upvotes: 0, flair: 'Controls',
    body: ['The product information names a customizable field of view, aim distance, smoothing, aim key, player/infected/animal filters, and several target choices.', 'No recommended values are published here. Use current documentation or merchant support instead of copying settings from another product.'],
    comments: [{ author: 'setup-desk', age: 'Oct 04, 2026', body: 'Control names do not establish recommended values or permanent compatibility.', replies: [{ author: 'controls-editor', age: 'Oct 05, 2026', body: 'That is a useful limit to make clear.' }] }],
    sourceTitle: 'DayZ product details', sourcePath: '/products/dayz-cheats/elite/',
  },
  {
    slug: 'dayz-config-save-load-options', category: 'General', categoryTone: 'purple',
    title: 'Does the listing include save and load configuration controls?',
    excerpt: 'A focused answer about the configuration controls named in the current feature list.',
    author: 'config-desk', age: 'Sep 30, 2026', date: '2026-09-30', commentsCount: 2, upvotes: 0, flair: 'Configuration',
    body: ['The supplied feature list names save configuration and load configuration controls.', 'The public information does not specify file locations or migration behavior, so current setup documentation should be used for those details.'],
    comments: [{ author: 'guide-editor', age: 'Sep 30, 2026', body: 'That keeps the answer within what the listing actually confirms.', replies: [{ author: 'config-desk', age: 'Oct 01, 2026', body: 'I will ask support about any file-specific details.' }] }],
    sourceTitle: 'DayZ product details', sourcePath: '/products/dayz-cheats/elite/',
  },
  {
    slug: 'dayz-third-party-software-risk', category: 'Community', categoryTone: 'green',
    title: 'What risks should be reviewed before buying third-party software?',
    excerpt: 'Why buyers should read game rules, product limitations, and merchant terms before checkout.',
    author: 'policy-desk', age: 'Sep 26, 2026', date: '2026-09-26', commentsCount: 2, upvotes: 0, flair: 'Before you buy',
    body: ['Third-party software may violate game or platform terms and can result in account restrictions. No product should be treated as permanently safe or undetected.', 'Review the disclaimer, current compatibility information, delivery terms, and refund policy before purchase.'],
    comments: [{ author: 'buying-guide', age: 'Sep 26, 2026', body: 'A useful buying page should make the limitations as visible as the feature list.', replies: [{ author: 'policy-desk', age: 'Sep 27, 2026', body: 'Agreed. Risk and merchant terms belong in the decision.' }] }],
    sourceTitle: 'DayZ product pre-purchase checklist', sourcePath: '/blog/dayz-product-pre-purchase-checklist/',
  },
  {
    slug: 'dayz-skin-changer-expectations', category: 'General', categoryTone: 'purple',
    title: 'What should be confirmed before choosing a DayZ skin changer?',
    excerpt: 'Questions to ask about supported versions, cosmetic options, and local-only limitations.',
    author: 'utility-desk', age: 'Sep 22, 2026', date: '2026-09-22', commentsCount: 2, upvotes: 0, flair: 'Utility question',
    body: ['Confirm the supported game version, available cosmetic controls, system requirements, and whether changes are only local before purchase.', 'A cosmetic tool does not create official ownership of store items unless the merchant explicitly and accurately says otherwise.'],
    comments: [{ author: 'product-editor', age: 'Sep 22, 2026', body: 'The external listing is the current source for compatibility and exact behavior.', replies: [{ author: 'utility-desk', age: 'Sep 23, 2026', body: 'That answers the expectation question clearly.' }] }],
    sourceTitle: 'DayZ Skin Changer information', sourcePath: '/products/dayz-cheats/skin-changer/',
  },
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
