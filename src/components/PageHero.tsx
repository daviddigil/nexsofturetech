import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: { name: string; href?: string }[];
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 text-white sm:pb-28 sm:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-royal/30 blur-[140px]" />
      <div className="container-x">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="flip-rtl h-3 w-3" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-volt">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-white/80">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-8 max-w-4xl animate-rise">
          {eyebrow && <p className="eyebrow text-volt">{eyebrow}</p>}
          <h1 className="h-display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
