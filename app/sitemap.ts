import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { getIndustryPageSlugs } from "@/lib/industries";

const base = "https://www.cleaningfromtheheartllc.com";

// Priority reflects each page's role in the site hierarchy, not how often it
// changes — hub/landing pages outrank the detail pages they link to.
const PRIORITY = {
  home: 1,
  hub: 0.9,
  detail: 0.8,
  supporting: 0.6
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const industryPaths = getIndustryPageSlugs().map((slug) => `/industries/${slug}`);

  const entries: { path: string; priority: number }[] = [
    { path: "", priority: PRIORITY.home },
    { path: "/services", priority: PRIORITY.hub },
    ...servicePaths.map((path) => ({ path, priority: PRIORITY.detail })),
    { path: "/industries-we-serve", priority: PRIORITY.hub },
    ...industryPaths.map((path) => ({ path, priority: PRIORITY.detail })),
    { path: "/about", priority: PRIORITY.supporting },
    { path: "/gallery", priority: PRIORITY.supporting },
    { path: "/videos", priority: PRIORITY.supporting },
    { path: "/contact", priority: PRIORITY.supporting }
  ];

  // No lastModified: the site has no real per-page content-modification data
  // source, and stamping every entry with the build/request time on every
  // generation would misrepresent all pages as continuously updated.
  return entries.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority
  }));
}
