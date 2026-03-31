import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("strip-and-wax")!;

if (!service) {
  throw new Error("Service not found: strip-and-wax");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/strip-and-wax"
  },
  keywords: service.keywords
};

export default function StripAndWaxPage() {
  return <ServicePageTemplate service={service} />;
}