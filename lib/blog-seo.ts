import type { Metadata } from "next";
import type { BlogPost, BlogText } from "@/lib/blog-types";
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

function blogTextToPlainText(text: BlogText): string {
  return text.map(part => typeof part === "string" ? part : part.text).join("");
}

/** FAQPage schema for the post's visible FAQ block only, mirroring the site's existing FAQPage convention. Undefined when the article has no FAQ block. */
export function getBlogFaqSchema(post: BlogPost) {
  const faqBlock = post.content.find((block): block is Extract<BlogPost["content"][number], { type: "faq" }> => block.type === "faq");
  if (!faqBlock || !faqBlock.items.length) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/blog/${post.slug}#faq`,
    mainEntity: faqBlock.items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: blogTextToPlainText(item.answer) }
    }))
  };
}

export function serializeBlogSchema(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
