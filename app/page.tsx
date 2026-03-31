import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { ServiceAreaSection } from "@/components/sections/home/ServiceAreaSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { StrongCtaSection } from "@/components/sections/home/StrongCtaSection";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { WorkInActionSection } from "@/components/sections/home/WorkInActionSection";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seattle Commercial Cleaning Services | Offices, Properties & Facilities",
  description:
    "Cleaning From The Heart LLC provides professional commercial cleaning, carpet cleaning, strip & wax, and move-in/move-out services throughout Seattle, Bellevue, Renton, and surrounding areas. Insured, vetted staff. Free quotes.",
  alternates: {
    canonical: "/"
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
      {/* 1. Hero — entry point, dark brand background, video/image bg ready */}
      <HeroSection />

      {/* 2. Trust — credentials, testimonials */}
      <TrustSection />

      {/* 3. Services — 6-card grid with image slot support */}
      <ServicesSection />

      {/* 4. Work Gallery — "See Our Work in Action" — 4 project photos */}
      <WorkInActionSection />

      {/* 5. Before / After — visual proof of results, premium redesign */}
      <BeforeAfterSection />

      {/* 6. Video — "Watch How We Transform Spaces" — 2 video placeholders */}
      <VideoSection />

      {/* 7. Team — "Professional Team. Real Results." — 2×2 photo grid */}
      <TeamSection />

      {/* 8. Process — how it works, 3 steps */}
      <HowItWorksSection />

      {/* 9. Why Choose Us — dark section, 6 value props */}
      <WhyChooseUsSection />

      {/* 10. CTA — conversion block */}
      <StrongCtaSection />

      {/* 11. FAQ — accordion */}
      <FaqSection />

      {/* 12. Service Areas */}
      <ServiceAreaSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
