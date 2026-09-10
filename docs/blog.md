# Blog authoring

The library is deliberately empty. `/blog` and the homepage show a finished coming-soon state until approved content is added. No category routes, search, CMS, or new dependencies are required.

## Add an article

1. Add a `BlogPost` entry to `content/blog/posts.ts`. This is the only file you need to edit for an article. For a larger library, create individual TypeScript files in `content/blog/` and import their posts into that registry.
2. Supply `slug`, `title`, `description`, `category`, `publishedAt`, and `content`. Use `draft: true` while writing. Slugs use lowercase words separated by hyphens. Dates use `YYYY-MM-DD`; `updatedAt`, when present, must be on or after publication.
3. Optional fields: `seoTitle` (without the company-name suffix), `updatedAt`, `author` (an approved person's name), `readingTime`, `featured`, `tags`, `relatedPostSlugs`, `relatedServiceSlugs`, `relatedIndustrySlugs`, `showTableOfContents`, and `image`.
4. Put approved images under `public/media/blog/`. Set `image: { src, alt, width, height, caption? }` using the public path beginning `/media/blog/`. Dimensions must match the source image; alt text is required. There are no placeholder images. Social metadata falls back to the existing company image.
5. Review facts, links, images, metadata, and layout, then explicitly set `draft: false`. Build and deploy. The article automatically enters `/blog`, the sitemap, related-resource matching, and the homepage's featured/newest selection.

An omitted `draft` stays private. Drafts and future-dated posts are excluded from all public lookups, generated routes, and sitemap entries. Direct requests return 404. Publishing and scheduled-date changes require a new deployment; this is not a scheduling service. There is no public draft-preview route.

## Categories and links

Category keys and labels live in `lib/blog-types.ts`. The index offers a topic selector when the latest resources span multiple categories. Empty categories are not shown. One featured article appears before the latest list; homepage resources show the newest featured article first, then the newest remaining articles, up to three total.

`relatedServiceSlugs` uses the existing `ServiceSlug` type. Industry slugs resolve against `lib/industries.ts`. For example, property management is `property-management`, with the actual route `/industries/property-management`. School cleaning is the service slug `school-facility-cleaning`. Do not infer routes from article titles.

Explicit `relatedPostSlugs` take precedence, followed by category, tag, or shared-service matches. Self-links and duplicate articles are removed. Drafts are never candidates. The section hides when there are no matches.

## Body format

`content` is an array of typed blocks (see `BlogBlock` in `lib/blog-types.ts`):

| Type | Fields |
| --- | --- |
| `paragraph` | `text` |
| `heading` | `level: 2 or 3`, unique `id`, `text` |
| `list` | optional `ordered`, `items` |
| `image` | `image` with the same required image fields |
| `quote` | `text`, optional `attribution` |
| `callout` | `text`, optional `title` |
| `table` | `caption`, `columns`, `rows` with matching column counts |
| `faq` | `title`, `items` containing `question` and `answer` |

`text`, each list item, each table cell, and FAQ answers are arrays of strings or `{ text, href }` links. Internal links begin `/` or `#`; external citations use `https://` or `http://`. HTML strings are not interpreted as markup. Use a top-level H2 before any H3. Heading IDs must start with a lowercase letter and contain only lowercase letters, digits, and hyphens.

The table of contents automatically appears for three or more H2 blocks. `showTableOfContents` overrides this. Tables scroll inside a keyboard-focusable region on narrow screens. All body content renders on the server.

## SEO and maintenance

`lib/blog.ts` owns publication, validation, ordering, featured selection, category selection, and related posts. `lib/blog-seo.ts` owns canonical, Open Graph, Twitter, robots, and BlogPosting metadata. Breadcrumbs reuse the site's component. Publisher/author fallback references the existing root business schema, with no invented credentials. Only genuine publication/update dates enter the sitemap.

The index and article pages use static generation. Invalid public metadata fails the build. No pagination controls appear yet; future pagination can slice the published collection before rendering `BlogListing`, without changing content files or article layout.

Run `npm run build` and `npx tsc --noEmit` before deployment. The repository's existing `npm run lint` uses `next lint`, which Next.js 16 no longer provides; until that tooling is migrated, run ESLint directly with the existing legacy configuration (`ESLINT_USE_FLAT_CONFIG=false`). On PowerShell use `$env:ESLINT_USE_FLAT_CONFIG='false'; npx.cmd eslint app/blog components/blog components/sections/home/ResourcesSection.tsx lib/blog*.ts content/blog --ext .ts,.tsx`.
