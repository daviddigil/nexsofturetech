import { Plus } from "lucide-react";
import { SectionHead } from "./SectionHead";

/** Native <details> accordion: zero JS, fully crawlable, accessible. */
export function Faq({ eyebrow, title, items, bg = "bg-cloud" }: { eyebrow: string; title: string; items: { q: string; a: string }[]; bg?: string }) {
  return (
    <section className={`${bg} py-24 sm:py-32`}>
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {items.map((f) => (
            <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-start">
                <h3 className="font-display text-xl font-semibold text-navy">{f.q}</h3>
                <Plus className="mt-1 h-5 w-5 shrink-0 text-royal transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
