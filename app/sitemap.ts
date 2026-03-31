import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cleaningfromtheheartllc.com";

  return [
    "",
    "/about",
    "/services",
    "/services/commercial-cleaning",
    "/services/carpet-cleaning",
    "/services/strip-and-wax",
    "/gallery",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
