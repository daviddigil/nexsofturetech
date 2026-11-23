import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { services } from "@/content/services";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";

const copy = {
  en: { title: "Digital services for UAE businesses", lead: "Website development, app development, digital marketing, UI/UX design, branding, graphic design and tech courses: everything you need to launch and grow, delivered by one team in Dubai." },
  ar: { title: "خدمات رقمية لشركات الإمارات", lead: "تطوير المواقع والتطبيقات، والتسويق الرقمي، وتصميم الواجهات، والهوية التجارية، والتصميم الجرافيكي، والدورات التقنية: كل ما تحتاجه للانطلاق والنمو، من فريق واحد في دبي." },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMeta({ locale: lang, path: "/services", title: copy[lang].title, description: copy[lang].lead, keywords: services.map((s) => s.keywords[0]) });
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: d.common.home, url: abs(href(lang)) }, { name: d.nav.services, url: abs(href(lang, "/services")) }])} />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.services }]} eyebrow={d.servicesSection.eyebrow} title={copy[lang].title} lead={copy[lang].lead} />
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06} as="article">
              <Link href={href(lang, `/services/${s.slug}`)} className="card card-hover group flex h-full flex-col bg-cloud ring-1 ring-navy/5">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-volt transition-colors group-hover:bg-royal">
                    <ServiceIcon kind={s.icon} className="h-7 w-7" aria-hidden />
                  </span>
                  <ArrowUpRight className="flip-rtl h-5 w-5 text-navy/40 group-hover:text-royal" aria-hidden />
                </div>
                <h2 className="mt-8 font-display text-2xl font-bold text-navy">{s.name[lang]}</h2>
                <p className="mt-2 flex-1 text-slate">{s.tagline[lang]}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {s.tech.slice(0, 4).map((t) => (
                    <li key={t} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-navy/70">{t}</li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Process t={d.process} />
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
