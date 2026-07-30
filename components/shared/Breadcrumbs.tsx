import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // The final crumb contains the current page path and is used to create a stable
  // @id for this page's complete BreadcrumbList. This component is the single
  // breadcrumb JSON-LD emitter on pages that render it.
  const currentPath = items[items.length - 1]?.href;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(currentPath ? { "@id": `${SITE_URL}${currentPath}#breadcrumb` } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link href={item.href} className="font-medium text-white/60 hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="font-medium text-white/90">
                    {item.label}
                  </span>
                )}
                {!isLast ? <ChevronRight className="h-3 w-3 text-white/40" aria-hidden /> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
