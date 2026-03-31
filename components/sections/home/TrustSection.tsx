import { ShieldCheck, Star, MapPin, Clock, ClipboardCheck, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonialPlaceholders } from "@/lib/site";

const trustBadges = [
  { label: "Fully Insured", sub: "Licensed & bonded on every job", icon: ShieldCheck },
  { label: "Vetted Staff", sub: "Background-checked professionals", icon: Users },
  { label: "Satisfaction Backed", sub: "We make it right, every time", icon: Star },
  { label: "Flexible Scheduling", sub: "Evenings, mornings & weekends", icon: Clock },
  { label: "Detailed Process", sub: "Structured checklists per visit", icon: ClipboardCheck },
  { label: "Seattle-Based", sub: "Locally owned and operated", icon: MapPin }
];

export function TrustSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Seattle Trusts Us"
          title="A Professional Cleaning Partner, Not Just a Vendor"
          description="We hold ourselves to commercial-grade standards on every job — whether it's a weekly office contract or a one-time deep clean."
        />

        {/* Trust credential grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge, index) => (
            <Reveal key={badge.label} delay={index * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-surface p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                  <badge.icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{badge.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{badge.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials — PLACEHOLDER: Replace all three with real client reviews before launch */}
        <div className="mt-12">
          <p className="text-sm font-semibold text-ink">What Clients Say</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {testimonialPlaceholders.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                {/* PLACEHOLDER — Replace quote, name, and role with a real verified client review before launch */}
                <article className="card flex flex-col">
                  <div className="mb-3 flex items-center gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={`star-${item.role}-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="flex-1 text-sm italic leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-brand-50 pt-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
