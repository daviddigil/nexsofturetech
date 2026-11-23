"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Languages, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import type { Locale } from "@/config/site";
import type { Dict } from "@/content/ui";

export function Header({ locale, t }: { locale: Locale; t: Dict["nav"] }) {
  const pathname = usePathname() || `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const base = `/${locale}`;
  const links = [
    { href: `${base}/automate-uae/`, label: t.automate, hot: true },
    { href: `${base}/products/`, label: t.products },
    { href: `${base}/services/`, label: t.services },
    { href: `${base}/about/`, label: t.about },
    { href: `${base}/insights/`, label: t.insights },
    { href: `${base}/contact/`, label: t.contact },
  ];
  const other = locale === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  const isActive = (h: string) => pathname.startsWith(h);
  // Every page opens with a dark hero → light header text until the user scrolls.
  const onDark = !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-(--ease-apple) ${
          scrolled || open ? "border-b border-black/5 bg-white/75 backdrop-blur-2xl backdrop-saturate-150" : "bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
          <Link href={`${base}/`} className="shrink-0">
            <Logo dark={onDark} />
          </Link>

          <ul className="hidden items-center lg:flex xl:gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors ${
                    onDark
                      ? isActive(l.href) ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                      : isActive(l.href) ? "bg-navy/5 text-navy" : "text-navy/70 hover:text-navy"
                  }`}
                >
                  {"hot" in l && l.hot && <span className="me-1.5 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-volt animate-pulse-soft" aria-hidden />}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href={switchHref}
              hrefLang={other}
              lang={other}
              className={`hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium sm:inline-flex ${onDark ? "text-white/70 hover:text-white" : "text-navy/70 hover:text-navy"}`}
            >
              <Languages className="h-4 w-4" aria-hidden />
              {t.switchLang}
            </Link>
            <Link href={`${base}/contact/`} className={`hidden !py-2.5 sm:inline-flex ${onDark ? "btn-volt" : "btn-navy"}`}>
              {t.cta}
              <ArrowUpRight className="flip-rtl h-4 w-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${onDark ? "text-white hover:bg-white/10" : "text-navy hover:bg-navy/5"}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.close : t.menu}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pt-6">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link href={l.href} className="block border-b border-navy/5 py-4 font-display text-3xl font-bold text-navy">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-8 flex flex-col gap-3 pb-10">
              <Link href={`${base}/contact/`} className="btn-volt w-full !py-4 text-base">
                {t.cta}
              </Link>
              <Link href={switchHref} hrefLang={other} lang={other} className="btn-ghost w-full !py-4 text-base text-navy">
                <Languages className="h-4 w-4" aria-hidden /> {t.switchLang}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
