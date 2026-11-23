import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/content/products";
import { ProductVisual } from "../ProductVisual";
import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal";
import type { Locale } from "@/config/site";
import type { Dict } from "@/content/ui";

/** Apple-style stacked sticky cards: each product pins and the next slides over it. */
export function ProductShowcase({ locale, t }: { locale: Locale; t: Dict["productsSection"] }) {
  return (
    <section id="products" className="relative bg-cloud py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="mt-16 space-y-8">
          {products.map((p, i) => (
            <article
              key={p.slug}
              className="rounded-5xl bg-white p-6 shadow-[0_30px_80px_-30px_rgba(11,15,58,0.35)] ring-1 ring-navy/5 sm:p-10 lg:sticky"
              style={{ top: `${88 + i * 18}px` }}
            >
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
                    {String(i + 1).padStart(2, "0")} · {p.category[locale]}
                  </p>
                  <h3 className="h-display mt-3 text-4xl text-navy sm:text-5xl">
                    <bdi>{p.name}</bdi>
                  </h3>
                  <p className="mt-3 text-xl font-medium text-navy/90">{p.tagline[locale]}</p>
                  <p className="mt-4 leading-relaxed text-slate">{p.summary[locale]}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f.t.en} className="rounded-full bg-cloud px-3 py-1.5 text-xs font-medium text-navy">
                        {f.t[locale]}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/${locale}/products/${p.slug}/`} className="btn-navy">
                      {t.learnMore}<span className="sr-only"> — {p.name}</span> <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
                    </Link>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener" className="btn-ghost text-navy">
                        {t.visit} <ArrowUpRight className="flip-rtl h-4 w-4" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
                <ProductVisual kind={p.visual} className="h-72 sm:h-96" />
              </div>
            </article>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link href={`/${locale}/products/`} className="btn-ghost text-navy">
            {t.viewAll} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
