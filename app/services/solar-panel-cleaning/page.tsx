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
  keywords: service.keywords,
  openGraph: {
    title: `${service.seoTitle} | Cleaning From The Heart LLC`,
    description: service.seoDescription,
    url: "https://www.cleaningfromtheheartllc.com/services/solar-panel-cleaning",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Solar panel cleaning in Seattle, Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.seoTitle} | Cleaning From The Heart LLC`,
    description: service.seoDescription,
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

export default function SolarPanelCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
