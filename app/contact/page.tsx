import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Instagram, Mail, MapPin, PhoneCall } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Get Quote",
  description:
    "Request a cleaning quote in Seattle for commercial cleaning, carpet cleaning, or strip and wax services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get Quote"
        title="Request Your Seattle Cleaning Quote"
        description="Fill in the form below and we'll follow up with a clear quote and scheduling options."
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_380px]">

            {/* ── Left: contact form ── */}
            <ContactForm />

            {/* ── Right: contact info ── */}
            <aside className="space-y-4">
              <article className="card">
                <h3 className="text-lg font-semibold">Prefer to Call?</h3>
                <Link
                  href={siteConfig.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </Link>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">Business Details</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {siteConfig.address}
                  </li>
                  <li className="flex gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {siteConfig.businessHours}
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                      {siteConfig.email}
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link
                      href={siteConfig.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-700"
                    >
                      {siteConfig.instagramHandle}
                    </Link>
                  </li>
                </ul>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">Response Time</h3>
                <p className="mt-2 text-sm text-muted">
                  We typically respond within 2 business hours during Mon–Sat 7 AM–7 PM Pacific.
                </p>
              </article>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
