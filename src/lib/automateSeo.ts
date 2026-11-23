import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { automate as A, emirates, type Emirate } from "@/content/automate";
import { href } from "@/lib/i18n";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";

const orgId = `${site.url}/#organization`;

/** Meta title/description for the main page or an Emirate page. */
export function automateMetaText(l: Locale, e?: Emirate) {
  if (!e)
    return l === "ar"
      ? {
          title: "أتمتة الإمارات | شركة الأتمتة بالذكاء الاصطناعي في الإمارات",
          description: "أتمتة الأعمال بالذكاء الاصطناعي في دبي وأبوظبي والشارقة وجميع الإمارات: وكلاء ذكاء اصطناعي، وأتمتة سير العمل، ووكلاء صوتيون بالعربية، وأتمتة واتساب. احجز تقييماً مجانياً مع نكسوفتشر تك.",
        }
      : {
          title: "Automate UAE | AI Automation Company in the UAE",
          description: "AI business automation across Dubai, Abu Dhabi, Sharjah and all 7 Emirates: AI agents, workflow automation, Arabic voice agents and WhatsApp automation. Book a free automation audit with Nexsofture Tech.",
        };
  return l === "ar"
    ? {
        title: `الأتمتة بالذكاء الاصطناعي في ${e.name.ar} | أتمتة الأعمال`,
        description: `شركة أتمتة بالذكاء الاصطناعي في ${e.name.ar}: وكلاء ذكاء اصطناعي، وأتمتة سير العمل، ووكلاء صوتيون، وأتمتة واتساب لشركات ${e.name.ar}. تقييم مجاني من نكسوفتشر تك.`,
      }
    : {
        title: `AI Automation in ${e.name.en} | Business Automation Company`,
        description: `AI automation company serving ${e.name.en}: AI agents, workflow automation, voice agents and WhatsApp automation for ${e.name.en} businesses. Free audit from Nexsofture Tech.`,
      };
}

export function automateKeywords(e?: Emirate) {
  if (!e) return A.keywords;
  const n = e.name.en;
  return [`AI automation ${n}`, `business automation ${n}`, `automation company ${n}`, `workflow automation ${n}`, `AI agents ${n}`, `WhatsApp automation ${n}`, "AI automation UAE"];
}

export function automateLd(l: Locale, e?: Emirate) {
  const path = e ? `/automate-uae/${e.slug}` : "/automate-uae";
  const url = abs(href(l, path));
  const { title, description } = automateMetaText(l, e);
  const area = e
    ? { "@type": "State", name: e.name.en, containedInPlace: { "@type": "Country", name: "United Arab Emirates" } }
    : [{ "@type": "Country", name: "United Arab Emirates" }, ...emirates.map((x) => ({ "@type": "State", name: x.name.en }))];
  const crumbs = [
    { name: l === "ar" ? "الرئيسية" : "Home", url: abs(href(l)) },
    { name: l === "ar" ? "أتمتة الإمارات" : "Automate UAE", url: abs(href(l, "/automate-uae")) },
    ...(e ? [{ name: e.name[l], url }] : []),
  ];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: title.split(" | ")[0],
      alternateName: ["Automate UAE", "AI automation UAE", "أتمتة الإمارات"],
      serviceType: "AI business automation",
      description,
      url,
      provider: { "@id": orgId },
      areaServed: area,
      availableLanguage: ["English", "Arabic"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI automation systems",
        itemListElement: A.systems.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.t.en, description: s.d.en } })),
      },
      potentialAction: { "@type": "ReserveAction", name: "Book a free automation audit", target: abs(href(l, "/contact")) },
    },
    faqLd(A.faq.map((f) => ({ q: f.q[l], a: f.a[l] }))),
    breadcrumbLd(crumbs),
  ];
}
