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

export function ServicesSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Cleaning Solutions for Seattle Offices &amp; Properties"
          description="From scheduled commercial accounts to one-time deep cleans and post-construction detail work, we cover what your property needs."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeServiceCards.map((service, index) => {
            const Icon = iconMap[service.iconName] ?? Building2;
            return (
              <Reveal key={service.title} delay={index * 0.07}>
                <article className="card-media group flex h-full flex-col">

                  {/*
                    SERVICE CARD IMAGE
                    ───────────────────────────────────────────────────────────
                    To add a real image for this service:
                    1. Upload a photo to /public/home/services/{service-slug}.jpg
                    2. Set service.image in lib/site.ts to "/home/services/{name}.jpg"
                    3. The styled placeholder below will be replaced automatically.

                    Recommended image size: 800×450px (16:9 ratio)
                    ───────────────────────────────────────────────────────────
                  */}
                  {service.image ? (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    /* Styled gradient placeholder — shows when no image is set */
                    <div className="service-img-placeholder border-b border-brand-50">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200">
                        <Icon className="h-7 w-7 text-brand-700" aria-hidden />
                      </div>
                    </div>
                  )}

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon shown here only if we also have an image (keeps the icon label visible) */}
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
