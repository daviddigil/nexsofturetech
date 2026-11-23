import { Sparkles, Bot, MapPin, Gem } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal";
import type { Dict } from "@/content/ui";

const icons = [Sparkles, Bot, MapPin, Gem];

export function Why({ t, industries }: { t: Dict["why"]; industries: Dict["industries"] }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.items.map((it, i) => {
            const I = icons[i];
            return (
              <Reveal key={it.t} delay={i * 0.06} className="card card-hover ring-1 ring-navy/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt text-navy">
                  <I className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">{it.t}</h3>
                <p className="mt-2 leading-relaxed text-slate">{it.d}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-24">
          <SectionHead eyebrow={industries.eyebrow} title={industries.title} />
          <ul className="mt-10 flex flex-wrap gap-3">
            {industries.list.map((n, i) => (
              <Reveal as="li" key={n} delay={i * 0.03}>
                <span className="inline-block rounded-full border border-navy/10 px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-royal hover:bg-royal hover:text-white">
                  {n}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
