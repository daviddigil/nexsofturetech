import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { HeroVisual } from "../HeroVisual";
import type { Locale } from "@/config/site";
import type { Dict } from "@/content/ui";

export function Hero({ locale, t }: { locale: Locale; t: Dict["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 text-white sm:pt-32">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full bg-royal/30 blur-[140px]" />
      <div className="absolute -bottom-40 right-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-volt/15 blur-[120px]" />

      <div className="container-x grid items-center gap-10 pb-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div className="relative z-10 text-center lg:text-start">
          <p className="eyebrow text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse-soft" />
            {t.eyebrow}
          </p>
          <h1 className="h-display mt-6 text-[clamp(2.9rem,8vw,6.6rem)]">
            <span className="block">{t.title1}</span>
            <span className="text-gradient-volt block">{t.title2}</span>
            <span className="block">{t.title3}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">{t.lead}</p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link href={`/${locale}/contact/`} className="btn-volt w-full !px-8 !py-4 text-base sm:w-auto">
              {t.ctaPrimary} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
            </Link>
            <Link href={`/${locale}/products/`} className="btn-ghost w-full !px-8 !py-4 text-base text-white sm:w-auto">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <HeroVisual />
        </div>
      </div>

      <a href="#products" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.7rem] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 lg:flex">
        {t.scroll}
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
