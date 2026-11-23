import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { products } from "@/content/products";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { SoonBadge } from "@/components/SoonBadge";
import { CtaBand } from "@/components/sections/CtaBand";

const copy = {
  en: { title: "AI products built for UAE businesses", lead: "Nexsofture Tech builds and operates its own SaaS platforms: ChatCart Pro (AI chat, AI voice agent and Quick Store), ChatCart CRM, Quick Print UAE, Blackboard AI, TapyTips and Chatree (launching soon)." },
  ar: { title: "منتجات ذكاء اصطناعي مصممة لشركات الإمارات", lead: "تبني نكسوفتشر تك وتشغّل منصاتها الخاصة: تشات كارت برو (محادثة ذكية، وكيل صوتي، متجر سريع)، وتشات كارت CRM، وكويك برنت الإمارات، وبلاك بورد AI، وتابي تيبس، وتشات تري (قريباً)." },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMeta({ locale: lang, path: "/products", title: copy[lang].title, description: copy[lang].lead, keywords: products.flatMap((p) => p.keywords.slice(0, 1)) });
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: d.common.home, url: abs(href(lang)) },
            { name: d.nav.products, url: abs(href(lang, "/products")) },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: abs(href(lang, `/products/${p.slug}`)) })),
          },
        ]}
      />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.products }]} eyebrow={d.productsSection.eyebrow} title={copy[lang].title} lead={copy[lang].lead} />
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} as="article">
              <Link href={href(lang, `/products/${p.slug}`)} className="card card-hover group flex h-full flex-col ring-1 ring-navy/5">
                <ProductVisual kind={p.visual} className="h-64" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-royal">{p.category[lang]}</p>
                <h2 className="mt-2 flex flex-wrap items-center gap-3 font-display text-3xl font-bold text-navy"><bdi>{p.name}</bdi>{p.status === "soon" && <SoonBadge label={d.productsSection.soon} />}</h2>
                <p className="mt-2 flex-1 text-slate">{p.tagline[lang]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                  {d.productsSection.learnMore} <ArrowRight className="flip-rtl h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
