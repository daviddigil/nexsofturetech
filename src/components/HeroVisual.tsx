"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

/** 3D glass mark with an SVG fallback (reduced motion / no WebGL / while loading). */
export function HeroVisual() {
  const [use3D, setUse3D] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {}
    // Phones/tablets and low-power devices keep the lightweight SVG: three.js costs ~1 s of main-thread time on mobile.
    const desktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const capable = (nav.hardwareConcurrency ?? 4) >= 4 && (nav.deviceMemory ?? 8) >= 4;
    if (reduce || !webgl || !desktop || !capable) return;
    // Defer until the browser is idle so the 3D never blocks first paint (LCP).
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const start = () => {
      setUse3D(true);
      setTimeout(() => setReady(true), 900);
    };
    if (ric) ric(start);
    else setTimeout(start, 300);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      <div className="absolute inset-[12%] rounded-full bg-royal/40 blur-[90px] animate-pulse-soft" />
      <div className="absolute inset-[30%] rounded-full bg-volt/30 blur-[70px]" />
      <div className={`absolute inset-[18%] flex items-center justify-center transition-opacity duration-1000 ${ready ? "opacity-0" : "opacity-100"}`}>
        <LogoMark className="h-full w-full animate-float drop-shadow-[0_30px_60px_rgba(43,43,255,0.55)]" />
      </div>
      {use3D && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
          <Hero3D />
        </div>
      )}
    </div>
  );
}
