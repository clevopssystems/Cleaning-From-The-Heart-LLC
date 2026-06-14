import Link from "next/link";
import { Building2, KeyRound, Home, GraduationCap } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const clientTypes = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Homes, apartments, move-ins and move-outs, and deeper one-time cleans.",
    tags: ["Homes & Apartments", "Move-In / Move-Out", "Recurring"]
  },
  {
    icon: Building2,
    title: "Offices & Commercial Spaces",
    description:
      "Workspaces, common areas, floors, and windows, on a schedule that fits your hours.",
    tags: ["Workspaces", "Common Areas", "Recurring"]
  },
  {
    icon: KeyRound,
    title: "Property Managers",
    description:
      "Turnovers, move-outs, common areas, and floor care across managed properties.",
    tags: ["Turnover", "Common Areas", "Multi-Property"]
  },
  {
    icon: GraduationCap,
    title: "Schools & Facilities",
    description:
      "Classrooms, offices, and high-use spaces cleaned around your schedule.",
    tags: ["Classrooms", "Offices", "High-Use Spaces"]
  }
];

export function WhoWeWorkWithSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Who We Help</span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Cleaning for homes, offices, schools &amp; managed properties around Seattle
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Tell us what you need cleaned and we&apos;ll help you choose the right service.
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
        </div>
      </Container>
    </section>
  );
}
