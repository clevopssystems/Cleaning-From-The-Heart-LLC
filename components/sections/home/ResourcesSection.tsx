import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { BlogPreview } from "@/components/blog/BlogPreview";
import { getHomepagePosts } from "@/lib/blog";
import styles from "@/app/blog/blog.module.css";

export function ResourcesSection() {
  const posts = getHomepagePosts();
  return (
    <section aria-labelledby="home-resources-title" className={`section-shell-tight border-t border-brand-100 bg-white ${styles.resources}`}>
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Resources</span>
            <h2 id="home-resources-title" className="text-3xl font-semibold leading-tight md:text-4xl">Cleaning Tips &amp; Resources</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">Practical guidance for Seattle homeowners, businesses, schools and property managers.</p>
          </div>
          <Link href="/blog" className="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold text-brand-600 underline-offset-4 hover:underline">
            Explore Resources <span aria-hidden="true" className="ml-2">&rarr;</span>
          </Link>
        </div>
        {posts.length ? (
          <div className="mt-8 grid gap-10 md:grid-cols-3">{posts.map(post => <BlogPreview key={post.slug} post={post} />)}</div>
        ) : (
          <p className="mt-7 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">Helpful cleaning guides and local resources are coming soon.</p>
        )}
      </Container>
    </section>
  );
}
