"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/lib/site";

type FilterId = GalleryCategory | "all";

const aspectByOrientation: Record<GalleryItem["orientation"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square"
};

interface ResultsGalleryProps {
  items: GalleryItem[];
  categories: { id: GalleryCategory; label: string }[];
}

export function ResultsGallery({ items, categories }: ResultsGalleryProps) {
  const [active, setActive] = useState<FilterId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // The lightbox is rendered through a portal to document.body so it escapes
  // the `contain: layout` on .section-shell, which would otherwise trap a
  // position:fixed overlay inside the gallery section.
  useEffect(() => setMounted(true), []);

  const filters = useMemo(
    () => [
      { id: "all" as FilterId, label: "All Work", count: items.length },
      ...categories.map((c) => ({
        id: c.id as FilterId,
        label: c.label,
        count: items.filter((i) => i.categories.includes(c.id)).length
      }))
    ],
    [items, categories]
  );

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((i) => i.categories.includes(active))),
    [items, active]
  );

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );

  // Reset the lightbox when the active filter changes so an open index never
  // points past the end of a smaller filtered set.
  function handleFilter(id: FilterId) {
    setActive(id);
    setLightboxIndex(null);
  }

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem = lightboxIndex === null ? null : filtered[lightboxIndex];

  return (
    <div>
      {/* ── Category filters ─────────────────────────────────────────────── */}
      <div
        className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
        role="group"
        aria-label="Filter results by cleaning service"
      >
        {filters.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => handleFilter(f.id)}
              aria-pressed={isActive}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                isActive
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-brand-100 bg-white text-ink hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {f.label}
              <span
                className={`text-xs font-medium ${isActive ? "text-white/70" : "text-muted"}`}
              >
                {f.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Masonry gallery (photo-first, no text overlays) ──────────────── */}
      <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
        {filtered.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openLightbox(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-stone-100 shadow-sm transition-all duration-300 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:mb-5"
            aria-label={`Open photo: ${item.alt}`}
          >
            <div className={`relative w-full ${aspectByOrientation[item.orientation]}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index < 4}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <span
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.06]"
                aria-hidden
              />
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox (portaled to body) ──────────────────────────────────── */}
      {mounted && activeItem
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.caption}
              onClick={closeLightbox}
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close image preview"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden />
                  </button>
                </>
              ) : null}

              <figure
                className="flex max-h-full max-w-3xl flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[80vh] max-w-full rounded-lg object-contain"
                />
                <figcaption className="mt-4 flex flex-col items-center gap-1.5 text-center">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {activeItem.tag}
                  </span>
                  <p className="text-sm text-white/80">{activeItem.caption}</p>
                  {filtered.length > 1 ? (
                    <p className="text-xs text-white/40">
                      {(lightboxIndex ?? 0) + 1} / {filtered.length}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
