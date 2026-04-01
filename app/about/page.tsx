import type { Metadata } from "next";
import { HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Cleaning From The Heart LLC and our commitment to reliable cleaning in Seattle.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="A Family Legacy of Cleaning"
        description="Cleaning From The Heart is a family owned company proudly serving Seattle and nearby areas."
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="card">
              <HeartHandshake className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">People-First Service</h2>
              <p className="mt-2 text-sm text-muted">We treat every property with care and every client relationship with respect.</p>
            </article>
            <article className="card">
              <Sparkles className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">Reliable Quality</h2>
              <p className="mt-2 text-sm text-muted">Clear scopes, repeatable checklists, and quality follow-through you can count on.</p>
            </article>
            <article className="card">
              <MapPin className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">Seattle Local</h2>
              <p className="mt-2 text-sm text-muted">We know Seattle properties and local expectations for clean, professional spaces.</p>
            </article>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold">Our Story</h2>
              <p className="mt-4 text-base text-muted">
                Cleaning From The Heart is a family owned company proudly serving Seattle and nearby areas.
              </p>
              <p className="mt-4 text-base text-muted">
                Founded over 30 years ago by Oscar Alexander, the business began during a difficult time in his life. Cleaning started as a way to stay active and cope, but quickly grew into a trusted service for local businesses.
              </p>
              <p className="mt-4 text-base text-muted">
                Today, his son Joshua Alexander continues that legacy, built on hard work, reliability, and genuine care for every client.
              </p>
              <p className="mt-4 text-base text-muted">
                We specialize in professional commercial cleaning, helping businesses stay clean, safe, and welcoming. A well maintained space improves productivity and creates a strong first impression.
              </p>
              <p className="mt-4 text-base text-muted">Our team focuses on</p>
              <ul className="mt-2 space-y-1 text-base text-muted">
                <li>• Reliable service</li>
                <li>• Attention to detail</li>
                <li>• Consistent high quality results</li>
              </ul>
              <p className="mt-4 text-base text-muted">
                We proudly serve offices, schools, and commercial facilities of all sizes across Seattle and surrounding areas.
              </p>
              <p className="mt-4 text-base text-muted">Our mission is simple</p>
              <p className="mt-2 text-base text-muted">
                To build long term relationships by delivering dependable cleaning services with integrity, pride, and heart.
              </p>
            </div>
            <aside className="card h-fit">
              <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-brand-200 bg-surface text-center">
                <p className="px-6 text-sm font-medium text-muted">Owner image goes here</p>
              </div>
            </aside>
          </div>

          <div className="mt-8">
            <aside className="card">
              <h3 className="text-lg font-semibold">Our Team Focus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Reliable service</li>
                <li>Attention to detail</li>
                <li>Consistent high quality results</li>
              </ul>
              <h3 className="mt-6 text-lg font-semibold">Our Mission</h3>
              <p className="mt-3 text-sm text-muted">
                To build long term relationships by delivering dependable cleaning services with integrity, pride, and heart.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
