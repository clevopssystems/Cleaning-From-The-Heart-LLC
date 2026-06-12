import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug } from "@/lib/site";

const service = getServiceBySlug("solar-panel-cleaning")!;

if (!service) {
  throw new Error("Service not found: solar-panel-cleaning");
}

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: {
    canonical: "/services/solar-panel-cleaning"
  },
  keywords: service.keywords
};

export default function SolarPanelCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
