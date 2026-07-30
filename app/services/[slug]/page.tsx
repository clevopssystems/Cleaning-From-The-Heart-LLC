import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import { getServiceBySlug, services } from "@/lib/site";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  const canonical = `/services/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical
    },
    keywords: service.keywords,
    openGraph: {
      title: `${service.seoTitle} | Cleaning From The Heart LLC`,
      description: service.seoDescription,
      url: `https://www.cleaningfromtheheartllc.com${canonical}`,
      siteName: "Cleaning From The Heart LLC",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/services/hero/hero-cleaning-team.png",
          alt: `${service.title} in Seattle — Cleaning From The Heart LLC`
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
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
