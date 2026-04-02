import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { GuaranteeSection } from "@/components/sections/home/GuaranteeSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { ServiceAreaSection } from "@/components/sections/home/ServiceAreaSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { StrongCtaSection } from "@/components/sections/home/StrongCtaSection";
import { TeamSection } from "@/components/sections/home/TeamSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { WhoWeWorkWithSection } from "@/components/sections/home/WhoWeWorkWithSection";
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
      {/* 1. Hero — entry point, stats bar, urgency */}
      <HeroSection />

      {/* 2. Trust — credentials, guarantee banner, testimonials */}
      <TrustSection />

      {/* 3. Who We Work With — offices, retail, property managers, Airbnb */}
      <WhoWeWorkWithSection />

      {/* 4. Services — 6-card grid */}
      <ServicesSection />

      {/* 5. Work Gallery — "See Our Work in Action" */}
      <WorkInActionSection />

      {/* 6. Before / After — visual proof */}
      <BeforeAfterSection />

      {/* 7. Video — "Watch How We Transform Spaces" */}
      <VideoSection />

      {/* 8. Guarantee — full-width hero section, 100% satisfaction promise */}
      <GuaranteeSection />

      {/* 9. Team — "Professional Team. Real Results." */}
      <TeamSection />

      {/* 10. Process — how it works, 3 steps */}
      <HowItWorksSection />

      {/* 11. Why Choose Us — dark section, 6 upgraded value props */}
      <WhyChooseUsSection />

      {/* 12. CTA — conversion block with urgency */}
      <StrongCtaSection />

      {/* 13. FAQ — accordion */}
      <FaqSection />

      {/* 14. Service Areas */}
      <ServiceAreaSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
