# Search Console workflow (getdayzcheats.net)

Prefer a DNS TXT record when verifying the domain property. DNS verification covers both the root hostname and `www`.

## Initial setup

1. Add the domain property `getdayzcheats.net` in Google Search Console.
2. Add the verification TXT record in Cloudflare DNS and wait for it to propagate.
3. Submit `https://getdayzcheats.net/sitemap.xml` under **Sitemaps**.
4. Inspect the homepage and main product page, then request indexing after the production deployment is live.

## Monthly review

1. Open **Performance** and select **Search results**.
2. Compare the last 28 days with the previous period.
3. Group queries by intent: general product research, features, requirements, pricing and purchase checks.
4. Improve the matching page when impressions grow but clicks remain low. Keep titles accurate and descriptions useful.
5. Avoid creating several near-identical pages for small keyword variations.

## Page map

| Search intent | Primary page |
| --- | --- |
| DayZ cheats for PC | `/` |
| Product features and plans | `/products/dayz-cheats/` |
| Detailed product information | `/products/dayz-cheats/elite/` |
| Windows requirements | `/blog/dayz-cheats-system-requirements/` |
| Pricing and durations | `/blog/dayz-cheats-pricing-plans/` |
| ESP feature explanation | `/blog/dayz-esp-features-guide/` |
| Pre-purchase checks | `/blog/dayz-product-pre-purchase-checklist/` |
| Refund information | `/refund-policy/` |

SEO overrides live in `src/config/pageSeo.ts`. Article titles and descriptions live in `src/data/blog/posts.ts`.
