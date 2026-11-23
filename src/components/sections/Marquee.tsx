import { products } from "@/content/products";
import { services } from "@/content/services";
import { LogoMark } from "../Logo";
import type { Locale } from "@/config/site";

export function Marquee({ locale, label }: { locale: Locale; label: string }) {
  const items = [...products.map((p) => p.name), ...services.map((s) => s.name[locale])];
  const row = [...items, ...items];
  return (
    <section className="border-y border-navy/5 bg-white py-8" aria-label={label}>
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate">{label}</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]" dir="ltr">
        <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {row.map((n, i) => (
            <li key={i} className="flex items-center gap-3 whitespace-nowrap font-display text-2xl font-bold text-navy/80 sm:text-3xl" aria-hidden={i >= items.length}>
              <LogoMark className="h-5 w-5" mono={i % 2 ? "#a8d400" : "#2B2BFF"} />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
