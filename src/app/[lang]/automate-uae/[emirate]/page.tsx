import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/config/site";
import { emirates, getEmirate } from "@/content/automate";
import { pageMeta } from "@/lib/seo";
import { automateLd, automateMetaText, automateKeywords } from "@/lib/automateSeo";
import { JsonLd } from "@/components/JsonLd";
import { AutomateLanding } from "@/components/automate/AutomateLanding";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => emirates.map((e) => ({ lang, emirate: e.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/automate-uae/[emirate]">): Promise<Metadata> {
  const { lang, emirate } = await params;
  const e = getEmirate(emirate);
  if (!e) return {};
  const l = lang as Locale;
  const m = automateMetaText(l, e);
  return {
    ...pageMeta({ locale: l, path: `/automate-uae/${e.slug}`, ...m, keywords: automateKeywords(e) }),
    title: { absolute: m.title },
    other: { "geo.region": e.region, "geo.placename": e.name.en },
  };
}

export default async function EmiratePage({ params }: PageProps<"/[lang]/automate-uae/[emirate]">) {
  const { lang, emirate } = await params;
  const e = getEmirate(emirate);
  if (!e) notFound();
  const l = lang as Locale;
  return (
    <>
      <JsonLd data={automateLd(l, e)} />
      <AutomateLanding locale={l} emirate={e} />
    </>
  );
}
