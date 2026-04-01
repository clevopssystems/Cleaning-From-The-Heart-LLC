import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Get Quote",
  description: "Request a cleaning quote in Seattle for commercial cleaning, carpet cleaning, or strip and wax services.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get Quote"
        title="Request Your Seattle Cleaning Quote"
        description="Tell us what you need and we will follow up with a clear quote and scheduling options."
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <aside className="space-y-4">
              <article className="card">
                <h3 className="text-lg font-semibold">Call Direct</h3>
                <Link href={siteConfig.phoneHref} className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </Link>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="mt-2 text-sm text-muted">Prefer messaging? Send us an email and we'll get back to you fast.</p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-700"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Send an Email
                </Link>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">Business Details</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-brand-600" />
                    {siteConfig.address}
                  </li>
                  <li className="flex gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 text-brand-600" />
                    {siteConfig.businessHours}
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-brand-600" />
                    <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                      {siteConfig.email}
                    </Link>
                  </li>
                </ul>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">Response Expectation</h3>
                <p className="mt-2 text-sm text-muted">[Add your average response time here, e.g. within 2 business hours.]</p>
              </article>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
