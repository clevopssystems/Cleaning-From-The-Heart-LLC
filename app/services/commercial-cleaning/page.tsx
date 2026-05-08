import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Layers,
  Sparkles,
  Zap,
  Home,
  ShieldCheck,
  Users,
  CalendarCheck,
  ClipboardCheck,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Phone,
  Clock,
  Star,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Cleaning Seattle, WA | Cleaning From The Heart LLC",
  description:
    "Professional commercial cleaning in Seattle, WA for offices, schools, and commercial facilities. Consistent staffing, dependable janitorial services, and satisfaction guaranteed. Get a free quote from Cleaning From The Heart LLC.",
  alternates: {
    canonical: "/services/commercial-cleaning"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Cleaning Seattle",
  serviceType: "Commercial Cleaning",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "PO BOX 135",
      addressLocality: "Renton",
      addressRegion: "WA",
      postalCode: "98057",
      addressCountry: "US"
    }
  },
  areaServed: [
    { "@type": "City", name: "Seattle" },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Renton" },
    { "@type": "City", name: "Kent" },
    { "@type": "City", name: "Tacoma" }
  ],
  description:
    "Professional commercial cleaning services in Seattle for offices, schools, and commercial facilities. Reliable scheduling, consistent staffing, and satisfaction guaranteed."
};

const heroStats = [
  { value: "30+", label: "Years in Seattle" },
  { value: "200+", label: "Properties Served" },
  { value: "5.0★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Backed" }
];

const trustByTypes = [
  { label: "Schools & Educational Facilities", Icon: GraduationCap },
  { label: "Corporate Offices", Icon: Building2 },
  { label: "Property Management Companies", Icon: ClipboardCheck },
  { label: "Commercial Facilities & Warehouses", Icon: Layers }
];

const serviceCards = [
  {
    Icon: Building2,
    title: "Office Cleaning",
    description:
      "Consistent, scheduled cleaning for corporate offices, small businesses, and professional suites. Desks, common areas, restrooms, and kitchen spaces kept client-ready after every visit.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: GraduationCap,
    title: "School & Classroom Cleaning",
    description:
      "Specialized janitorial services for K–12 schools and educational facilities. Classrooms, hallways, restrooms, and staff areas sanitized on a structured schedule with minimal disruption to school operations.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "View School Cleaning"
  },
  {
    Icon: Layers,
    title: "Facility Maintenance Cleaning",
    description:
      "Ongoing janitorial services for warehouses, community centers, and multi-use commercial facilities. Reliable routines that keep large-footprint spaces in consistent, professional order.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: Sparkles,
    title: "Floor Care & Strip/Wax",
    description:
      "Professional hard floor maintenance including stripping old buildup and applying a fresh, durable finish. Restores shine and extends floor life in high-traffic commercial spaces.",
    href: "/services/strip-and-wax",
    ctaLabel: "View Floor Care"
  },
  {
    Icon: Zap,
    title: "Deep Cleaning",
    description:
      "A full top-to-bottom reset for spaces that need intensive attention — ideal for new accounts, post-event recovery, or facilities that haven't had professional cleaning in some time.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: Home,
    title: "Property Manager Cleaning",
    description:
      "Turnover and maintenance cleaning for property managers overseeing offices, retail, and mixed-use buildings. Reliable service that consistently meets inspection standards.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View Move-In/Out Cleaning"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Facility Inspection",
    description:
      "We walk your property, assess scope, identify priorities, and understand your specific access and scheduling requirements before a single quote is written.",
    detail: "No obligation · Free assessment"
  },
  {
    number: "02",
    title: "Custom Cleaning Plan",
    description:
      "Based on your facility type, size, and traffic patterns, we develop a written cleaning scope tailored to your property — with clear, itemized pricing and no vague estimates.",
    detail: "Written scope & transparent pricing"
  },
  {
    number: "03",
    title: "Scheduled Cleaning Begins",
    description:
      "Your dedicated team arrives on schedule, follows a detailed checklist, and handles your property with the same care and consistency on every single visit.",
    detail: "Same crew · Structured checklist"
  },
  {
    number: "04",
    title: "Ongoing Quality Control",
    description:
      "We check in regularly, adjust scope as your needs evolve, and address any issues immediately — so quality never drifts and you never have to chase us down.",
    detail: "Accountable · Same-day response"
  }
];

const whyChooseItems = [
  {
    Icon: Users,
    title: "Consistent Staffing",
    description:
      "The same professional crew serves your property every visit. Your team learns your standards, your layout, and your preferences so results are predictable without you repeating yourself."
  },
  {
    Icon: CalendarCheck,
    title: "Reliable Schedules",
    description:
      "We show up when we say we will. No last-minute cancellations, no scheduling gaps. Your facility is cleaned on time, on the agreed day, every time."
  },
  {
    Icon: ClipboardCheck,
    title: "High Accountability",
    description:
      "Every job follows a written checklist specific to your space. If anything falls short, we return and correct it at no charge — no questions asked, no delay."
  },
  {
    Icon: ShieldCheck,
    title: "Fully Insured & Vetted Staff",
    description:
      "All team members are background-checked and covered under our insurance. You can hand over access to your facility with complete peace of mind."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description:
      "No voicemail loops, no chasing updates. You reach a real person, get a real answer, and any issue is handled the same day it's raised."
  },
  {
    Icon: MapPin,
    title: "Seattle-Local, Not a Franchise",
    description:
      "We're locally owned and accountable to this community. We know Seattle properties and serve Seattle clients — with the consistency a national chain simply can't deliver."
  }
];

const resultsBenefits = [
  "Reduced sick days through consistent high-touch surface sanitation",
  "Stronger client and visitor first impressions from a well-maintained space",
  "Lower long-term maintenance costs from proper floor and surface care",
  "Higher staff productivity and morale in a clean, organized environment",
  "Compliance-ready cleanliness for schools, medical offices, and regulated facilities",
  "Peace of mind — knowing it's handled, every week, without follow-up"
];

const authorityStats = [
  { value: "30+", label: "Years in Business", detail: "Family-owned, Seattle-rooted" },
  { value: "200+", label: "Properties Served", detail: "Offices, schools & facilities" },
  { value: "100%", label: "Satisfaction Backed", detail: "We make it right, every time" },
  { value: "5.0★", label: "Client Rating", detail: "Consistent 5-star performance" }
];

const serviceAreas = [
  "Downtown Seattle", "South Lake Union", "Capitol Hill", "Fremont",
  "Ballard", "West Seattle", "Bellevue", "Renton",
  "Kent", "Tukwila", "Kirkland", "Tacoma"
];

const faqItems = [
  {
    question: "How much does commercial cleaning in Seattle cost?",
    answer:
      "Commercial cleaning costs in Seattle vary based on facility size, service scope, and cleaning frequency. A recurring office cleaning plan for a small-to-medium space typically starts in the range of a few hundred dollars per month. Larger facilities, schools, and specialized services such as floor care or deep cleaning are priced individually after a facility walkthrough. We provide free, no-obligation estimates with clear, itemized pricing — no vague ranges, no surprise charges. Contact us and we'll give you a straightforward number based on your specific situation."
  },
  {
    question: "How often should commercial cleaning be done?",
    answer:
      "For most offices and commercial facilities, weekly or bi-weekly cleaning is the standard. High-traffic environments like schools, medical offices, and retail spaces may benefit from daily or multi-weekly service. We assess your space, foot traffic, and usage patterns during the initial walkthrough and recommend the frequency that maintains your standard without over-servicing."
  },
  {
    question: "Do you provide cleaning for schools and educational facilities?",
    answer:
      "Yes. We specialize in school and educational facility cleaning across the Seattle metro, including classrooms, hallways, restrooms, staff rooms, and common areas. We schedule service around school hours to avoid any disruption to students and staff, and we apply sanitation-focused cleaning protocols that support a healthy learning environment."
  },
  {
    question: "What areas in and around Seattle do you serve?",
    answer:
      "We serve Seattle and the greater metro area, including Bellevue, Tacoma, Renton, Kent, Tukwila, and Kirkland. We cover locations throughout King and Pierce counties. If you're unsure whether we serve your area, reach out and we'll confirm availability promptly."
  },
  {
    question: "Are your staff trained, vetted, and insured?",
    answer:
      "Yes. Every team member is background-checked before their first job and trained on our cleaning standards and protocols. We carry full liability insurance for all services, and proof of insurance is available on request during the quoting process. You can hand over access to your facility with confidence."
  },
  {
    question: "Can you work around our business hours?",
    answer:
      "Absolutely. We regularly schedule commercial cleaning during off-hours — evenings, early mornings, and weekends — to eliminate disruption to your team, tenants, or customers. We schedule around your business, not ours. Just let us know your preferred window and we'll build around it."
  },
  {
    question: "Do you offer cleaning contracts for commercial facilities?",
    answer:
      "Yes. Most of our commercial clients are on recurring weekly or bi-weekly plans. For larger facilities and institutional accounts, we offer written service agreements that define scope, frequency, and pricing in detail. A formal contract means consistent standards, clear expectations, and a reliable janitorial services partner you can count on long-term."
  }
];

export default function CommercialCleaningLandingPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          1. HERO
          ───────────────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-ink text-white">
        {/* Background texture + gradient */}
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-transparent" aria-hidden />
        {/* Decorative glows */}
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Left — headline + CTAs */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                <span className="text-xs font-semibold text-accent">Serving Seattle since 1995</span>
              </div>

              <p className="eyebrow-light">Seattle Commercial Cleaning Services</p>

              <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[3.75rem]">
                Commercial Cleaning in Seattle That Actually Stays Consistent
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC delivers professional commercial cleaning in Seattle for offices,
                schools, and commercial facilities across the greater metro area. Same crew every visit.
                Written checklists on every job. A reliable schedule you can count on — without follow-up.
              </p>

              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {[
                  "Same crew, every visit",
                  "Written scope on every job",
                  "Response within 2 hours",
                  "Satisfaction guaranteed"
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/75">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full sm:w-auto">
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/45">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
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
                  <span>30+ Years Serving Seattle</span>
                </div>
              </div>
            </div>

            {/* Right — stats column, large screens only */}
            <div className="hidden lg:flex lg:flex-col lg:gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-[148px] flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm"
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="mt-1 text-xs text-white/55">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stats grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
            {heroStats.map((stat) => (
              <div
                key={`m-${stat.label}`}
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

      {/* ─────────────────────────────────────────────────────────────────────
          1B. SEO INTRO — local keyword context, added for search relevance
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Seattle Commercial Cleaning</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Cleaning Services in Seattle for Businesses That Need Reliability
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Seattle businesses, schools, and commercial facilities share a common challenge: finding a
              cleaning company that maintains the same standard month after month, without constant
              follow-up. Cleaning From The Heart LLC provides commercial cleaning in Seattle built around
              consistent staffing, structured checklists, and direct communication — so reliability is
              built into the service, not something you have to manage yourself.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We work with offices that need dependable after-hours maintenance,{" "}
              <Link
                href="/services/school-facility-cleaning"
                className="font-medium text-brand-700 transition-colors hover:text-brand-900"
              >
                schools and educational facilities
              </Link>{" "}
              that require sanitation-focused cleaning on a strict schedule, and commercial facilities
              across Seattle and the greater metro area that need it done right, every time. Whether
              you&apos;re looking for recurring janitorial services or a one-time deep clean, we provide a
              clear scope, a reliable team, and results that hold up over time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          2. TRUST BAR
          ───────────────────────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-brand-950">
        <Container>
          <div className="py-7">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Trusted by businesses across Seattle
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustByTypes.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="text-xs font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          3. SERVICES OVERVIEW
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="services">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Commercial Cleaning Solutions Built for Seattle Businesses"
            description="From daily office cleaning to specialized school janitorial services and commercial facility maintenance, we provide professional cleaning solutions for Seattle businesses and properties across the greater metro area."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ Icon, title, description, href, ctaLabel }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="card-hover flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
                    <Icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-snug">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                  <div className="border-t border-brand-50 pt-3">
                    <Link
                      href={href}
                      className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {ctaLabel}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">Get a Free Quote</Link>
            <Link href="/services" className="cta-secondary">View All Services</Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. ABOUT / AUTHORITY
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <Reveal>
              <div>
                <span className="eyebrow">About Cleaning From The Heart</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  30 Years of Reliable Commercial Cleaning in Seattle
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  Cleaning From The Heart LLC has been serving Seattle businesses,{" "}
                  <Link
                    href="/services/school-facility-cleaning"
                    className="font-medium text-brand-700 transition-colors hover:text-brand-900"
                  >
                    schools and educational facilities
                  </Link>
                  , and commercial properties for over three decades. What we&apos;ve learned in 30 years is
                  straightforward: reliability is the only standard that matters in professional cleaning.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Many of our clients have been with us for years — not because switching is difficult,
                  but because they never needed to. We staff accounts consistently, show up on schedule,
                  and solve problems without waiting to be asked twice. That&apos;s the foundation this
                  company was built on.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  As a locally owned Seattle business, we&apos;re not managing dozens of franchises across the
                  country. We&apos;re focused on this city, these properties, and the businesses and
                  communities we serve here.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact#quote-form" className="cta-primary">Get a Free Quote</Link>
                  <Link href="/about" className="cta-secondary">Learn More About Us</Link>
                </div>
              </div>
            </Reveal>

            {/* Authority stats */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {authorityStats.map(({ value, label, detail }) => (
                  <div key={label} className="rounded-2xl border border-brand-100 bg-surface p-6">
                    <span className="font-heading text-3xl font-bold tracking-tight text-brand-600">{value}</span>
                    <p className="mt-1 text-sm font-semibold text-ink">{label}</p>
                    <p className="mt-1 text-xs text-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          5. PROCESS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From First Inquiry to a Reliably Clean Seattle Facility — Four Steps"
            description="No complicated onboarding, no vague timelines. A clear four-step process that takes you from initial inquiry to consistent, professional cleaning results."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.09}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                      <span className="text-sm font-bold text-brand-700">{step.number}</span>
                    </div>
                    <span className="select-none text-4xl font-bold text-brand-100" aria-hidden>
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                  <div className="mt-auto border-t border-brand-50 pt-3">
                    <p className="text-xs font-semibold text-brand-600">{step.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Start With a Free Inspection
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          6. WHY CHOOSE US
          ───────────────────────────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Seattle Businesses Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Offices, Schools &amp; Facilities Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                Consistency, accountability, and communication. Most cleaning vendors fail on at least one.
                We&apos;ve made all three non-negotiable — because Seattle businesses deserve better.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <div className="card-dark-hover flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
              <div className="flex flex-col items-start gap-1">
                <Link href="/contact#quote-form" className="cta-gold">
                  Get a Free Quote
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href={siteConfig.phoneHref} className="cta-ghost">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          7. RESULTS / PROOF
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <Reveal>
              <div>
                <span className="eyebrow">Real Results</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  What Professional Cleaning in Seattle Actually Changes for Your Facility
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  A professionally maintained facility isn&apos;t just cleaner — it performs better. Staff operate
                  in a healthier environment, clients form stronger first impressions, and facilities hold
                  their condition significantly longer with proper professional care.
                </p>
                <ul className="mt-6 space-y-3">
                  {resultsBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                      <span className="text-sm leading-relaxed text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/gallery" className="cta-primary">
                    View Our Work Results
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Visual proof callout */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-brand-100 bg-surface p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Typical Problem
                  </p>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 p-4 flex items-center justify-center">
                    <p className="text-xs text-center leading-relaxed text-gray-500">
                      Inconsistent service, visible buildup, different crew every week, no accountability
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-600/30 bg-brand-50 p-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                    Our Standard
                  </p>
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 p-4 flex items-center justify-center">
                    <p className="text-xs text-center leading-relaxed text-brand-800">
                      Same crew, structured checklist, reliable schedule, issues corrected same day
                    </p>
                  </div>
                </div>
                <div className="col-span-2 rounded-2xl border border-brand-100 bg-surface px-6 py-5">
                  <p className="text-sm font-semibold text-ink">Our 100% Satisfaction Guarantee</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    If any area doesn&apos;t meet the agreed standard, we return and correct it at no charge.
                    Every single time, no questions asked.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          8. LOCAL SEO SECTION
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Seattle&apos;s Commercial Cleaning Partner</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Serving Seattle Businesses &amp; the Greater Metro Area
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides commercial cleaning in Seattle and throughout the greater
              metro — including Bellevue, Tacoma, Renton, Kent, Tukwila, and Kirkland. Whether you manage a
              single office in South Lake Union, a school in Bellevue, or a portfolio of commercial properties
              across King and Pierce counties, our team delivers the same reliable, consistent standard at
              every location.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              As a locally owned janitorial services company rooted in the Seattle area, we&apos;ve built
              long-term relationships with businesses, school districts, and property managers who count on us
              because we show up, do the work, and communicate clearly. We don&apos;t subcontract to unfamiliar
              crews or rotate strangers through your building. When you hire us, you get a dedicated team that
              becomes familiar with your facility and invested in your result.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Whether you&apos;re searching for office cleaning in Seattle, school janitorial services in Bellevue,
              or commercial cleaners near Tacoma, we&apos;re available to walk your facility, provide a free
              estimate, and show you what consistent professional cleaning actually looks like.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Check Availability in Your Area
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>

          {/* Service area pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-medium text-ink"
              >
                <MapPin className="h-3 w-3 text-brand-600" aria-hidden />
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          9. FAQ
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">

            {/* Left — label + contact nudge */}
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Common Questions About Commercial Cleaning in Seattle
              </h2>
              <p className="mt-4 text-base text-muted">
                Answers to what Seattle businesses and property managers ask us most before getting started.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your property, facility,
                  or schedule — same day.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/contact#quote-form" className="cta-primary px-4 py-2 text-xs">
                    Ask Us Directly
                  </Link>
                  <Link href={siteConfig.phoneHref} className="cta-secondary px-4 py-2 text-xs">
                    Call Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — accordion */}
            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-brand-100 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-brand-100 bg-surface px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          10. FINAL CTA
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" aria-hidden />
                  <span className="text-xs font-semibold text-accent">Limited availability this month</span>
                </div>

                <p className="eyebrow-light">Get Reliable Commercial Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Stop Managing Your Cleaning Vendor. Start Trusting One.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Request a free quote today. We&apos;ll walk your facility, confirm scope and pricing, and
                  send a written proposal within 24 hours. No vague estimates, no surprise charges,
                  no obligation.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {[
                    "Written quote within 24 hours",
                    "Flexible one-time or recurring service",
                    "Satisfaction guaranteed on every visit"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CalendarCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
                    Request a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Mon–Sat · 7 AM – 7 PM</span>
                </div>
              </div>

            </div>

            <p className="relative mt-8 text-xs text-white/30">
              Serving Seattle, Bellevue, Renton, Kent, Tukwila, Tacoma &amp; surrounding areas.
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
