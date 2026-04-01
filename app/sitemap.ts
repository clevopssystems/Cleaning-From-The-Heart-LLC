import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cleaningfromtheheartllc.com";
  const servicePaths = services.map((service) => `/services/${service.slug}`);

  return [
    "",
    "/about",
    "/services",
    ...servicePaths,
    "/gallery",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
