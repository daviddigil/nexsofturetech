import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { ServiceIcon } from "../Icons";
import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal";
import type { Locale } from "@/config/site";
import type { Dict } from "@/content/ui";

const spans = ["md:col-span-4 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-6 lg:col-span-6"];

export function ServicesBento({ locale, t }: { locale: Locale; t: Dict["servicesSection"] }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-royal/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-volt/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} dark />
        <ul className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-6">
          {services.map((s, i) => {
            const hero = i === 0;
            return (
              <Reveal as="li" key={s.slug} delay={i * 0.05} className={spans[i]}>
                <Link
                  href={`/${locale}/services/${s.slug}/`}
                  className={`group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-4xl p-7 transition-all duration-500 ease-(--ease-apple) hover:-translate-y-1 ${
                    hero ? "bg-volt text-navy" : "glass hover:bg-white/10"
                  }`}
                >
                  {hero && <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />}
                  <div className="relative flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${hero ? "bg-navy text-volt" : "bg-volt/10 text-volt"}`}>
                      <ServiceIcon kind={s.icon} className="h-6 w-6" aria-hidden />
                    </span>
                    <ArrowUpRight className="flip-rtl h-5 w-5 opacity-50 transition-all duration-300 group-hover:opacity-100" aria-hidden />
                  </div>
                  <div className="relative">
                    <h3 className={`font-display font-bold ${hero ? "text-4xl sm:text-5xl" : "text-2xl"}`}>{s.name[locale]}</h3>
                    <p className={`mt-2 ${hero ? "max-w-md text-lg text-navy/75" : "text-sm text-white/60"}`}>{s.tagline[locale]}</p>
                    {hero && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.deliverables.slice(0, 4).map((d) => (
                          <li key={d.en} className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold">
                            {d[locale]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
        <div className="mt-12 text-center">
          <Link href={`/${locale}/services/`} className="btn-ghost text-white">
            {t.viewAll} <ArrowUpRight className="flip-rtl h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
