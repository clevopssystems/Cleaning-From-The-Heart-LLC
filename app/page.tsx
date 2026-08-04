import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { SocialProofStrip } from "@/components/sections/home/SocialProofStrip";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { WorkInActionSection } from "@/components/sections/home/WorkInActionSection";
import { WhoWeWorkWithSection } from "@/components/sections/home/WhoWeWorkWithSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { GuaranteeSection } from "@/components/sections/home/GuaranteeSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { ServiceAreaSection } from "@/components/sections/home/ServiceAreaSection";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's title template so the brand isn't
  // appended twice (which previously made this title too long for Bing).
  title: {
    absolute: "Seattle Cleaning Services | Cleaning From The Heart LLC"
  },
  description:
    "Cleaning From The Heart LLC provides commercial, residential, window, pressure washing, carpet, floor care, and move-out cleaning in Seattle, WA.",
  keywords: [
    "Seattle cleaning services",
    "commercial cleaning Seattle",
    "residential cleaning Seattle",
    "janitorial services Seattle",
    "window cleaning Seattle",
    "pressure washing Seattle",
    "move-out cleaning Seattle",
    "carpet cleaning Seattle",
    "floor cleaning Seattle",
    "deep cleaning Seattle"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Seattle Cleaning Services | Cleaning From The Heart LLC",
    description:
      "Commercial, residential, janitorial, window, pressure washing, carpet, floor care, and move-out cleaning services in Seattle, WA.",
    url: "https://www.cleaningfromtheheartllc.com/",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Cleaning From The Heart LLC, Seattle commercial and residential cleaning"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Cleaning Services | Cleaning From The Heart LLC",
    description:
      "Professional commercial and residential cleaning services in Seattle, WA.",
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero, image-led entry point with clear headline and CTAs */}
      <HeroSection />

      {/* 2. Social proof strip, tight dark metrics bar */}
      <SocialProofStrip />

      {/* 3. Real people, owner-run team, warm human copy near the top */}
      <TeamSection />

      {/* 4. Gallery, real work photos, the core proof section */}
      <WorkInActionSection />

      {/* 5. Who We Help, homeowners, offices, schools, property managers */}
      <WhoWeWorkWithSection />

      {/* 6. Services, image-based cards + compact more-services list */}
      <ServicesSection />

      {/* 7. How It Works, simple 3-step process */}
      <HowItWorksSection />

      {/* 8. 30+ years / service promise, final trust CTA */}
      <GuaranteeSection />

      {/* 9. FAQ, common questions */}
      <FaqSection />

      {/* 10. Service Areas, local SEO copy + cities */}
      <ServiceAreaSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
