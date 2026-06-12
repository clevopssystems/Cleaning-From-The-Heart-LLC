import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("deep-cleaning")!;

if (!service) {
  throw new Error("Service not found: deep-cleaning");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/deep-cleaning"
  },
  keywords: service.keywords
};

export default function DeepCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
