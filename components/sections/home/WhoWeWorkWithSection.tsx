import Link from "next/link";
import { Building2, KeyRound, Home, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const clientTypes = [
  {
    icon: KeyRound,
    title: "Property Managers",
    description:
      "Reliable move-out, common area, floor care, and turnover cleaning for rental and managed properties. One point of contact, consistent results across every unit, and flexible scheduling built around your turnover timelines.",
    tags: ["Move-Out Cleaning", "Turnover Cleaning", "Multi-Property Support"]
  },
  {
    icon: Building2,
    title: "Offices & Commercial Spaces",
    description:
      "Recurring cleaning for offices, storefronts, and commercial facilities throughout Seattle. Same crew every visit, after-hours scheduling, and a structured checklist process that keeps your workspace client-ready.",
    tags: ["Recurring Contracts", "After-Hours Available", "Checklist-Backed"]
  },
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Professional home cleaning for Seattle-area homeowners who want a clean, well-maintained home without the hassle. Regular maintenance cleans, deep cleans, move-in/move-out service, and window cleaning available.",
    tags: ["Regular Maintenance", "Deep Cleaning", "Window Cleaning"]
  },
  {
    icon: GraduationCap,
    title: "Schools & Facilities",
    description:
      "Structured cleaning plans for K-12 schools, educational campuses, and large facilities. Classroom sanitation, restroom service, hallways, offices, and common areas — scheduled around school hours.",
    tags: ["Classroom Cleaning", "Restroom Sanitation", "Flexible Scheduling"]
  }
];

export function WhoWeWorkWithSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Who We Help</span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Cleaning for Homes, Offices, Schools &amp; Properties
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Whether you manage a single home or a portfolio of commercial properties, Cleaning From The Heart LLC
            delivers the consistency, communication, and results you can count on.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {clientTypes.map((client, index) => (
            <Reveal key={client.title} delay={index * 0.07}>
              <div className="card-hover flex h-full flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <client.icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{client.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{client.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/contact#quote-form" className="cta-primary">
            Get a Free Quote
          </Link>
          <Link href="/services" className="cta-secondary">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
