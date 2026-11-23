import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { locales, type Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { products, getProduct } from "@/content/products";
import { pageMeta, breadcrumbLd, faqLd, productLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { SoonBadge } from "@/components/SoonBadge";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => products.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/products/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const l = lang as Locale;
  return pageMeta({ locale: l, path: `/products/${p.slug}`, title: `${p.name}: ${p.tagline[l]}`, description: p.summary[l], keywords: p.keywords });
}

export default async function ProductPage({ params }: PageProps<"/[lang]/products/[slug]">) {
  const { lang: raw, slug } = await params;
  const lang = raw as Locale;
  const p = getProduct(slug);
  if (!p) notFound();
  const d = getDict(lang);
  const faq = p.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }));
  const others = products.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          productLd(p, lang),
          faqLd(faq),
          breadcrumbLd([
            { name: d.common.home, url: abs(href(lang)) },
            { name: d.nav.products, url: abs(href(lang, "/products")) },
            { name: p.name, url: abs(href(lang, `/products/${p.slug}`)) },
          ]),
        ]}
      />
      <PageHero
        crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.products, href: href(lang, "/products") }, { name: p.name }]}
        eyebrow={p.category[lang]}
        title={p.name}
        lead={p.summary[lang]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {p.status === "soon" && <SoonBadge label={d.productsSection.soon} className="self-center" />}
          <Link href={href(lang, "/contact")} className="btn-volt">{p.status === "soon" ? d.productsSection.waitlist : d.common.getQuote}</Link>
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener" className="btn-ghost text-white">
              {d.productsSection.visit} <ArrowUpRight className="flip-rtl h-4 w-4" aria-hidden />
            </a>
          )}
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">{p.tagline[lang]}</p>
            <p className="mt-6 text-lg leading-relaxed text-slate">{p.description[lang]}</p>
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-royal">{d.common.useCases}</h2>
            <ul className="mt-4 space-y-3">
              {p.audience.map((a) => (
                <li key={a.en} className="flex items-center gap-3 text-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-volt"><Check className="h-3.5 w-3.5" aria-hidden /></span>
                  {a[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ProductVisual kind={p.visual} className="h-80 sm:h-[28rem]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <h2 className="h-display text-[clamp(2rem,5vw,3.5rem)] text-navy">{d.common.features}</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <Reveal as="li" key={f.t.en} delay={i * 0.05} className="card card-hover ring-1 ring-navy/5">
                <span className="font-display text-sm font-bold text-royal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy">{f.t[lang]}</h3>
                <p className="mt-2 leading-relaxed text-slate">{f.d[lang]}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Faq eyebrow={d.faq.eyebrow} title={d.common.faq} items={faq} bg="bg-white" />

      <section className="bg-cloud py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-navy">{d.common.related}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={href(lang, `/products/${o.slug}`)} className="card card-hover ring-1 ring-navy/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">{o.category[lang]}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy"><bdi>{o.name}</bdi></h3>
                <p className="mt-2 text-sm text-slate">{o.tagline[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
