import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog-types";
import { siteConfig } from "@/lib/site";

export const blogPageCopy = {
  title: "Cleaning Tips & Resources",
  description: "Practical cleaning guidance for homes, businesses, schools and managed properties across Seattle."
};
const { title: indexTitle, description: indexDescription } = blogPageCopy;

export const blogIndexMetadata: Metadata = {
  title: indexTitle,
  description: indexDescription,
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${indexTitle} | ${siteConfig.name}`,
    description: indexDescription,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: siteConfig.defaultOgImage, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${indexTitle} | ${siteConfig.name}`,
    description: indexDescription,
    images: [siteConfig.defaultOgImage]
  }
};

export function getBlogPostMetadata(post: BlogPost): Metadata {
  const title = post.seoTitle ?? post.title;
  const image = post.image?.src ?? siteConfig.defaultOgImage;
  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: { index: post.draft === false, follow: post.draft === false },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      ...(post.author ? { authors: [post.author] } : {}),
      images: [{ url: image, alt: post.image?.alt ?? siteConfig.name }]
    },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description: post.description, images: [image] }
  };
}

export function getBlogPostSchema(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const publisher = { "@id": `${siteConfig.url}/#business` };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: new URL(post.image?.src ?? siteConfig.defaultOgImage, siteConfig.url).href,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: post.author ? { "@type": "Person", name: post.author } : publisher,
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US"
  };
}

export function serializeBlogSchema(schema: ReturnType<typeof getBlogPostSchema>) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
