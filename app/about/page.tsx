import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Quote
} from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Cleaning From The Heart LLC",
  description:
    "Family-owned and Seattle-rooted since 1993. Learn the story behind Cleaning From The Heart LLC, founded by Oscar Alexander and continued by his son Joshua.",
  alternates: { canonical: "/about" }
};

const credibility = [
  { value: "30+", label: "Years in Business" },
  { value: "200+", label: "Properties Served" },
  { value: "14", label: "Seattle Service Areas" },
  { value: "100%", label: "Satisfaction Backed" }
];

const values = [
  {
    icon: HeartHandshake,
    title: "People Come First",
    description:
      "Every client relationship is treated with respect and every property with care. We work hard to earn your trust and harder to keep it. That's not a policy — it's how we were raised to do business."
  },
  {
    icon: ClipboardCheck,
    title: "Consistent, Verifiable Quality",
    description:
      "Every job follows a detailed checklist. You get the same crew, the same standard, and the same result every visit. No guessing, no chasing for updates. Just reliable work you can see and count on."
  },
  {
    icon: MapPin,
    title: "Locally Owned and Accountable",
    description:
      "We are not a franchise and not a call center. We are a Seattle family business — and that means when something needs attention, you reach us directly. Local ownership means local accountability."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="A Family That Has Been Cleaning Seattle for Over 30 Years"
        description="Cleaning From The Heart LLC is locally owned, family-operated, and built on the same values it started with: show up, do the work right, and treat every client like they matter."
      />

      {/* ─── Founder Story ─────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

            {/* Story text */}
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Started With Purpose. Built on Trust.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted">
                Oscar Alexander founded Cleaning From The Heart more than 30 years ago — not from a business plan,
                but from necessity. During a difficult period in his life, cleaning gave him purpose and structure.
                He started with local Seattle businesses, showing up reliably and doing the work right. One client
                led to another. Reputation built slowly, the right way.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted">
                Over three decades, Oscar became the vendor his clients could actually count on. He was not just
                maintaining spaces — he was building relationships. The businesses he served knew they could hand
                him the keys, trust the result, and move on with their day.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 flex gap-4 rounded-2xl border-l-4 border-brand-500 bg-surface p-6">
                <Quote className="h-5 w-5 shrink-0 text-brand-400 mt-0.5" aria-hidden />
                <p className="text-base font-medium leading-relaxed text-ink">
                  "Cleaning started as a way to cope and stay active. It became something I was proud of — and
                  something clients depended on. That responsibility never felt like a burden. It felt right."
                </p>
              </blockquote>

              <p className="text-base leading-relaxed text-muted">
                Today his son, Joshua Alexander, carries the work forward. The team has grown and the services
                have expanded across Seattle and the greater metro area — but the foundation is unchanged. Same
                values. Same work ethic. Same commitment to every client.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Family-owned and operated since founding",
                  "Same crew assignments every visit — no strangers",
                  "Direct line to the people doing the work",
                  "Serving Seattle offices, schools, and properties for 30+ years"
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Owner image */}
            <aside className="sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-surface shadow-card">
                {/*
                  OWNER / TEAM PHOTO
                  ──────────────────────────────────────────────────────
                  Upload: /public/about/owner/owner.jpg
                  Recommended size: 640×800px (4:5 portrait)
                  ──────────────────────────────────────────────────────
                */}
                <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-brand-600/10 to-brand-500/5">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                      <HeartHandshake className="h-8 w-8 text-brand-600" aria-hidden />
                    </div>
                    <p className="mt-4 text-sm font-medium text-muted">Owner photo</p>
                    <p className="mt-1 text-xs text-muted/70">Upload: /about/owner/owner.jpg</p>
                  </div>
                </div>
                <div className="border-t border-brand-100 px-5 py-4">
                  <p className="text-sm font-semibold text-ink">Joshua Alexander</p>
                  <p className="mt-0.5 text-xs text-muted">Owner, Cleaning From The Heart LLC</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Second generation — carrying forward the work his father started over 30 years ago in Seattle.
                  </p>
                </div>
              </div>

              {/* Insurance badge */}
              <div className="flex items-center gap-3 rounded-xl border border-brand-100 bg-surface px-4 py-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <p className="text-xs font-semibold text-ink">Fully Insured Business</p>
                  <p className="text-xs text-muted">Proof of insurance available on request</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ─── Credibility Strip ─────────────────────────────────── */}
      <div className="border-y border-white/5 bg-brand-950">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-white/5 lg:grid-cols-4">
            {credibility.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <div className="flex flex-col items-start px-6 py-10 sm:px-8 lg:px-10">
                  <span className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {item.value}
                  </span>
                  <span className="mt-2 text-sm font-semibold text-accent">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Values ────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              The Principles Behind Every Job We Take
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              These are not aspirational statements. They describe how we actually operate — on every job,
              with every client, across every service we provide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="card-hover flex h-full flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                    <value.icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Mission Statement ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-600 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
        <Container className="relative text-center">
          <Reveal>
            <Quote className="mx-auto mb-6 h-8 w-8 text-white/30" aria-hidden />
            <p className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-snug tracking-tight text-white md:text-4xl">
              We don&apos;t just clean spaces. We take care of them — the way you take care of your business.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
              Our mission is to build long-term relationships by delivering dependable cleaning services with
              integrity, pride, and heart. That&apos;s the name on the door, and the standard we hold ourselves to.
            </p>
            <p className="mt-5 text-sm font-semibold text-accent">Oscar Alexander, Founder</p>
          </Reveal>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-surface px-8 py-14 md:px-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">Work With Us</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Ready to Work With a Team You Can Actually Count On?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Get a free quote for your Seattle property. We respond the same day, provide a written
                  proposal within 24 hours, and show up when we say we will.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[200px]">
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href="/contact"
                    className="cta-primary w-full justify-center"
                  >
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">Free. No commitment.</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-secondary w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">Mon–Sat · 7 AM – 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
