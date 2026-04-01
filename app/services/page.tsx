import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our full Seattle service lineup including commercial cleaning, floor care, pressure washing, and more.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Seattle Cleaning Services That Keep Your Property Looking Its Best"
        description="Choose the service you need and request a quote in minutes. Every page is designed to help you make a fast, informed decision."
        backgroundImage="/images/hero-cleaning-team.png"
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card h-full">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm text-muted">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
