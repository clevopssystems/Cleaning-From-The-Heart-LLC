import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ListChecks, User } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BlogBody, ArticleImage } from "@/components/blog/BlogBody";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { blogCategories } from "@/lib/blog-types";
import type { BlogPost } from "@/lib/blog-types";
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
  const relatedLinks = [...serviceLinks, ...industryLinks];
  return (
    <div className={styles.resources}>
      <article>
        <header className="relative overflow-hidden bg-brand-600 text-white">
          <div className="pointer-events-none absolute inset-0 surface-grid opacity-[0.08]" aria-hidden />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
          <Container className="relative section-shell-tight">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
              <span className="mt-7 inline-flex items-center rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {blogCategories[post.category]}
              </span>
              <h1 className="text-balance mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">{post.description}</p>
              <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-white/90">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5">
                  <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {post.updatedAt && post.updatedAt !== post.publishedAt
                    ? <>Updated <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time></>
                    : <>Published <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time></>}
                </span>
                {post.author ? <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5"><User className="h-3.5 w-3.5 text-accent" aria-hidden />{post.author}</span> : null}
                {post.readingTime ? <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5"><Clock className="h-3.5 w-3.5 text-accent" aria-hidden />{post.readingTime}</span> : null}
              </div>
            </div>
          </Container>
        </header>
        <Container className="section-shell-tight">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
            <div className="min-w-0">
              {post.image ? <div className="mb-12 max-w-3xl"><ArticleImage image={post.image} priority /></div> : null}
              {showContents && headings.length ? (
                <nav aria-label="Table of contents" className="mb-12 max-w-3xl lg:hidden">
                  <TableOfContents headings={headings} />
                </nav>
              ) : null}
              <div className={styles.body}><BlogBody content={post.content} /></div>
              <div className="mt-14 max-w-3xl overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-700 p-7 text-white sm:p-9">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Need professional cleaning in Seattle?</h2>
                <p className="mt-2 text-white/80">Get a free, no-pressure quote built around how your space is actually used.</p>
                {relatedLinks.length ? (
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {relatedLinks.map(link => <li key={link.href}><Link href={link.href} className="inline-flex min-h-11 items-center text-base font-medium text-accent underline underline-offset-4">{link.label}</Link></li>)}
                  </ul>
                ) : null}
                <Link href="/contact#quote-form" className="cta-gold mt-6 w-full sm:w-auto">{siteConfig.primaryCta}</Link>
              </div>
            </div>
            {showContents && headings.length ? (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <TableOfContents headings={headings} />
                </div>
              </aside>
            ) : null}
          </div>
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

function TableOfContents({ headings }: { headings: readonly BlogPost["content"][number][] }) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-surface p-5">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-700">
        <ListChecks className="h-4 w-4 text-brand-600" aria-hidden />
        In this guide
      </p>
      <ul className="mt-4 space-y-1 border-l border-brand-100 pl-4">
        {headings.map(heading => heading.type === "heading" ? (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="inline-flex min-h-9 items-center py-1 text-sm leading-snug text-muted transition-colors hover:text-brand-700">{heading.text}</a>
          </li>
        ) : null)}
      </ul>
    </div>
  );
}
