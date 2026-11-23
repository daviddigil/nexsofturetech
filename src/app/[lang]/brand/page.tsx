import type { Metadata } from "next";
import { Download } from "lucide-react";
import type { Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Logo, LogoMark } from "@/components/Logo";

const palette = [
  { name: "Volt Lime", hex: "#CCFF00", rgb: "204 255 0", role: { en: "Primary accent · CTAs · highlights", ar: "اللون المميز · أزرار الإجراء · الإبرازات" }, text: "text-navy" },
  { name: "Royal Blue", hex: "#2B2BFF", rgb: "43 43 255", role: { en: "Logo glass · links · focus", ar: "زجاج الشعار · الروابط · التركيز" }, text: "text-white" },
  { name: "Electric Blue", hex: "#3D5AFE", rgb: "61 90 254", role: { en: "Gradients · illustrations", ar: "التدرجات · الرسوم" }, text: "text-white" },
  { name: "Midnight Navy", hex: "#0B0F3A", rgb: "11 15 58", role: { en: "Wordmark · headings · body text", ar: "الشعار النصي · العناوين · النصوص" }, text: "text-white" },
  { name: "Ink", hex: "#05061A", rgb: "5 6 26", role: { en: "Dark sections · footer", ar: "الأقسام الداكنة · التذييل" }, text: "text-white" },
  { name: "Cloud", hex: "#F5F5F7", rgb: "245 245 247", role: { en: "Light surfaces (Apple-style)", ar: "الأسطح الفاتحة" }, text: "text-navy" },
];

const c = {
  en: {
    title: "Nexsofture brand guidelines",
    lead: "The essentials for using the Nexsofture Tech identity consistently across web, app, print and social. Bold lime energy, deep-blue confidence and glass-like depth.",
    logo: "Logo",
    logoRules: ["Keep clear space equal to half the mark's width on all sides.", "Use the lime-on-navy or navy-on-lime versions; on photos, use the mark alone.", "Minimum size: 24 px for the mark, 120 px for the full lockup.", "Never stretch, rotate, recolour, outline or add effects to the logo."],
    colour: "Colour",
    colourLead: "Lime is the spark. Use it for no more than about 10–20% of any layout. Navy and white do the heavy lifting.",
    type: "Typography",
    typeRows: [
      { f: "Saira (Bold / ExtraBold)", u: "Display headings, wordmark-style titles" },
      { f: "Inter", u: "Body copy, UI, captions" },
      { f: "IBM Plex Sans Arabic", u: "All Arabic text" },
    ],
    voice: "Voice",
    voiceItems: [
      { t: "Confident", d: "We say what we build, plainly. No hype words." },
      { t: "Clear", d: "Short sentences. Answer first, details second." },
      { t: "Future-focused", d: "Optimistic about technology, practical about results." },
      { t: "Bilingual by default", d: "Arabic is never an afterthought." },
    ],
    style: "Visual style",
    styleItems: ["Apple-inspired minimalism: big type, generous white space", "Frosted glass surfaces & soft depth", "24–40 px rounded corners, 8-pt spacing grid", "Subtle motion: reveal on scroll, nothing gratuitous"],
    downloads: "Downloads",
    mockup: "Brand identity applied across stationery, devices and merchandise",
  },
  ar: {
    title: "دليل هوية نكسوفتشر",
    lead: "الأساسيات لاستخدام هوية نكسوفتشر تك بشكل متسق عبر الويب والتطبيقات والمطبوعات ووسائل التواصل: طاقة الليموني الجريئة، وثقة الأزرق العميق، وعمق يشبه الزجاج.",
    logo: "الشعار",
    logoRules: ["اترك مساحة فارغة تساوي نصف عرض الرمز من جميع الجهات.", "استخدم نسخة الليموني على الكحلي أو الكحلي على الليموني؛ وعلى الصور استخدم الرمز وحده.", "الحد الأدنى للحجم: 24 بكسل للرمز و120 بكسل للشعار الكامل.", "لا تمدد الشعار أو تدوّره أو تغيّر ألوانه أو تضف إليه مؤثرات."],
    colour: "الألوان",
    colourLead: "الليموني هو الشرارة. لا تتجاوز به 10–20% من أي تصميم، ودع الكحلي والأبيض يقومان بالعمل الأساسي.",
    type: "الخطوط",
    typeRows: [
      { f: "Saira (Bold / ExtraBold)", u: "العناوين الكبيرة" },
      { f: "Inter", u: "النصوص والواجهات" },
      { f: "IBM Plex Sans Arabic", u: "جميع النصوص العربية" },
    ],
    voice: "نبرة الصوت",
    voiceItems: [
      { t: "واثقة", d: "نقول ما نبنيه بوضوح، دون مبالغة." },
      { t: "واضحة", d: "جمل قصيرة. الإجابة أولاً ثم التفاصيل." },
      { t: "متطلعة للمستقبل", d: "متفائلة بالتقنية، وعملية في النتائج." },
      { t: "ثنائية اللغة دائماً", d: "العربية ليست إضافة لاحقة أبداً." },
    ],
    style: "الأسلوب البصري",
    styleItems: ["بساطة مستوحاة من Apple: خطوط كبيرة ومساحات واسعة", "أسطح زجاجية ضبابية وعمق ناعم", "زوايا دائرية 24–40 بكسل وشبكة مسافات 8 نقاط", "حركة هادئة: ظهور عند التمرير دون مبالغة"],
    downloads: "التحميلات",
    mockup: "الهوية مطبقة على القرطاسية والأجهزة والمنتجات",
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/brand">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  return pageMeta({ locale: lang, path: "/brand", title: c[lang].title, description: c[lang].lead });
}

export default async function Brand({ params }: PageProps<"/[lang]/brand">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  const t = c[lang];
  const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="h-display text-[clamp(2rem,5vw,3.25rem)] text-navy">{children}</h2>;
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: d.common.home, url: abs(href(lang)) }, { name: d.nav.brand, url: abs(href(lang, "/brand")) }])} />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.brand }]} eyebrow={d.nav.brand} title={t.title} lead={t.lead} />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <H2>{t.logo}</H2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="flex aspect-[4/3] items-center justify-center rounded-4xl bg-volt"><Logo className="scale-150" /></div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-4xl bg-navy"><Logo dark className="scale-150" /></div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-4xl bg-cloud"><LogoMark className="h-28 w-28" /></div>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.logoRules.map((r, i) => (
              <li key={r} className="flex gap-4 rounded-3xl bg-cloud p-5 text-navy">
                <span className="font-display font-bold text-royal">{String(i + 1).padStart(2, "0")}</span>{r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <H2>{t.colour}</H2>
          <p className="mt-4 max-w-2xl text-lg text-slate">{t.colourLead}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((p, i) => (
              <Reveal as="li" key={p.hex} delay={i * 0.05} className="overflow-hidden rounded-4xl bg-white ring-1 ring-navy/5">
                <div className={`flex h-40 items-end p-6 ${p.text}`} style={{ background: p.hex }}>
                  <span className="font-display text-2xl font-bold">{p.name}</span>
                </div>
                <div className="space-y-1 p-6 text-sm" dir="ltr">
                  <p className="font-mono text-navy">HEX {p.hex}</p>
                  <p className="font-mono text-slate">RGB {p.rgb}</p>
                  <p className="pt-2 text-slate" dir="auto">{p.role[lang]}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <H2>{t.type}</H2>
            <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
              {t.typeRows.map((r, i) => (
                <li key={r.f} className="py-6">
                  <p className={`text-4xl text-navy ${i === 0 ? "font-display font-extrabold" : i === 2 ? "font-[family-name:var(--font-plex-arabic)]" : "font-sans font-medium"}`}>
                    {i === 2 ? "نكسوفتشر تك" : "Aa Bb 123"}
                  </p>
                  <p className="mt-2 font-semibold text-navy" dir="ltr">{r.f}</p>
                  <p className="text-sm text-slate">{r.u}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <H2>{t.voice}</H2>
            <ul className="mt-10 grid gap-4">
              {t.voiceItems.map((v) => (
                <li key={v.t} className="rounded-3xl bg-cloud p-6">
                  <p className="font-display text-xl font-bold text-navy">{v.t}</p>
                  <p className="mt-1 text-slate">{v.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-x">
          <h2 className="h-display text-[clamp(2rem,5vw,3.25rem)]">{t.style}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.styleItems.map((s) => (
              <li key={s} className="glass rounded-3xl p-5 text-white/80">{s}</li>
            ))}
          </ul>
          <figure className="mt-12 overflow-hidden rounded-4xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/brand-identity-mockup.webp" alt={t.mockup} width={1024} height={572} loading="lazy" className="w-full" />
            <figcaption className="mt-3 text-sm text-white/50">{t.mockup}</figcaption>
          </figure>
          <h2 className="mt-16 font-display text-2xl font-bold text-volt">{t.downloads}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { f: "/brand/nexsofture-mark.svg", l: "Mark (SVG)" },
              { f: "/brand/nexsofture-app-icon.svg", l: "App icon (SVG)" },
              { f: "/brand/nexsofture-logo-lime.jpg", l: "Logo lockup (JPG)" },
            ].map((x) => (
              <a key={x.f} href={x.f} download className="btn-ghost text-white">
                <Download className="h-4 w-4" aria-hidden /> {x.l}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
