import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { site, type Locale } from "@/config/site";
import type { Dict } from "@/content/ui";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { LinkedInIcon, InstagramIcon, XIcon, WhatsAppIcon } from "./Icons";

export function Footer({ locale, t, nav }: { locale: Locale; t: Dict["footer"]; nav: Dict["nav"] }) {
  const b = `/${locale}`;
  const year = new Date().getFullYear();
  const col = "text-sm text-white/60 transition-colors hover:text-volt";
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-royal/25 blur-[120px]" />
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">{t.tagline}</p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-volt">
                <Mail className="h-4 w-4" aria-hidden /> {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="flex flex-wrap gap-x-2" dir="ltr">
                <a href={`tel:${site.contact.phoneHref}`} className="hover:text-volt">{site.contact.phone}</a>
                <span aria-hidden>·</span>
                <a href={`tel:${site.contact.phone2Href}`} className="hover:text-volt">{site.contact.phone2}</a>
              </span>
            </li>
            {site.contact.offices.map((o) => (
              <li key={o.city} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  {o.street}, {o.city}, {site.contact.address.countryName}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2">
            {[
              { h: site.social.linkedin, I: LinkedInIcon, l: "LinkedIn" },
              { h: site.social.instagram, I: InstagramIcon, l: "Instagram" },
              { h: site.social.x, I: XIcon, l: "X" },
              { h: `https://wa.me/${site.contact.whatsapp}`, I: WhatsAppIcon, l: "WhatsApp" },
            ]
              .filter((s) => s.h)
              .map(({ h, I, l }) => (
                <a key={l} href={h} target="_blank" rel="noopener" aria-label={l} className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:bg-volt hover:text-navy">
                  <I className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>

        <nav className="md:col-span-3" aria-label={t.products}>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-volt">{t.products}</h2>
          <ul className="space-y-2.5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link className={col} href={`${b}/products/${p.slug}/`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-3" aria-label={t.services}>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-volt">{t.services}</h2>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link className={col} href={`${b}/services/${s.slug}/`}>{s.name[locale]}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-2" aria-label={t.company}>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-volt">{t.company}</h2>
          <ul className="space-y-2.5">
            <li><Link className={`${col} !text-volt`} href={`${b}/automate-uae/`}>{nav.automate}</Link></li>
            <li><Link className={col} href={`${b}/about/`}>{nav.about}</Link></li>
            <li><Link className={col} href={`${b}/insights/`}>{nav.insights}</Link></li>
            <li><Link className={col} href={`${b}/brand/`}>{nav.brand}</Link></li>
            <li><Link className={col} href={`${b}/contact/`}>{nav.contact}</Link></li>
            <li><Link className={col} href={`${b}/privacy/`}>{t.privacy}</Link></li>
            <li><Link className={col} href={`${b}/terms/`}>{t.terms}</Link></li>
          </ul>
        </nav>
      </div>

      <div className="container-x relative overflow-hidden">
        <p aria-hidden className="select-none whitespace-nowrap text-center font-display text-[17vw] font-extrabold leading-none tracking-tighter text-white/[0.04] md:text-[12.5rem]" style={{ fontFamily: "var(--font-saira)" }} dir="ltr">
          NEXSOFTURE
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} {site.legalName}. {t.rights}</p>
          <p>{t.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
