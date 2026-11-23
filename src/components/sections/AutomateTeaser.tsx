import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import { automate as A, emirates } from "@/content/automate";
import { href } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { AutomationFlow } from "../automate/AutomationFlow";

/** Home-page band promoting the Automate UAE programme. */
export function AutomateTeaser({ locale: l }: { locale: Locale }) {
  const ar = l === "ar";
  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <Reveal className="relative mx-auto grid max-w-[1240px] items-center gap-10 overflow-hidden rounded-5xl bg-ink p-8 text-white sm:p-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-royal/40 blur-[110px]" />
        <div className="relative">
          <p className="eyebrow text-volt">
            <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse-soft" />
            {ar ? "جديد · أتمتة الإمارات" : "New · Automate UAE"}
          </p>
          <h2 className="h-display mt-5 text-[clamp(2.2rem,5vw,4rem)]">
            <span className="text-gradient-volt">{A.hero.title1[l]}</span> {A.hero.title2[l]} {A.hero.title3[l]}
          </h2>
          <p className="mt-5 max-w-lg text-white/70">
            {ar
              ? "وكلاء ذكاء اصطناعي وأتمتة سير العمل ووكلاء صوتيون وأتمتة واتساب، لشركات الإمارات السبع."
              : "AI agents, workflow automation, voice agents and WhatsApp automation for businesses in all seven Emirates."}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {emirates.map((e) => (
              <li key={e.slug}>
                <Link href={href(l, `/automate-uae/${e.slug}`)} className="inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-volt hover:text-navy">
                  {e.name[l]}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={href(l, "/automate-uae")} className="btn-volt mt-8 !px-8 !py-4 text-base">
            {ar ? "اكتشف أتمتة الإمارات" : "Explore Automate UAE"} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
          </Link>
        </div>
        <AutomationFlow className="relative h-auto w-full" />
      </Reveal>
    </section>
  );
}
