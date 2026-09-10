import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { getPublishedPosts } from "@/lib/blog";
import { blogIndexMetadata, blogPageCopy } from "@/lib/blog-seo";
import { siteConfig } from "@/lib/site";
import styles from "./blog.module.css";

export const metadata: Metadata = blogIndexMetadata;

export default function BlogPage() {
  const posts = getPublishedPosts();
  const featured = posts.find(post => post.featured);
  const latest = featured ? posts.filter(post => post.slug !== featured.slug) : posts;
  return (
    <div className={styles.resources}>
      <section className="section-shell-tight border-b border-brand-100 bg-surface">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Resources</span>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">{blogPageCopy.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {blogPageCopy.description}
            </p>
          </div>
        </Container>
      </section>
      <section className="section-shell-tight bg-white">
        <Container>
          {posts.length ? (
            <>
              {featured ? (
                <div className="mb-14 max-w-3xl">
                  <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Featured resource</h2>
                  <BlogPreview post={featured} featured />
                </div>
              ) : null}
              {latest.length ? <BlogListing entries={latest.map(post => ({ slug: post.slug, category: post.category, preview: <BlogPreview post={post} /> }))} /> : null}
            </>
          ) : (
            <div className="grid gap-6 border-l-2 border-accent pl-6 sm:pl-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">Cleaning guides are on the way.</h2>
              <div>
                <p className="max-w-xl text-base leading-relaxed text-muted">
                  We’re preparing practical resources for Seattle homeowners, businesses and property managers. Check back soon.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact#quote-form" className="cta-primary">{siteConfig.primaryCta}</Link>
                  <Link href="/services" className="cta-secondary">Explore Services</Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
      {posts.length ? (
        <section className="section-shell-tight bg-surface">
          <Container>
            <h2 className="text-2xl font-semibold md:text-3xl">Need professional cleaning in Seattle?</h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#quote-form" className="cta-primary">{siteConfig.primaryCta}</Link>
              <Link href="/services" className="cta-secondary">Explore Services</Link>
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  );
}
