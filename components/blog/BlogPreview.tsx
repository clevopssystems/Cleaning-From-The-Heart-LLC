import Image from "next/image";
import Link from "next/link";
import { blogCategories, type BlogPost } from "@/lib/blog-types";
import { formatBlogDate } from "@/lib/blog";

export function BlogPreview({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className={`min-w-0 border-t border-brand-100 pt-6 ${featured ? "md:col-span-2" : ""}`}>
      {post.image ? (
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <Image src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height}
            sizes={featured ? "(min-width: 1024px) 700px, (min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="mb-5 aspect-[16/10] w-full rounded-2xl object-cover" />
        </Link>
      ) : null}
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{blogCategories[post.category]}</p>
      <h3 className="mt-3 break-words text-xl font-semibold leading-snug md:text-2xl">
        <Link href={href} className="hover:text-brand-700">{post.title}</Link>
      </h3>
      <p className="mt-3 break-words text-base leading-relaxed text-muted">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
        <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
        {post.readingTime ? <span>{post.readingTime}</span> : null}
      </div>
      <Link href={href} aria-label={`Read article: ${post.title}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-brand-600 underline-offset-4 hover:underline">
        Read Article <span aria-hidden="true" className="ml-2">&rarr;</span>
      </Link>
    </article>
  );
}
