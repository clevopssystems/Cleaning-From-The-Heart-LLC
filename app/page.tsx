import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { SocialProofStrip } from "@/components/sections/home/SocialProofStrip";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { WorkInActionSection } from "@/components/sections/home/WorkInActionSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { WhoWeWorkWithSection } from "@/components/sections/home/WhoWeWorkWithSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { BrandStatementSection } from "@/components/sections/home/BrandStatementSection";
import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { GuaranteeSection } from "@/components/sections/home/GuaranteeSection";
import { StrongCtaSection } from "@/components/sections/home/StrongCtaSection";
import { VideoSection } from "@/components/sections/home/VideoSection";
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
    "Cleaning From The Heart LLC provides commercial cleaning, residential cleaning, janitorial services, window cleaning, pressure washing, carpet cleaning, floor care, and move-out cleaning in Seattle, WA.",
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
    url: "https://cleaningfromtheheartllc.com/",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Cleaning From The Heart LLC — Seattle commercial and residential cleaning"
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
      {/* 1. Hero — image-led entry point with clear headline and CTAs */}
      <HeroSection />

      {/* 2. Social proof strip — tight dark metrics bar */}
      <SocialProofStrip />

      {/* 3. Real People — owner photo, warm copy, human connection near top */}
      <TeamSection />

      {/* 4. Gallery — real work proof moved high for trust-building */}
      <WorkInActionSection />

      {/* 5. Trust — credentials, guarantee, verified client reviews */}
      <TrustSection />

      {/* 6. Who We Help — property managers, offices, homeowners, schools */}
      <WhoWeWorkWithSection />

      {/* 7. Services — 6 image-based cards + compact more-services list */}
      <ServicesSection />

      {/* 8. Brand statement — full-bleed visual break */}
      <BrandStatementSection />

      {/* 9. Before / After — visual cleaning proof */}
      <BeforeAfterSection />

      {/* 10. How It Works — simple 3-step process */}
      <HowItWorksSection />

      {/* 11. Service promise — we return and fix any issues */}
      <GuaranteeSection />

      {/* 12. Final CTA — strong conversion block */}
      <StrongCtaSection />

      {/* 13. Videos — real footage from jobs */}
      <VideoSection />

      {/* 14. FAQ — common questions */}
      <FaqSection />

      {/* 15. Service Areas — SEO + cities + services copy */}
      <ServiceAreaSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
