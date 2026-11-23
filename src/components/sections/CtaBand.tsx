import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "../Icons";
import { LogoMark } from "../Logo";
import { Reveal } from "../Reveal";
import { site, type Locale } from "@/config/site";
import type { Dict } from "@/content/ui";

export function CtaBand({ locale, t }: { locale: Locale; t: Dict["cta"] }) {
  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <Reveal className="relative mx-auto max-w-[1240px] overflow-hidden rounded-5xl bg-volt px-6 py-20 text-center text-navy sm:px-16 sm:py-28">
        <LogoMark className="absolute -right-16 -top-16 h-72 w-72 rotate-12 opacity-15" mono="#0B0F3A" />
        <LogoMark className="absolute -bottom-20 -left-16 h-64 w-64 -rotate-12 opacity-15" mono="#2B2BFF" />
        <h2 className="h-display relative text-[clamp(2.5rem,7vw,5.5rem)]">{t.title}</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-navy/75">{t.lead}</p>
        <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={`/${locale}/contact/`} className="btn-navy w-full !px-8 !py-4 text-base sm:w-auto">
            {t.primary} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
          </Link>
          <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener" className="btn-ghost w-full !px-8 !py-4 text-base sm:w-auto">
            <WhatsAppIcon className="h-5 w-5" /> {t.whatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
