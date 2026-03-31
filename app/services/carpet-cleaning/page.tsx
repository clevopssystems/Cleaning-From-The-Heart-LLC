import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("carpet-cleaning")!;

if (!service) {
  throw new Error("Service not found: carpet-cleaning");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/carpet-cleaning"
  },
  keywords: service.keywords
};

export default function CarpetCleaningPage() {
  return <ServicePageTemplate service={service} />;
}