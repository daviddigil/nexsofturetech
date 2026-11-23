import type { Metadata } from "next";
import type { Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { homeFaq } from "@/content/faq";
import { pageMeta, faqLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Why } from "@/components/sections/Why";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { AutomateTeaser } from "@/components/sections/AutomateTeaser";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const ar = lang === "ar";
  return {
    ...pageMeta({
      locale: lang,
      path: "/",
      title: ar ? "نكسوفتشر تك | منتجات الذكاء الاصطناعي وتطوير البرمجيات في الإمارات" : "Nexsofture Tech | AI Products & Software Development Company in the UAE",
      description: ar
        ? "شركة تقنية في دبي تبني وكلاء المحادثة والصوت بالذكاء الاصطناعي والتجارة الإلكترونية وأنظمة CRM، وتقدم تطوير المواقع والتطبيقات والتسويق الرقمي والتصميم في الإمارات."
        : "Dubai-based tech company building AI chat & voice agents, e-commerce, CRM, EdTech and tipping platforms, plus website & app development, digital marketing, UI/UX and branding across the UAE.",
      keywords: ["software company Dubai", "AI company UAE", "web development Dubai", "app development UAE", "AI chatbot UAE", "Nexsofture Tech"],
    }),
    title: { absolute: ar ? "نكسوفتشر تك | منتجات الذكاء الاصطناعي وتطوير البرمجيات في الإمارات" : "Nexsofture Tech | AI Products & Software Development Company in the UAE" },
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  const faq = homeFaq.map((f) => ({ q: f.q[lang], a: f.a[lang] }));
  return (
    <>
      <JsonLd data={faqLd(faq)} />
      <Hero locale={lang} t={d.hero} />
      <Marquee locale={lang} label={d.marquee} />
      <ProductShowcase locale={lang} t={d.productsSection} />
      <Stats items={d.stats} />
      <AutomateTeaser locale={lang} />
      <ServicesBento locale={lang} t={d.servicesSection} />
      <Process t={d.process} />
      <Why t={d.why} industries={d.industries} />
      <Faq eyebrow={d.faq.eyebrow} title={d.faq.title} items={faq} />
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
