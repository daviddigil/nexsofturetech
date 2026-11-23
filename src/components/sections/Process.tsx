import { SectionHead } from "./SectionHead";
import { Reveal } from "../Reveal";
import type { Dict } from "@/content/ui";

export function Process({ t }: { t: Dict["process"] }) {
  return (
    <section className="bg-cloud py-24 sm:py-32">
      <div className="container-x">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="relative mt-16">
          <div className="absolute top-7 hidden h-px w-full bg-gradient-to-r from-royal via-volt to-royal md:block" aria-hidden />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {t.steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 0.1}>
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-volt ring-8 ring-cloud">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-slate">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
