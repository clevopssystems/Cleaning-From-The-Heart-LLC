import Link from "next/link";
import { Building2, ShoppingBag, KeyRound, Home, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

const clientTypes = [
  {
    icon: Building2,
    title: "Offices & Corporate Spaces",
    description:
      "From single-suite offices to multi-floor corporate facilities, we provide scheduled cleaning that keeps your workspace client-ready and your team focused. Consistent crew, after-hours scheduling, and zero disruption to your workday.",
    tags: ["Recurring Weekly Contracts", "After-Hours Available", "Checklist-Backed"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & Storefronts",
    description:
      "First impressions close sales. We keep your retail floor, windows, restrooms, and entry areas spotless on a schedule that works around your store hours and customer traffic patterns.",
    tags: ["Early Morning Service", "Floor Maintenance", "Window Cleaning"]
  },
  {
    icon: KeyRound,
    title: "Property Managers",
    description:
      "We're the vendor property managers keep. Reliable turnover cleans, recurring common-area maintenance, and move-in/move-out service across single or multiple properties. One point of contact, consistent standards across every unit.",
    tags: ["Multi-Property Support", "Turnover Cleaning", "Flexible Scheduling"]
  },
  {
    icon: Home,
    title: "Short-Term Rental Hosts",
    description:
      "Airbnb and vacation rental hosts need a cleaning partner who understands turnaround pressure. We deliver guest-ready results between bookings, on time, every time, so you never have to scramble before a check-in.",
    tags: ["Same-Day Turnovers", "Guest-Ready Standard", "Reliable Availability"]
  }
];

export function WhoWeWorkWithSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Who We Work With</span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Cleaning Built for Seattle Businesses &amp; Property Owners
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Whether you manage one office or dozens of rental properties, we provide the level of consistency
            and communication that makes us easy to rely on.
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
          <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-primary">
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
