import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BlogBody, ArticleImage } from "@/components/blog/BlogBody";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { blogCategories } from "@/lib/blog-types";
import { getPostBySlug, getPublishedPosts, getRelatedPosts, formatBlogDate } from "@/lib/blog";
import { getBlogPostMetadata, getBlogPostSchema, serializeBlogSchema } from "@/lib/blog-seo";
import { getIndustryBySlug } from "@/lib/industries";
import { services, siteConfig } from "@/lib/site";
import styles from "../blog.module.css";

type Props = { params: Promise<{ slug: string }> };

// A deploy builds only approved public slugs; unknown and draft URLs are real 404s.
export const dynamicParams = false;
export function generateStaticParams() {
  return getPublishedPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();
  return getBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();
  const related = getRelatedPosts(post);
  const headings = post.content.filter(block => block.type === "heading" && block.level === 2);
  const showContents = post.showTableOfContents ?? headings.length >= 3;
  const serviceLinks = (post.relatedServiceSlugs ?? []).flatMap(slug => {
    const service = services.find(item => item.slug === slug);
    return service ? [{ href: `/services/${service.slug}`, label: service.title }] : [];
  });
  const industryLinks = (post.relatedIndustrySlugs ?? []).flatMap(slug => {
    const industry = getIndustryBySlug(slug);
    return industry ? [{ href: industry.href, label: industry.name }] : [];
  });
  return (
    <div className={styles.resources}>
      <article>
        <header className="section-shell-tight bg-brand-600 text-white">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
              <p className="eyebrow-light mt-7">{blogCategories[post.category]}</p>
              <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                <span>Published <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time></span>
                {post.updatedAt && post.updatedAt !== post.publishedAt ? <span>Updated <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time></span> : null}
                {post.author ? <span>By {post.author}</span> : null}
                {post.readingTime ? <span>{post.readingTime}</span> : null}
              </div>
            </div>
          </Container>
        </header>
        <Container className="section-shell-tight">
          {post.image ? <div className="mx-auto mb-12 max-w-3xl"><ArticleImage image={post.image} priority /></div> : null}
          {showContents && headings.length ? (
            <nav aria-label="Table of contents" className="mx-auto mb-12 max-w-3xl border-y border-brand-100 py-6">
              <h2 className="text-lg font-semibold">In this guide</h2>
              <ul className="mt-3">{headings.map(heading => heading.type === "heading" ? <li key={heading.id}>
                <a href={`#${heading.id}`} className="inline-flex min-h-11 items-center text-base text-brand-600 underline-offset-4 hover:underline">{heading.text}</a>
              </li> : null)}</ul>
            </nav>
          ) : null}
          <div className={styles.body}><BlogBody content={post.content} /></div>
          <aside className="mx-auto mt-14 max-w-3xl border-t border-brand-100 pt-8">
            <h2 className="text-2xl font-semibold">Need professional cleaning in Seattle?</h2>
            {[...serviceLinks, ...industryLinks].length ? (
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {[...serviceLinks, ...industryLinks].map(link => <li key={link.href}><Link href={link.href} className="inline-flex min-h-11 items-center text-base font-medium text-brand-600 underline underline-offset-4">{link.label}</Link></li>)}
              </ul>
            ) : null}
            <Link href="/contact#quote-form" className="cta-primary mt-6 w-full sm:w-auto">{siteConfig.primaryCta}</Link>
          </aside>
        </Container>
      </article>
      {related.length ? (
        <section className="section-shell-tight bg-surface">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">Related resources</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-3">{related.map(item => <BlogPreview key={item.slug} post={item} />)}</div>
          </Container>
        </section>
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeBlogSchema(getBlogPostSchema(post)) }} />
    </div>
  );
}
