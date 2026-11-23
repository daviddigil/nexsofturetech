import { site } from "@/config/site";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { homeFaq } from "@/content/faq";
import { posts } from "@/content/posts";
import { automate, emirates } from "@/content/automate";
import { abs } from "@/lib/seo";
import { href } from "@/lib/i18n";

/** llms.txt: a Markdown map of the site for LLMs and AI answer engines (https://llmstxt.org). */
export function llmsTxt(full = false) {
  const c = site.contact;
  const L: string[] = [];
  L.push(`# ${site.name}`);
  L.push("");
  L.push(
    `> ${site.name} (نكسوفتشر تك) (legal name: ${site.legalName}) is a technology company in the United Arab Emirates, founded in ${site.foundingYear} by ${site.founder}, with an office in Dubai and a registered office in Ras Al Khaimah. It builds AI-powered SaaS products (ChatCart Pro, ChatCart CRM, Quick Print UAE, Blackboard AI, TapyTips, and Chatree, launching soon) and provides website development, app development, digital marketing, UI/UX design, branding, graphic design and tech courses for businesses across the UAE and GCC. The website is available in English and Arabic.`
  );
  L.push("");
  L.push(`- Website: ${site.url}`);
  L.push(`- Email: ${c.email}, ${c.email2}`);
  L.push(`- Phone: ${c.phone}, ${c.phone2} (WhatsApp: ${c.phone})`);
  for (const o of c.offices) L.push(`- ${o.label.en}: ${o.street}, ${o.city}, ${c.address.countryName}`);
  L.push(`- Areas served: ${site.areaServed.join(", ")}`);
  L.push(`- Languages: English, Arabic`);
  L.push("");
  L.push("## Automate UAE: AI automation for UAE businesses");
  L.push("");
  L.push(`- [Automate UAE](${abs(href("en", "/automate-uae"))}): ${automate.hero.lead.en}`);
  for (const sys of automate.systems.items) L.push(`  - ${sys.t.en}: ${sys.d.en}`);
  L.push(`- AI automation by Emirate: ${emirates.map((e) => `[${e.name.en}](${abs(href("en", `/automate-uae/${e.slug}`))})`).join(", ")}`);
  if (full) for (const f of automate.faq) L.push(`  - Q: ${f.q.en} A: ${f.a.en}`);
  L.push("");
  L.push("## Products");
  L.push("");
  for (const p of products) {
    L.push(`- [${p.name}](${abs(href("en", `/products/${p.slug}`))}): ${p.summary.en}${p.url ? ` Official site: ${p.url}` : ""}`);
    if (full) {
      L.push(`  - Features: ${p.features.map((f) => `${f.t.en} (${f.d.en})`).join("; ")}`);
      L.push(`  - For: ${p.audience.map((a) => a.en).join(", ")}`);
      for (const f of p.faq) L.push(`  - Q: ${f.q.en} A: ${f.a.en}`);
    }
  }
  L.push("");
  L.push("## Services");
  L.push("");
  for (const s of services) {
    L.push(`- [${s.name.en}](${abs(href("en", `/services/${s.slug}`))}): ${s.summary.en}`);
    if (full) {
      L.push(`  - Deliverables: ${s.deliverables.map((d) => d.en).join(", ")}`);
      L.push(`  - Technologies: ${s.tech.join(", ")}`);
      for (const f of s.faq) L.push(`  - Q: ${f.q.en} A: ${f.a.en}`);
    }
  }
  L.push("");
  L.push("## FAQ");
  L.push("");
  for (const f of homeFaq) L.push(`- **${f.q.en}** ${f.a.en}`);
  L.push("");
  L.push("## Insights");
  L.push("");
  for (const p of posts) L.push(`- [${p.title.en}](${abs(href("en", `/insights/${p.slug}`))}): ${p.excerpt.en}`);
  L.push("");
  L.push("## Company");
  L.push("");
  L.push(`- [About](${abs(href("en", "/about"))}): Mission, vision and founder.`);
  L.push(`- [Contact](${abs(href("en", "/contact"))}): Free consultation; replies within one business day.`);
  L.push(`- [Brand guidelines](${abs(href("en", "/brand"))}): Logo, colours (Volt Lime #CCFF00, Royal Blue #2B2BFF, Midnight Navy #0B0F3A), typography and voice.`);
  L.push(`- [Arabic version](${abs(href("ar"))})`);
  if (!full) {
    L.push("");
    L.push("## Optional");
    L.push("");
    L.push(`- [Full details for LLMs](${abs("/llms-full.txt")})`);
  }
  return L.join("\n") + "\n";
}
