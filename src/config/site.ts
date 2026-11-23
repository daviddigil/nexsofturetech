/**
 * Single source of truth for brand + contact details.
 * These values feed the header, footer, contact page, JSON-LD structured data,
 * llms.txt and the PHP mailer. Edit here, then rebuild.
 */
export const site = {
  name: "Nexsofture Tech",
  legalName: "Nexsofture Tech FZ-LLC",
  domain: "nexsofture.tech",
  url: "https://nexsofture.tech",
  founder: "David Digil",
  foundingYear: "2026",
  contact: {
    email: "info@nexsofture.tech",
    email2: "nexsofturetech@gmail.com",
    phone: "+971 54 737 8597",
    phoneHref: "+971547378597",
    phone2: "+971 56 287 3257",
    phone2Href: "+971562873257",
    whatsapp: "971547378597", // WhatsApp button uses the first number
    /** Primary (customer-facing) office: used for local SEO + map. */
    address: {
      street: "Street 32, Al Nahda 2",
      city: "Dubai",
      region: "Dubai",
      country: "AE",
      countryName: "United Arab Emirates",
    },
    geo: { lat: 25.2896, lng: 55.3727 }, // approx. Al Nahda 2, Dubai (refine from Google Maps pin if needed)
    hours: "Mo-Fr 09:00-18:00",
    offices: [
      {
        label: { en: "Dubai office", ar: "مكتب دبي" },
        street: "Street 32, Al Nahda 2",
        city: "Dubai",
        region: "Dubai",
        geo: { lat: 25.2896, lng: 55.3727 },
      },
      {
        label: { en: "Registered office (RAKEZ free zone)", ar: "المكتب المسجّل (المنطقة الحرة برأس الخيمة)" },
        street: "CWFZ2495, Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ",
        city: "Ras Al Khaimah",
        region: "Ras Al Khaimah",
        geo: { lat: 25.6853, lng: 55.7808 }, // approx. Al Hamra Industrial Zone
      },
    ],
  },
  /** Social profiles: add URLs when ready; empty ones are hidden everywhere. */
  social: {
    linkedin: "",
    instagram: "",
    x: "",
    youtube: "",
  },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  /** Optional analytics — leave empty to disable. Plausible domain or GA4 id. */
  analytics: { plausibleDomain: "", ga4: "" },
  /** Search-engine verification tokens (paste from each console). */
  verification: { google: "", bing: "", yandex: "" },
} as const;

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (l: string): l is Locale => (locales as readonly string[]).includes(l);
export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
