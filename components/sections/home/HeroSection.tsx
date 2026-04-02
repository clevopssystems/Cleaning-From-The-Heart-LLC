import { ShieldCheck, Clock, Star, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const stats = [
  { value: "200+", label: "Properties Served" },
  { value: "5.0★", label: "Average Rating" },
  { value: "6 yrs", label: "Serving Seattle" },
  { value: "100%", label: "Satisfaction Backed" }
];

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
      <div className="absolute inset-0 bg-ink/65" aria-hidden />

      {/* Subtle gradient tint — brand color bleed from top-left */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent" aria-hidden />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />

      {/* Decorative glow — top-left accent */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

      <Container className="relative section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            {/* Urgency badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-semibold text-accent">Limited availability this month</span>
            </div>

            <p className="eyebrow-light">Seattle Commercial Cleaning Services</p>
            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4rem]">
              Seattle&apos;s Most Trusted Cleaning Partner for Offices &amp; Properties
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Cleaning From The Heart LLC serves Seattle businesses and property managers with insured, vetted
              staff, consistent crew assignments, and a process that runs without you having to chase anyone.
            </p>

            {/* Proof points */}
            <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {[
                "Same crew, every visit",
                "No contracts required",
                "Response within 2 hours"
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/75">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="flex flex-col items-start gap-1">
                <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-gold w-full sm:w-auto">
                  {siteConfig.primaryCta}
                </Link>
                <span className="pl-1 text-[11px] text-white/45">Free · No commitment · Reply within 2 hours</span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Link href={siteConfig.phoneHref} className="cta-ghost w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.secondaryCta}
                </Link>
                <span className="pl-1 text-[11px] text-white/45">Mon–Sat · 7 AM – 7 PM</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Background-Checked Staff</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Star className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Stats column — visible on large screens */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-[140px] flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="mt-1 text-xs text-white/55">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stats row */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {stats.map((stat) => (
            <div
              key={`mobile-${stat.label}`}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
            >
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <span className="mt-0.5 text-[11px] text-white/55">{stat.label}</span>
            </div>
          ))}
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
