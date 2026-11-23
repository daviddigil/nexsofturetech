import type { Metadata } from "next";
import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { getDict } from "@/content/ui";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { Why } from "@/components/sections/Why";
import { Stats } from "@/components/sections/Stats";
import { CtaBand } from "@/components/sections/CtaBand";

const c = {
  en: {
    title: "We build the next future of software, from the UAE.",
    lead: "Nexsofture Tech is a Dubai-based product and engineering studio founded by David Digil. We create AI-powered SaaS products and partner with businesses to design, build and grow digital experiences.",
    name: "Why “Nexsofture”?",
    nameBody: "Next + Software + Future. Our name is our mission: to build the next generation of software for the businesses shaping the region's future. The four triangles of our mark represent our four pillars, Products, Engineering, Design and Growth, coming together to form an X: the point where ideas meet execution.",
    mission: "Mission",
    missionBody: "Make world-class AI and software accessible to every business in the UAE, from a café to an enterprise.",
    vision: "Vision",
    visionBody: "To be the UAE's most trusted home-grown AI product company, exporting technology built in the Emirates to the world.",
    founder: "Founder",
    founderBody: "David Digil founded Nexsofture Tech to combine product thinking with hands-on engineering. Under his leadership the company builds and runs its own platforms, including ChatCart Pro, ChatCart CRM, Quick Print UAE, Blackboard AI and TapyTips, while delivering projects for clients.",
    values: ["Customer obsessed", "Design is how it works", "Ship fast, learn faster", "AI with responsibility", "Built in the UAE, for the world"],
  },
  ar: {
    title: "نبني المستقبل القادم للبرمجيات، من الإمارات.",
    lead: "نكسوفتشر تك استوديو منتجات وهندسة برمجيات مقره دبي، أسسه ديفيد ديجيل. نصنع منتجات SaaS مدعومة بالذكاء الاصطناعي ونتشارك مع الشركات لتصميم تجاربها الرقمية وبنائها وتنميتها.",
    name: "لماذا «نكسوفتشر»؟",
    nameBody: "Next + Software + Future: التالي + البرمجيات + المستقبل. اسمنا هو مهمتنا: بناء الجيل التالي من البرمجيات للشركات التي تصنع مستقبل المنطقة. تمثل المثلثات الأربعة في شعارنا ركائزنا الأربع، المنتجات والهندسة والتصميم والنمو، تلتقي لتشكّل حرف X: النقطة التي تلتقي فيها الأفكار بالتنفيذ.",
    mission: "المهمة",
    missionBody: "إتاحة الذكاء الاصطناعي والبرمجيات بمستوى عالمي لكل شركة في الإمارات، من المقهى إلى المؤسسة الكبرى.",
    vision: "الرؤية",
    visionBody: "أن نكون شركة منتجات الذكاء الاصطناعي المحلية الأكثر ثقة في الإمارات، ونصدّر تقنية صُنعت في الإمارات إلى العالم.",
    founder: "المؤسس",
    founderBody: "أسس ديفيد ديجيل نكسوفتشر تك ليجمع بين التفكير في المنتجات والهندسة العملية. تحت قيادته تبني الشركة منصاتها الخاصة وتشغّلها، ومنها تشات كارت برو وتشات كارت CRM وكويك برنت الإمارات وبلاك بورد AI وتابي تيبس، إلى جانب تنفيذ مشاريع العملاء.",
    values: ["العميل أولاً", "التصميم هو طريقة العمل", "أطلق بسرعة وتعلّم أسرع", "ذكاء اصطناعي بمسؤولية", "صُنع في الإمارات للعالم"],
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMeta({ locale: lang, path: "/about", title: lang === "ar" ? "من نحن" : "About Nexsofture Tech", description: c[lang].lead });
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  const t = c[lang];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: d.common.home, url: abs(href(lang)) }, { name: d.nav.about, url: abs(href(lang, "/about")) }]),
          { "@context": "https://schema.org", "@type": "AboutPage", url: abs(href(lang, "/about")), about: { "@id": `${site.url}/#organization` } },
          { "@context": "https://schema.org", "@type": "Person", name: site.founder, jobTitle: "Founder & CEO", worksFor: { "@id": `${site.url}/#organization` } },
        ]}
      />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.about }]} eyebrow={d.nav.about} title={t.title} lead={t.lead} />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-volt blur-3xl opacity-60" />
            <LogoMark className="relative h-full w-full" title="Nexsofture Tech mark" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display text-[clamp(2rem,5vw,3.5rem)] text-navy">{t.name}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">{t.nameBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            { h: t.mission, p: t.missionBody, cls: "bg-navy text-white" },
            { h: t.vision, p: t.visionBody, cls: "bg-volt text-navy" },
            { h: t.founder, p: t.founderBody, cls: "bg-white text-navy" },
          ].map((b, i) => (
            <Reveal key={b.h} delay={i * 0.08} className={`rounded-4xl p-8 ${b.cls}`}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] opacity-70">{b.h}</h2>
              <p className="mt-4 text-xl font-medium leading-snug">{b.p}</p>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-14">
          <ul className="flex flex-wrap gap-3">
            {t.values.map((v) => (
              <li key={v} className="rounded-full bg-white px-5 py-3 font-display text-lg font-semibold text-navy ring-1 ring-navy/5">{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <Stats items={d.stats} />
      <Why t={d.why} industries={d.industries} />
      <CtaBand locale={lang} t={d.cta} />
    </>
  );
}
