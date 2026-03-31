import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("commercial-cleaning")!;

if (!service) {
  throw new Error("Service not found: commercial-cleaning");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/commercial-cleaning"
  },
  keywords: service.keywords
};

export default function CommercialCleaningPage() {
  return <ServicePageTemplate service={service} />;
}