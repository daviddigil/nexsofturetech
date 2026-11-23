"use client";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content/ui";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(to); // SSR renders the real value (crawlable)
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return (
    <span ref={ref} dir="ltr">
      {v}
      <span className="text-royal">{suffix}</span>
    </span>
  );
}

export function Stats({ items }: { items: Dict["stats"] }) {
  return (
    <section className="bg-white py-20">
      <dl className="container-x grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {items.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-s border-navy/10 ps-6">
            <dt className="mt-2 text-sm text-slate">{s.label}</dt>
            <dd className="h-display text-6xl text-navy sm:text-7xl">
              <Counter to={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
