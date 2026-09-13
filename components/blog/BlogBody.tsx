import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Quote, Sparkles } from "lucide-react";
import type { BlogBlock, BlogImage, BlogText } from "@/lib/blog-types";

function InlineText({ text }: { text: BlogText }) {
  return text.map((part, index) => {
    if (typeof part === "string") return part;
    const internal = (part.href.startsWith("/") && !part.href.startsWith("//")) || part.href.startsWith("#");
    if (!internal && !/^https?:\/\//.test(part.href)) throw new Error(`Unsupported article link: ${part.href}`);
    return internal ? <Link key={index} href={part.href} className="text-brand-600">{part.text}</Link>
      : <a key={index} href={part.href} className="text-brand-600" rel="noopener noreferrer">{part.text}</a>;
  });
}

export function ArticleImage({ image, priority = false }: { image: BlogImage; priority?: boolean }) {
  const portrait = image.height > image.width;
  return (
    <figure className={portrait ? "mx-auto max-w-sm" : undefined}>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority}
        sizes={portrait ? "(min-width: 1024px) 24rem, 60vw" : "(min-width: 1024px) 760px, 100vw"} className="h-auto w-full rounded-2xl" />
      {image.caption ? <figcaption className="mt-3 text-sm leading-relaxed text-muted">{image.caption}</figcaption> : null}
    </figure>
  );
}

export function BlogBody({ content }: { content: readonly BlogBlock[] }) {
  return content.map((block, index) => {
    switch (block.type) {
      case "paragraph": return <p key={index}><InlineText text={block.text} /></p>;
      case "heading": {
        const Heading = block.level === 2 ? "h2" : "h3";
        return <Heading key={block.id} id={block.id}>{block.text}</Heading>;
      }
      case "list": {
        const List = block.ordered ? "ol" : "ul";
        return <List key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item} /></li>)}</List>;
      }
      case "image": return <ArticleImage key={index} image={block.image} />;
      case "quote": return (
        <blockquote key={index} className="relative overflow-hidden rounded-2xl border border-brand-100 bg-surface pl-8 pr-6 py-6">
          <Quote className="absolute left-3 top-5 h-6 w-6 text-brand-200" aria-hidden fill="currentColor" strokeWidth={0} />
          <p className="relative italic text-ink"><InlineText text={block.text} /></p>
          {block.attribution ? <p className="relative mt-2 text-sm font-medium text-muted">{block.attribution}</p> : null}
        </blockquote>
      );
      case "callout": return (
        <aside key={index} className="relative overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-600/5 via-white to-accent/10 p-5 sm:p-7">
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <div>
              {block.title ? <p className="mb-2 text-lg font-semibold text-ink">{block.title}</p> : null}
              <p><InlineText text={block.text} /></p>
            </div>
          </div>
        </aside>
      );
      case "table": return (
        <div key={index} role="region" aria-label={block.caption} tabIndex={0} className="max-w-full overflow-x-auto overflow-y-hidden rounded-2xl border border-brand-100 shadow-card">
          <table>
            <caption className="bg-white px-4 pt-4">{block.caption}</caption>
            <thead className="bg-brand-600"><tr>{block.columns.map((column, columnIndex) => <th key={columnIndex} scope="col" className="text-xs font-semibold uppercase tracking-wide text-white">{column}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-brand-100 even:bg-surface">{row.map((cell, cellIndex) => <td key={cellIndex}><InlineText text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      case "faq": return (
        <section key={index} aria-label={block.title}>
          <h2>{block.title}</h2>
          <div className="mt-5 space-y-3">
            {block.items.map(item => (
              <details key={item.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-white open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-ink transition-colors hover:text-brand-700">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <div className="border-t border-brand-100 bg-surface px-5 py-4"><p><InlineText text={item.answer} /></p></div>
              </details>
            ))}
          </div>
        </section>
      );
    }
  });
}
