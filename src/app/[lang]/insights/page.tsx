import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { posts } from "@/content/posts";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const c = {
  en: { title: "Insights on AI, software & growth in the UAE", lead: "Practical guides from the Nexsofture team on AI agents, websites, apps, marketing and design for businesses in the Emirates." },
  ar: { title: "رؤى حول الذكاء الاصطناعي والبرمجيات والنمو في الإمارات", lead: "أدلة عملية من فريق نكسوفتشر حول وكلاء الذكاء الاصطناعي والمواقع والتطبيقات والتسويق والتصميم للشركات في الإمارات." },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/insights">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMeta({ locale: lang, path: "/insights", title: c[lang].title, description: c[lang].lead });
}

export default async function Insights({ params }: PageProps<"/[lang]/insights">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  const fmt = new Intl.DateTimeFormat(lang === "ar" ? "ar-AE" : "en-AE", { dateStyle: "medium" });
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: d.common.home, url: abs(href(lang)) }, { name: d.nav.insights, url: abs(href(lang, "/insights")) }])} />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.insights }]} eyebrow={d.nav.insights} title={c[lang].title} lead={c[lang].lead} />
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} as="article">
              <Link href={href(lang, `/insights/${p.slug}`)} className="card card-hover group flex h-full flex-col ring-1 ring-navy/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-volt px-3 py-1 font-semibold text-navy">{p.tag[lang]}</span>
                  <time dateTime={p.date} className="text-slate">{fmt.format(new Date(p.date))}</time>
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-navy">{p.title[lang]}</h2>
                <p className="mt-3 flex-1 text-slate">{p.excerpt[lang]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                  {d.common.readMore} · {p.readMin} {d.common.minRead}
                  <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
