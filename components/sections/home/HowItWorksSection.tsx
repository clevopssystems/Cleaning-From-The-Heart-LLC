import { PhoneCall, CalendarClock, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    text: "Tell us about your property, the services you need, and your preferred schedule. We respond within one business day.",
    icon: PhoneCall,
    detail: "Online form or direct call"
  },
  {
    number: "02",
    title: "Get a Clear Proposal",
    text: "We assess your space, confirm scope and pricing, and provide a written proposal with no vague estimates or surprise charges.",
    icon: CalendarClock,
    detail: "Written scope & pricing"
  },
  {
    number: "03",
    title: "We Handle the Rest",
    text: "Our team arrives on schedule, follows the agreed checklist, and communicates directly with you if anything needs attention.",
    icon: Sparkles,
    detail: "Consistent team, every visit"
  }
];

export function HowItWorksSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From First Inquiry to Clean Space, Simple"
          description="No complicated contracts, no vague timelines. A clear three-step process designed to get your property clean and keep it that way."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="card flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <step.icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <span className="select-none text-4xl font-bold text-brand-100" aria-hidden>
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
              <div className="mt-auto border-t border-brand-50 pt-3">
                <p className="text-xs font-semibold text-brand-600">{step.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <CtaButtons />
        </div>
      </Container>
    </section>
  );
}
