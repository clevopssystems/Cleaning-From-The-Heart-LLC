"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasDarkHero =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/gallery" ||
    pathname === "/contact";
  const transparent = hasDarkHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-brand-100/80 bg-white/95 backdrop-blur-md shadow-sm"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "font-heading text-sm font-bold tracking-tight transition-colors sm:text-base",
            transparent ? "text-white hover:text-brand-200" : "text-ink hover:text-brand-700"
          )}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                transparent
                  ? "text-white/80 hover:text-white"
                  : pathname === link.href
                  ? "text-brand-700"
                  : "text-muted hover:text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={siteConfig.phoneHref}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors",
              transparent
                ? "text-white/90 hover:bg-white/10"
                : "text-brand-700 hover:bg-brand-50"
            )}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {siteConfig.phoneDisplay}
          </Link>
          <Link
            href="/contact#quote-form"
            className="cta-primary px-4 py-2 text-xs"
          >
            {siteConfig.primaryCta}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-brand-50 md:hidden",
            transparent ? "text-white hover:bg-white/10" : "text-ink"
          )}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile dropdown — always solid */}
      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-700",
                  pathname === link.href ? "bg-brand-50 text-brand-700" : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/contact#quote-form" className="cta-primary text-xs" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary text-xs" onClick={() => setOpen(false)}>
                <Phone className="mr-1 h-3.5 w-3.5" aria-hidden />
                Call Now
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
