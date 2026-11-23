"use client";
import { useState } from "react";

type T = { people: string; hours: string; cost: string; hoursSaved: string; aedSaved: string; yearly: string; note: string };

const AUTOMATABLE = 0.6;
const WEEKS_PER_MONTH = 4.33;

function Slider({ label, value, set, min, max, step = 1, nf }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step?: number; nf: Intl.NumberFormat }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 text-sm font-medium text-white/80">
        {label}
        <output className="rounded-full bg-white/10 px-3 py-1 font-display text-base font-bold text-volt">{nf.format(value)}</output>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-3 w-full cursor-pointer accent-[#CCFF00]"
      />
    </label>
  );
}

export function SavingsCalculator({ t, locale }: { t: T; locale: string }) {
  const [people, setPeople] = useState(5);
  const [hours, setHours] = useState(10);
  const [cost, setCost] = useState(60);

  const hoursMonth = Math.round(people * hours * WEEKS_PER_MONTH * AUTOMATABLE);
  const aedMonth = Math.round(hoursMonth * cost);
  const nf = new Intl.NumberFormat(locale === "ar" ? "ar-AE" : "en-AE");

  return (
    <div className="grid gap-8 rounded-5xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-8">
        <Slider label={t.people} value={people} set={setPeople} min={1} max={100} nf={nf} />
        <Slider label={t.hours} value={hours} set={setHours} min={1} max={40} nf={nf} />
        <Slider label={t.cost} value={cost} set={setCost} min={20} max={300} step={5} nf={nf} />
      </div>
      <div className="flex flex-col justify-center gap-4 rounded-4xl bg-volt p-8 text-navy" aria-live="polite">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-navy/60">{t.hoursSaved}</p>
          <p className="h-display mt-1 text-6xl">{nf.format(hoursMonth)}</p>
        </div>
        <div className="border-t border-navy/15 pt-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy/60">{t.aedSaved}</p>
          <p className="h-display mt-1 text-5xl">{nf.format(aedMonth)}</p>
          <p className="mt-1 text-sm text-navy/70">≈ {nf.format(aedMonth * 12)} AED {t.yearly}</p>
        </div>
        <p className="text-xs leading-relaxed text-navy/60">{t.note}</p>
      </div>
    </div>
  );
}
