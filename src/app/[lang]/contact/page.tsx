import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { site, type Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { pageMeta, breadcrumbLd, abs } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/Icons";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  return pageMeta({
    locale: lang,
    path: "/contact",
    title: lang === "ar" ? "تواصل مع نكسوفتشر تك في دبي" : "Contact Nexsofture Tech, Dubai, UAE",
    description: `${d.contact.lead} ${site.contact.email} · ${site.contact.phone} · Dubai & Ras Al Khaimah, UAE`,
  });
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const lang = (await params).lang as Locale;
  const d = getDict(lang);
  const t = d.contact;
  const interests = [...products.map((p) => p.name), ...services.map((s) => s.name[lang])];
  const c = site.contact;
  const items: { I: React.ComponentType<{ className?: string }>; label: string; values: { text: string; href?: string; ltr?: boolean }[] }[] = [
    { I: Mail, label: t.email, values: [c.email, c.email2].map((e) => ({ text: e, href: `mailto:${e}`, ltr: true })) },
    {
      I: Phone,
      label: t.phone,
      values: [
        { text: c.phone, href: `tel:${c.phoneHref}`, ltr: true },
        { text: c.phone2, href: `tel:${c.phone2Href}`, ltr: true },
      ],
    },
    { I: WhatsAppIcon, label: "WhatsApp", values: [{ text: c.phone, href: `https://wa.me/${c.whatsapp}`, ltr: true }] },
    ...c.offices.map((o) => ({ I: MapPin, label: o.label[lang], values: [{ text: `${o.street}, ${o.city}, ${c.address.countryName}` }] })),
    { I: Clock, label: lang === "ar" ? "ساعات العمل" : "Hours", values: [{ text: t.hours }] },
  ];
  const mapQ = encodeURIComponent(`${c.address.street}, ${c.address.city}, ${c.address.countryName}`);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: d.common.home, url: abs(href(lang)) }, { name: d.nav.contact, url: abs(href(lang, "/contact")) }]),
          { "@context": "https://schema.org", "@type": "ContactPage", url: abs(href(lang, "/contact")), about: { "@id": `${site.url}/#organization` } },
        ]}
      />
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: d.nav.contact }]} eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm t={t} interests={interests} locale={lang} />
          <aside className="flex flex-col gap-5">
            <div className="card ring-1 ring-navy/5">
              <h2 className="font-display text-xl font-bold text-navy">{t.reach}</h2>
              <ul className="mt-6 space-y-5">
                {items.map(({ I, label, values }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-volt text-navy">
                      <I className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate">{label}</p>
                      {values.map((v) =>
                        v.href ? (
                          <a key={v.text} href={v.href} className="block font-medium text-navy hover:text-royal" dir={v.ltr ? "ltr" : undefined} target={v.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                            {v.text}
                          </a>
                        ) : (
                          <p key={v.text} className="font-medium text-navy">{v.text}</p>
                        )
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-4xl ring-1 ring-navy/5">
              <iframe
                title={lang === "ar" ? "موقعنا على الخريطة" : "Our location on the map"}
                src={`https://www.google.com/maps?q=${mapQ}&z=12&output=embed`}
                className="h-64 w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
