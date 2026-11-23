"use client";
import { useEffect } from "react";

/** Apple-like inertial scrolling for mouse/trackpad users only (touch scrolling is already smooth).
 *  Lenis is imported lazily so it never blocks first paint or loads on phones. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let id = 0;
    let destroy = () => {};
    let cancelled = false;
    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (t: number) => {
        lenis.raf(t);
        id = requestAnimationFrame(raf);
      };
      id = requestAnimationFrame(raf);
      destroy = () => lenis.destroy();
    };
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (ric) ric(start);
    else setTimeout(start, 500);
    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
      destroy();
    };
  }, []);
  return null;
}
