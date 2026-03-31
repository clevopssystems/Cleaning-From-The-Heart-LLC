import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-200 bg-white/95 p-3 shadow-[0_-8px_30px_-12px_rgba(21,35,31,0.3)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
        <Link href="/contact" className="cta-primary py-2 text-xs">
          Get Quote
        </Link>
        <Link href={siteConfig.phoneHref} className="cta-secondary py-2 text-xs">
          <Phone className="mr-1 h-4 w-4" />
          Call Now
        </Link>
      </div>
    </div>
  );
}