import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { locales, type Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { services, getService } from "@/content/services";
import { pageMeta, breadcrumbLd, faqLd, serviceLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => services.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const l = lang as Locale;
  const where = l === "ar" ? "في دبي والإمارات" : "in Dubai & the UAE";
  return pageMeta({ locale: l, path: `/services/${s.slug}`, title: `${s.name[l]} ${where}`, description: s.summary[l], keywords: s.keywords });
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { lang: raw, slug } = await params;
  const lang = raw as Locale;
  const s = getService(slug);
  if (!s) notFound();
  const d = getDict(lang);
  const faq = s.faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }));
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceLd(s, lang),
          faqLd(faq),
          breadcrumbLd([
            { name: d.common.home, url: abs(href(lang)) },
            { name: d.nav.services, url: abs(href(lang, "/services")) },
            { name: s.name[lang], url: abs(href(lang, `/services/${s.slug}`)) },
          ]),
        ]}
      />
      <PageHero
        crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.services, href: href(lang, "/services") }, { name: s.name[lang] }]}
        eyebrow={d.servicesSection.eyebrow}
        title={s.name[lang]}
        lead={s.summary[lang]}
      >
        <div className="mt-8">
          <Link href={href(lang, "/contact")} className="btn-volt">{d.common.getQuote}</Link>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-volt text-navy">
              <ServiceIcon kind={s.icon} className="h-8 w-8" aria-hidden />
            </span>
            <p className="mt-8 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">{s.tagline[lang]}</p>
            <p className="mt-6 text-lg leading-relaxed text-slate">{s.description[lang]}</p>
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-royal">{d.common.tech}</h2>
            <ul className="mt-4 flex flex-wrap gap-2" dir="ltr">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full border border-navy/10 px-3 py-1.5 text-sm text-navy">{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-5xl bg-ink p-8 text-white sm:p-12">
            <h2 className="font-display text-2xl font-bold text-volt">{d.common.deliverables}</h2>
            <ul className="mt-8 space-y-5">
              {s.deliverables.map((x) => (
                <li key={x.en} className="flex items-start gap-4 border-b border-white/10 pb-5 text-lg last:border-0">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt text-navy"><Check className="h-3.5 w-3.5" aria-hidden /></span>
                  {x[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process t={d.process} />
      <Faq eyebrow={d.faq.eyebrow} title={d.common.faq} items={faq} bg="bg-white" />

      <section className="bg-cloud py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-navy">{d.common.related}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={href(lang, `/services/${o.slug}`)} className="card card-hover ring-1 ring-navy/5">
                <ServiceIcon kind={o.icon} className="h-6 w-6 text-royal" aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-bold text-navy">{o.name[lang]}</h3>
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
