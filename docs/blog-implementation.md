# Blog infrastructure implementation

## Files created

- `app/blog/page.tsx` — static resource index and empty state.
- `app/blog/[slug]/page.tsx` — static article route and reusable template.
- `app/blog/blog.module.css` — scoped article typography, focus, and responsive styles.
- `components/blog/BlogPreview.tsx` — shared editorial article preview.
- `components/blog/BlogListing.tsx` — small category selector with server-rendered previews.
- `components/blog/BlogBody.tsx` — typed article blocks and optimized images.
- `components/sections/home/ResourcesSection.tsx` — homepage resources.
- `content/blog/posts.ts` — intentionally empty content registry.
- `lib/blog-types.ts` — post, block, image, and category types/configuration.
- `lib/blog.ts` — validation and public-content selection.
- `lib/blog-seo.ts` — page copy, metadata, and article structured data.
- `docs/blog.md` — authoring and maintenance guide.
- `docs/blog-implementation.md` — this report.

## Files modified

- `app/page.tsx` — resources placed after FAQ and before Service Areas.
- `app/sitemap.ts` — `/blog` plus future published articles, with genuine article dates.
- `lib/site.ts` — Blog navigation entry and shared production URL/default social image values.
- `components/layout/Header.tsx` — Blog via shared navigation; active-page/focus markup; smaller desktop gaps; existing mobile menu below 1024px; phone text hidden at intermediate desktop widths. Quote-button styling retained.
- `components/layout/Footer.tsx` — Blog in Company links; email wrapping to prevent overflow at 1024px.
- `components/shared/Breadcrumbs.tsx` — escape `<` in JSON-LD so future article titles cannot terminate the script element. Existing schema data and visual markup retained.

Existing uncommitted service/industry/quote-related edits were preserved. No dependencies or global typography/color changes were introduced.

## Architecture and publishing

Typed TypeScript data follows the existing site's data conventions. `/blog` is static; `/blog/[slug]` generates only approved public slugs. No CMS, category routes, search, or premature pagination UI was added.

Add a post to `content/blog/posts.ts`, supply its metadata, category, typed body and optional image/relationships, then set `draft: false` and deploy. See [the authoring guide](blog.md). One registry supplies the index, homepage, sitemap, and related resources. Drafts, omitted publication flags, and future-dated posts stay private. Publishing changes require a deployment.

The homepage still follows FAQ → Cleaning Tips & Resources → Seattle/service-area content → Footer. The new section is compact and remains below the sales journey.

SEO includes canonical URLs, descriptions, title overrides, Open Graph, Twitter, index/follow metadata, BlogPosting JSON-LD, existing breadcrumb schema, real dates, image-alt support, default social-image fallback, and validated service/industry relationships. Publisher identity references the existing root business schema.

## Validation

- Production build: passed (`npm.cmd run build`, equivalent to `npm run build` on this PowerShell installation). Network permission was needed for the existing Google fonts.
- TypeScript: passed (`npx.cmd tsc --noEmit` and production build typechecking).
- Changed-file ESLint: passed using the existing legacy configuration.
- `npm run lint`: blocked by the pre-existing `next lint` script, which is unsupported by the installed Next.js version.
- Full direct ESLint: six existing unescaped-entity errors in About, the industry hub, the industry template, and commercial cleaning; one existing raw-image warning in About. Those unrelated files were not changed for this work.
- Functional checks: publication gates, future dates, date/slug/image/heading/link-target validation, featured fallback, category selection, related deduplication, metadata, JSON-LD escaping, sitemap dates, static parameters, draft rejection, and all body block types passed.
- Production HTTP checks: `/blog` returns 200 with canonical/index/OG/Twitter metadata; unknown article URLs return 404 with noindex; sitemap contains `/blog` and preserves service/industry entries. No synthetic fixture is present in public content.
- Browser layout checks: 320, 375, 390, 430, 768, 1024, 1280, and 1440px. Empty and populated resource layouts, long article titles, breadcrumbs, body, tables, CTAs, header, mobile menu, and footer were reviewed. No page-wide horizontal overflow after the footer wrap adjustment. Wide tables scroll within their own focusable region.
- Future content was exercised with synthetic layout data in ignored local QA files and in-memory rendering only. No fixture article was added to the registry or a public route.
- Final production checks confirmed responsive image loading at all eight widths, keyboard menu opening and Blog navigation, automatic menu closing after navigation, and no runtime/hydration errors in the checked blog page. A stalled development-server image request did not reproduce in production.

No real blog articles were written. No unsupported claims were added. The established visual style and homepage flow were preserved. Quote/contact fields, submission handling, Resend, rate limiting, and analytics were untouched. This work has not been deployed.
