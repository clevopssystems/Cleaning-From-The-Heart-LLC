import { ShieldCheck, Clock, Star } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-ink text-white">

      {/*
        BACKGROUND VIDEO
        Upload your video to: /public/media/hero/hero-bg.mp4
        Recommended: 1920×1080, H.264, no audio, < 8MB
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text readable over the video */}
      <div className="absolute inset-0 bg-ink/60" aria-hidden />

      {/* Subtle gradient tint — brand color bleed from top-left */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent" aria-hidden />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />

      {/* Decorative glow — top-left accent */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

      <Container className="relative section-shell">
        <div className="grid items-center gap-12">
          <div>
            <p className="eyebrow-light">Seattle Commercial Cleaning Services</p>
            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4rem]">
              Seattle&apos;s Cleaning Partner for Offices, Properties &amp; Commercial Spaces
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Cleaning From The Heart LLC delivers consistent, detail-oriented cleaning for Seattle businesses and
              property managers — with insured staff, flexible scheduling, and a straightforward process from first
              quote to final walkthrough.
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Fast Quote Response</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Star className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/20">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-3.5 text-xs text-white/60 sm:text-sm">
          <span className="font-semibold text-white">{siteConfig.name}</span>
          <span>{siteConfig.serviceAreaSummary}</span>
          <span>{siteConfig.businessHours}</span>
        </Container>
      </div>
    </section>
  );
}
