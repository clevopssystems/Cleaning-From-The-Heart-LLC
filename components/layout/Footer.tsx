import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { services, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-600 bg-ink text-white">
      <Container className="py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-heading text-base font-bold tracking-tight text-white">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Professional cleaning services for Seattle offices, commercial properties, and property managers.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                {siteConfig.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/55">
                <Clock className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                {siteConfig.businessHours}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-white/55 transition-colors hover:text-white">
                  Move-In / Move-Out Cleaning
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/55 transition-colors hover:text-white">
                  Post-Construction Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-white/55 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/55 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/55 transition-colors hover:text-white">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-white/55 transition-colors hover:text-white">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/55 transition-colors hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  {siteConfig.email}
                </Link>
              </li>
            </ul>
            <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-gold mt-6 inline-flex text-xs">
              Request a Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Seattle Commercial Cleaning · Carpet Cleaning · Strip &amp; Wax</p>
        </div>
      </Container>
    </footer>
  );
}
