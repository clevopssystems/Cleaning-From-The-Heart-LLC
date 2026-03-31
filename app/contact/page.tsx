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
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <form className="card" action="mailto:hello@cleaningfromtheheartllc.com" method="post" encType="text/plain">
              <h2 className="text-2xl font-semibold">Get a Quote</h2>
              <p className="mt-2 text-sm text-muted">This form is editable. Connect it to your CRM or inbox endpoint for production use.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-ink">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-brand-200 px-3 py-2 text-sm outline-none ring-brand-400 focus:ring"
                  />
                </label>
                <label className="text-sm font-medium text-ink">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-xl border border-brand-200 px-3 py-2 text-sm outline-none ring-brand-400 focus:ring"
                  />
                </label>
                <label className="text-sm font-medium text-ink sm:col-span-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-brand-200 px-3 py-2 text-sm outline-none ring-brand-400 focus:ring"
                  />
                </label>
                <label className="text-sm font-medium text-ink sm:col-span-2">
                  Service Needed
                  <select
                    name="service"
                    className="mt-2 w-full rounded-xl border border-brand-200 px-3 py-2 text-sm outline-none ring-brand-400 focus:ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Commercial Cleaning</option>
                    <option>Carpet Cleaning</option>
                    <option>Strip & Wax</option>
                    <option>Not Sure Yet</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-ink sm:col-span-2">
                  Property Details
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us your square footage, location, schedule, and goals."
                    className="mt-2 w-full rounded-xl border border-brand-200 px-3 py-2 text-sm outline-none ring-brand-400 focus:ring"
                  />
                </label>
              </div>

              <button type="submit" className="cta-primary mt-6 w-full sm:w-auto">
                Send Quote Request
              </button>
              <p className="mt-3 text-xs text-muted">Need immediate help? Call us now for faster response.</p>
            </form>

            <aside className="space-y-4">
              <article className="card">
                <h3 className="text-lg font-semibold">Call Direct</h3>
                <Link href={siteConfig.phoneHref} className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  {siteConfig.phoneDisplay}
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