import type { Metadata } from "next";
import type { Locale } from "@/config/site";
import { pageMeta } from "@/lib/seo";
import { automateLd, automateMetaText, automateKeywords } from "@/lib/automateSeo";
import { JsonLd } from "@/components/JsonLd";
import { AutomateLanding } from "@/components/automate/AutomateLanding";

export async function generateMetadata({ params }: PageProps<"/[lang]/automate-uae">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const m = automateMetaText(lang);
  return { ...pageMeta({ locale: lang, path: "/automate-uae", ...m, keywords: automateKeywords() }), title: { absolute: m.title } };
}

export default async function AutomateUAE({ params }: PageProps<"/[lang]/automate-uae">) {
  const lang = (await params).lang as Locale;
  return (
    <>
      <JsonLd data={automateLd(lang)} />
      <AutomateLanding locale={lang} />
    </>
  );
}
