import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Service } from "@/lib/site";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
        <Container className="relative section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow-light">Seattle {service.title}</span>
              <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">{service.title} Services In Seattle</h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{service.shortDescription}</p>
              <div className="mt-8">
                <CtaButtons />
              </div>
            </div>

            <aside className="card-dark h-fit">
              <h2 className="text-base font-semibold text-white">Common Problem</h2>
              <p className="mt-2 text-sm text-white/65">{service.problem}</p>
              <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
              <p className="mt-2 text-sm text-white/65">{service.solution}</p>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-white">
        <Container>
          <SectionHeading title={`Why Choose Our ${service.title} Service`} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.benefits.map((benefit) => (
              <article key={benefit} className="card flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-sm text-muted">{benefit}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading title="Our Process" description="Clear steps reduce friction and improve booking confidence." />
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <li key={step} className="card">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Step {index + 1}</p>
                <p className="mt-2 text-sm text-muted">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButtons />
            <Link href="/gallery" className="cta-secondary">
              See Before & After Results
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}