import { blogPosts } from "@/content/blog/posts";
import { blogCategories, type BlogCategory, type BlogPost } from "@/lib/blog-types";
import { getIndustryBySlug } from "@/lib/industries";
import { services } from "@/lib/site";

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}

function validDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

/** Fail the build on invalid public metadata instead of silently shipping it. */
function validatePosts(posts: readonly BlogPost[]) {
  const slugs = new Set<string>();
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) || slugs.has(post.slug)) {
      throw new Error(`Invalid or duplicate blog slug: ${post.slug}`);
    }
    slugs.add(post.slug);
    if (post.draft !== false) continue;
    if (!post.title.trim() || !post.description.trim() || !post.content.length || !(post.category in blogCategories)) {
      throw new Error(`Missing published blog content or metadata: ${post.slug}`);
    }
    if (!validDate(post.publishedAt) || (post.updatedAt && (!validDate(post.updatedAt) || post.updatedAt < post.publishedAt))) {
      throw new Error(`Invalid blog dates: ${post.slug}`);
    }
    const images = [post.image, ...post.content.flatMap(block => block.type === "image" ? [block.image] : [])];
    for (const image of images) {
      if (image && (!image.src.startsWith("/") || image.src.startsWith("//") || !image.alt.trim() || image.width <= 0 || image.height <= 0)) {
        throw new Error(`Invalid blog image: ${post.slug}`);
      }
    }
    const headingIds = new Set<string>();
    let hasH2 = false;
    for (const block of post.content) {
      if (block.type === "heading") {
        if (!/^[a-z][a-z0-9-]*$/.test(block.id) || headingIds.has(block.id) || (block.level === 3 && !hasH2)) {
          throw new Error(`Invalid blog heading hierarchy or anchor: ${post.slug}`);
        }
        headingIds.add(block.id);
        if (block.level === 2) hasH2 = true;
      }
      if (block.type === "table" && (!block.columns.length || block.rows.some(row => row.length !== block.columns.length))) {
        throw new Error(`Invalid blog table: ${post.slug}`);
      }
    }
    if (post.relatedServiceSlugs?.some(slug => !services.some(service => service.slug === slug)) ||
        post.relatedIndustrySlugs?.some(slug => !getIndustryBySlug(slug))) {
      throw new Error(`Unknown related service or industry: ${post.slug}`);
    }
  }
}

/** Shared publication gate for every public surface, including direct URLs. */
export function getPublishedPosts(posts: readonly BlogPost[] = blogPosts, now = new Date()): BlogPost[] {
  validatePosts(posts);
  const today = now.toISOString().slice(0, 10);
  return posts.filter(post => post.draft === false && post.publishedAt <= today)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find(post => post.slug === slug);
}

export function getHomepagePosts(posts = getPublishedPosts(), limit = 3) {
  const featured = posts.find(post => post.featured);
  return (featured ? [featured, ...posts.filter(post => post.slug !== featured.slug)] : posts).slice(0, limit);
}

export function getPostsByCategory(category: BlogCategory, posts = getPublishedPosts()) {
  return posts.filter(post => post.category === category);
}

export function getRelatedPosts(post: BlogPost, posts = getPublishedPosts(), limit = 3) {
  const candidates = posts.filter(candidate => candidate.slug !== post.slug);
  const explicit = (post.relatedPostSlugs ?? []).flatMap(slug => candidates.find(candidate => candidate.slug === slug) ?? []);
  const matching = candidates.filter(candidate => candidate.category === post.category ||
    candidate.tags?.some(tag => post.tags?.includes(tag)) ||
    candidate.relatedServiceSlugs?.some(slug => post.relatedServiceSlugs?.includes(slug)));
  return [...new Map([...explicit, ...matching].map(candidate => [candidate.slug, candidate])).values()].slice(0, limit);
}
