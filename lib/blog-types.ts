import type { ServiceSlug } from "@/lib/site";

export const blogCategories = {
  "commercial-cleaning": "Commercial Cleaning",
  "residential-cleaning": "Residential Cleaning",
  "school-cleaning": "School Cleaning",
  "property-management": "Property Management",
  "deep-cleaning": "Deep Cleaning",
  "move-in-move-out": "Move-In & Move-Out",
  "window-cleaning": "Window Cleaning",
  "pressure-washing": "Pressure Washing",
  "seattle-cleaning-guides": "Seattle Cleaning Guides"
} as const;

export type BlogCategory = keyof typeof blogCategories;
export type BlogInline = string | { text: string; href: string };
export type BlogText = readonly BlogInline[];
export interface BlogImage {
  /** A real local asset under public/, e.g. /media/blog/photo.webp. */
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type BlogBlock =
  | { type: "paragraph"; text: BlogText }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; ordered?: boolean; items: readonly BlogText[] }
  | { type: "image"; image: BlogImage }
  | { type: "quote"; text: BlogText; attribution?: string }
  | { type: "callout"; title?: string; text: BlogText }
  | { type: "table"; caption: string; columns: readonly string[]; rows: readonly (readonly BlogText[])[] }
  | { type: "faq"; title: string; items: readonly { question: string; answer: BlogText }[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  seoTitle?: string;
  category: BlogCategory;
  /** Calendar dates in YYYY-MM-DD format. */
  publishedAt: string;
  updatedAt?: string;
  image?: BlogImage;
  author?: string;
  readingTime?: string;
  featured?: boolean;
  /** Only explicit false publishes a post. Omitted is private. */
  draft?: boolean;
  tags?: readonly string[];
  relatedPostSlugs?: readonly string[];
  relatedServiceSlugs?: readonly ServiceSlug[];
  /** Resolved against the existing industry configuration, never guessed URLs. */
  relatedIndustrySlugs?: readonly string[];
  showTableOfContents?: boolean;
  content: readonly BlogBlock[];
}
