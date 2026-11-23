import type { Metadata } from "next";
import { site, type Locale } from "@/config/site";
import { href } from "@/lib/i18n";
import type { Product } from "@/content/products";
import type { Service } from "@/content/services";

export const abs = (path: string) => `${site.url}${path}`;

/** Per-page metadata with canonical + hreflang alternates. `path` is locale-less, e.g. "/products/tapytips". */
export function pageMeta(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const { locale, path, title, description, keywords, type = "website" } = opts;
  const url = abs(href(locale, path));
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: abs(href("en", path)),
        ar: abs(href("ar", path)),
        "x-default": abs(href("en", path)),
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      alternateLocale: locale === "ar" ? ["en_AE"] : ["ar_AE"],
      images: [{ url: abs("/og/og-default.png"), width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [abs("/og/og-default.png")] },
  };
}

/* ───────── JSON-LD builders ───────── */

const orgId = `${site.url}/#organization`;

export function organizationLd(locale: Locale) {
  const c = site.contact;
  const sameAs = Object.values(site.social).filter(Boolean);
  return [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      alternateName: ["Nexsofture", "نكسوفتشر تك"],
      url: site.url,
      logo: abs("/brand/nexsofture-mark.svg"),
      image: abs("/brand/nexsofture-logo-lime.jpg"),
      description:
        locale === "ar"
          ? "نكسوفتشر تك شركة تقنية في دبي تبني منتجات الذكاء الاصطناعي وتقدم تطوير المواقع والتطبيقات والتسويق الرقمي والتصميم في الإمارات."
          : "Nexsofture Tech is a Dubai-based technology company building AI products and providing website development, app development, digital marketing, UI/UX design, branding, graphic design and courses in the UAE.",
      foundingDate: site.foundingYear,
      founder: { "@type": "Person", name: site.founder },
      email: c.email,
      telephone: [c.phone, c.phone2],
      address: c.offices.map((o) => ({
        "@type": "PostalAddress",
        name: o.label.en,
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: o.region,
        addressCountry: c.address.country,
      })),
      location: c.offices.map((o) => ({
        "@type": "Place",
        name: `${site.name}, ${o.label.en}`,
        geo: { "@type": "GeoCoordinates", latitude: o.geo.lat, longitude: o.geo.lng },
      })),
      geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
      openingHours: c.hours,
      areaServed: [{ "@type": "Country", name: "United Arab Emirates" }, ...site.areaServed.map((n) => ({ "@type": "City", name: n }))],
      knowsLanguage: ["en", "ar"],
      sameAs,
      contactPoint: [
        { "@type": "ContactPoint", contactType: "sales", telephone: c.phone, email: c.email, areaServed: "AE", availableLanguage: ["English", "Arabic"] },
        { "@type": "ContactPoint", contactType: "customer support", telephone: c.phone2, email: c.email2, areaServed: "AE", availableLanguage: ["English", "Arabic"] },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
      publisher: { "@id": orgId },
    },
  ];
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function productLd(p: Product, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: p.appCategory,
    operatingSystem: "Web, iOS, Android",
    description: p.summary[locale],
    url: p.url || abs(href(locale, `/products/${p.slug}`)),
    publisher: { "@id": orgId },
    areaServed: "AE",
    inLanguage: ["en", "ar"],
  };
}

export function serviceLd(s: Service, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name[locale],
    serviceType: s.name.en,
    description: s.summary[locale],
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: abs(href(locale, `/services/${s.slug}`)),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name[locale],
      itemListElement: s.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d[locale] } })),
    },
  };
}
