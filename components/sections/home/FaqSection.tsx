import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { faqs } from "@/lib/site";
import { siteConfig } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Common Questions, Direct Answers
            </h2>
            <p className="mt-4 text-base text-muted">
              Everything you need to know before requesting a quote for your Seattle property.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
              <p className="text-sm font-semibold text-ink">Still have a question?</p>
              <p className="mt-1 text-sm text-muted">
                Call us directly or use the quote form and we will answer anything specific to your property or situation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/contact#quote-form" className="cta-primary text-xs px-4 py-2">
                  Ask a Question
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary text-xs px-4 py-2">
                  Call Now
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <div className="border-t border-brand-100 bg-surface px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
