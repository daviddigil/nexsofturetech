import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site, locales, type Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { posts, getPost } from "@/content/posts";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/insights/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const l = lang as Locale;
  return pageMeta({ locale: l, path: `/insights/${p.slug}`, title: p.title[l], description: p.excerpt[l], type: "article" });
}

export default async function PostPage({ params }: PageProps<"/[lang]/insights/[slug]">) {
  const { lang: raw, slug } = await params;
  const lang = raw as Locale;
  const p = getPost(slug);
  if (!p) notFound();
  const d = getDict(lang);
  const fmt = new Intl.DateTimeFormat(lang === "ar" ? "ar-AE" : "en-AE", { dateStyle: "long" });
  const url = abs(href(lang, `/insights/${p.slug}`));
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title[lang],
            description: p.excerpt[lang],
            datePublished: p.date,
            dateModified: p.date,
            inLanguage: lang === "ar" ? "ar-AE" : "en-AE",
            mainEntityOfPage: url,
            author: { "@type": "Person", name: site.founder },
            publisher: { "@id": `${site.url}/#organization` },
            image: abs("/og/og-default.png"),
          },
          breadcrumbLd([
            { name: d.common.home, url: abs(href(lang)) },
            { name: d.nav.insights, url: abs(href(lang, "/insights")) },
            { name: p.title[lang], url },
          ]),
        ]}
      />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.insights, href: href(lang, "/insights") }, { name: p.tag[lang] }]} eyebrow={p.tag[lang]} title={p.title[lang]} lead={p.excerpt[lang]}>
        <p className="mt-6 text-sm text-white/50">
          {site.founder} · <time dateTime={p.date}>{fmt.format(new Date(p.date))}</time> · {p.readMin} {d.common.minRead}
        </p>
      </PageHero>
      <article className="bg-white py-16 sm:py-24">
        <div className="prose-nx container-x max-w-3xl text-lg">
          {p.sections.map((s) => (
            <section key={s.h.en}>
              <h2>{s.h[lang]}</h2>
              {s.p.map((para, i) => (
                <p key={i}>{para[lang]}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
