import type { Locale } from "@/config/site";

/** A localized string. */
export type L = { en: string; ar: string };
export type LList = { en: string[]; ar: string[] };

export const tr = (v: L, locale: Locale) => v[locale];

/** Build a locale-prefixed internal href. */
export const href = (locale: Locale, path = "/") => {
  const clean = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return `/${locale}/${clean ? clean + "/" : ""}`;
};

export const otherLocale = (l: Locale): Locale => (l === "en" ? "ar" : "en");
