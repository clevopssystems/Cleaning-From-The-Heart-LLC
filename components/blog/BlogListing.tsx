"use client";

import { useState, type ReactNode } from "react";
import { blogCategories, type BlogCategory } from "@/lib/blog-types";

/** Only category IDs and server-rendered previews cross the client boundary. */
export function BlogListing({ entries }: { entries: { slug: string; category: BlogCategory; preview: ReactNode }[] }) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const categories = Object.keys(blogCategories).filter(key => entries.some(entry => entry.category === key)) as BlogCategory[];
  const visible = entries.filter(entry => category === "all" || entry.category === category);
  return (
    <>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">Latest resources</h2>
        {categories.length > 1 ? (
          <div className="w-full sm:w-auto">
            <label htmlFor="blog-topic" className="mb-2 block text-sm font-medium">Browse by topic</label>
            <select id="blog-topic" value={category} onChange={event => setCategory(event.target.value as BlogCategory | "all")}
              className="min-h-11 w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-ink sm:w-64">
              <option value="all">All resources</option>
              {categories.map(key => <option key={key} value={key}>{blogCategories[key]}</option>)}
            </select>
          </div>
        ) : null}
      </div>
      <p aria-live="polite" className="sr-only">{visible.length} {visible.length === 1 ? "resource" : "resources"}</p>
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {entries.map(entry => <div key={entry.slug} hidden={category !== "all" && entry.category !== category} className="min-w-0">{entry.preview}</div>)}
      </div>
    </>
  );
}
