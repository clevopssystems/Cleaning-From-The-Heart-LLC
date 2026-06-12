import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Layers, Sparkles, Home, Zap, HardHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeServiceCards } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Layers,
  Sparkles,
  Home,
  Zap,
  HardHat
};

const moreServices = [
  { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { label: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning" },
  { label: "Floor Stripping & Waxing", href: "/services/strip-and-wax" },
  { label: "Post-Construction Cleaning", href: "/services/post-construction-renovation-cleanup" },
  { label: "Janitorial Services", href: "/services/commercial-cleaning" },
  { label: "School Facility Cleaning", href: "/services/school-facility-cleaning" },
  { label: "Office Cleaning", href: "/services/commercial-cleaning" },
  { label: "Parking Lot Exterior Maintenance", href: "/services/parking-lot-exterior-maintenance" },
];

export function ServicesSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Cleaning Solutions for Seattle Homes, Offices &amp; Properties"
          description="We provide commercial and residential cleaning, floor care, window cleaning, pressure washing, and more throughout Seattle and surrounding areas. One-time, recurring, or contract-based."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeServiceCards.map((service, index) => {
            const Icon = iconMap[service.iconName] ?? Building2;
            return (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="card-media group flex h-full flex-col">

                  {service.image ? (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Seattle, WA — Cleaning From The Heart LLC`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="service-img-placeholder border-b border-brand-50">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200">
                        <Icon className="h-7 w-7 text-brand-700" aria-hidden />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    {service.image && (
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                        <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                      </div>
                    )}
                    <h3 className="text-base font-semibold leading-snug">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {service.href.startsWith("/services") ? "View Details" : "Request a Quote"}
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* More Services compact row */}
        <Reveal delay={0.12}>
          <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600 mb-4">More Services</p>
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {moreServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 rounded-xl border border-brand-100 bg-surface px-3.5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/services" className="cta-secondary">
            View All Services
          </Link>
          <Link href="/contact#quote-form" className="cta-primary">
            Request a Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
