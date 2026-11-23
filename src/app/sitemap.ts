import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { posts } from "@/content/posts";
import { emirates } from "@/content/automate";
import { abs } from "@/lib/seo";
import { href } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Real content date (not "now" on every build) so crawlers trust <lastmod>. Update when content changes.
  const now = new Date("2026-11-23");
  const paths: { p: string; priority: number; freq: "weekly" | "monthly" | "yearly"; date?: Date }[] = [
    { p: "/", priority: 1, freq: "weekly" },
    { p: "/automate-uae", priority: 0.95, freq: "weekly" },
    ...emirates.map((e) => ({ p: `/automate-uae/${e.slug}`, priority: 0.85, freq: "monthly" as const })),
    { p: "/products", priority: 0.9, freq: "monthly" },
    ...products.map((x) => ({ p: `/products/${x.slug}`, priority: 0.9, freq: "monthly" as const })),
    { p: "/services", priority: 0.9, freq: "monthly" },
    ...services.map((x) => ({ p: `/services/${x.slug}`, priority: 0.8, freq: "monthly" as const })),
    { p: "/about", priority: 0.7, freq: "yearly" },
    { p: "/contact", priority: 0.7, freq: "yearly" },
    { p: "/insights", priority: 0.7, freq: "weekly" },
    ...posts.map((x) => ({ p: `/insights/${x.slug}`, priority: 0.6, freq: "yearly" as const, date: new Date(x.date) })),
    { p: "/brand", priority: 0.4, freq: "yearly" },
    { p: "/privacy", priority: 0.2, freq: "yearly" },
    { p: "/terms", priority: 0.2, freq: "yearly" },
  ];
  return paths.flatMap(({ p, priority, freq, date }) =>
    (["en", "ar"] as const).map((l) => ({
      url: abs(href(l, p)),
      lastModified: date ?? now,
      changeFrequency: freq,
      priority: l === "en" ? priority : Math.max(priority - 0.05, 0.1),
      alternates: { languages: { en: abs(href("en", p)), ar: abs(href("ar", p)), "x-default": abs(href("en", p)) } },
    }))
  );
}
