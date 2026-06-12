import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("residential-cleaning")!;

if (!service) {
  throw new Error("Service not found: residential-cleaning");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/residential-cleaning"
  },
  keywords: service.keywords
};

export default function ResidentialCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
