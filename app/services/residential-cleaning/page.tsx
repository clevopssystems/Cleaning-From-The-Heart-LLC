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
  keywords: service.keywords,
  openGraph: {
    title: `${service.seoTitle} | Cleaning From The Heart LLC`,
    description: service.seoDescription,
    url: "https://cleaningfromtheheartllc.com/services/residential-cleaning",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Residential cleaning in Seattle — Cleaning From The Heart LLC"
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

export default function ResidentialCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
