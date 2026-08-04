"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  KeyRound,
  Banknote,
  Landmark,
  GraduationCap,
  Church,
  ShoppingBag,
  Car,
  Hotel,
  Dumbbell,
  HeartPulse,
  Warehouse,
  ChefHat
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Industry } from "@/lib/industries";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  KeyRound,
  Banknote,
  Landmark,
  GraduationCap,
  Church,
  ShoppingBag,
  Car,
  Hotel,
  Dumbbell,
  HeartPulse,
  Warehouse,
  ChefHat
};

const GAP_PX = 20;

export function IndustryCarousel({ industries }: { industries: Industry[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft < max - 4);
    setProgress(max <= 0 ? 100 : Math.min(100, Math.max(0, (el.scrollLeft / max) * 100)));
  }, []);

  useEffect(() => {
    updateState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.getBoundingClientRect().width + GAP_PX : el.clientWidth * 0.8;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: reducedMotion ? "auto" : "smooth" });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  };

  const total = industries.length;
  const currentApprox = Math.min(total, Math.round((progress / 100) * (total - 1)) + 1);

  const navButtonClass =
    "inline-flex items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-card transition-all duration-200 hover:border-brand-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-brand-100 disabled:text-brand-300 disabled:opacity-50 disabled:shadow-none disabled:hover:border-brand-100 disabled:hover:shadow-none";

  return (
    <div>
      {/* Compact controls for mobile, above the cards */}
      <div className="mb-3 flex items-center justify-end gap-2 md:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous industries"
          className={`${navButtonClass} h-8 w-8`}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Next industries"
          className={`${navButtonClass} h-8 w-8`}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries we serve, scroll or use arrow keys to browse"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4 motion-reduce:scroll-auto"
        >
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.iconName] ?? Building2;
            return (
              <article
                key={industry.slug}
                data-carousel-card
                role="group"
                aria-roledescription="slide"
                aria-label={`${industry.name}, ${index + 1} of ${total}`}
                className="flex min-h-[260px] shrink-0 snap-start flex-col gap-3 rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover basis-[82%] md:basis-[calc(50%-10px)] lg:basis-[calc(25%-15px)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold leading-snug text-ink">{industry.name}</h3>
                <p className="flex-1 text-xs leading-relaxed text-muted">{industry.carouselDescription}</p>
                <Link
                  href={industry.href}
                  className="mt-auto inline-flex items-center pt-1 text-xs font-semibold text-brand-700 hover:text-brand-900"
                >
                  {industry.carouselLinkLabel}
                  <ArrowRight className="ml-1 h-3 w-3" aria-hidden />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Side arrows for desktop/tablet, overlapping the card row edges */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous industries"
          className={`${navButtonClass} absolute left-[-20px] top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 md:inline-flex`}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Next industries"
          className={`${navButtonClass} absolute right-[-20px] top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 md:inline-flex`}
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-1 w-32 overflow-hidden rounded-full bg-brand-100 sm:w-40" aria-hidden>
            <div className="h-full rounded-full bg-brand-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
          <span className="sr-only" aria-live="polite">
            Showing industry {currentApprox} of {total}
          </span>
        </div>

        <Link href="/industries-we-serve" className="inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">
          View All Industries
          <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
