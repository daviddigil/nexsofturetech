import type { ProductVisualKind } from "@/content/products";

/** Lightweight, code-drawn product UI illustrations (no images → fast, crisp, on-brand). */
export function ProductVisual({ kind, className = "" }: { kind: ProductVisualKind; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-4xl bg-gradient-to-br from-navy via-[#141a66] to-royal p-6 text-white ${className}`} aria-hidden dir="ltr">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="relative h-full">{visuals[kind]}</div>
    </div>
  );
}

const Bubble = ({ me, w, children }: { me?: boolean; w: string; children?: React.ReactNode }) => (
  <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
    <div className={`rounded-2xl px-3 py-2 text-[11px] leading-snug ${me ? "rounded-br-md bg-volt text-navy" : "rounded-bl-md bg-white/12 text-white/90"}`} style={{ width: w }}>
      {children}
    </div>
  </div>
);

const visuals: Record<ProductVisualKind, React.ReactNode> = {
  chat: (
    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-5">
      <div className="glass sm:col-span-3 flex flex-col gap-2 rounded-3xl p-4">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-volt" />
          <div>
            <div className="text-[11px] font-semibold">ChatCart AI</div>
            <div className="text-[9px] text-volt">● online · 24/7</div>
          </div>
        </div>
        <Bubble w="70%">Hi! Do you have the black sneakers in size 42?</Bubble>
        <Bubble me w="78%">Yes ✨ 3 left in stock. AED 349, delivered tomorrow in Dubai. Shall I reserve one?</Bubble>
        <Bubble w="35%">Yes please!</Bubble>
        <Bubble me w="70%">Done ✅ Here&apos;s your payment link →</Bubble>
      </div>
      <div className="hidden flex-col gap-4 sm:col-span-2 sm:flex">
        <div className="glass flex-1 rounded-3xl p-4">
          <div className="text-[10px] uppercase tracking-widest text-white/60">Voice agent</div>
          <div className="mt-3 flex h-12 items-center gap-[3px]">
            {[40, 70, 30, 90, 55, 80, 35, 65, 95, 45, 75, 30, 60].map((h, i) => (
              <span key={i} className="w-1.5 rounded-full bg-volt animate-pulse-soft" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
          <div className="mt-2 text-[10px] text-white/70">مرحباً! كيف أقدر أساعدك؟</div>
        </div>
        <div className="glass flex-1 rounded-3xl p-4">
          <div className="text-[10px] uppercase tracking-widest text-white/60">Quick Store</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {["bg-volt/80", "bg-electric", "bg-white/30", "bg-volt/40"].map((c, i) => (
              <div key={i} className={`aspect-square rounded-xl ${c}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  print: (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-[62%] w-[46%] -rotate-12 rounded-2xl bg-white/90 shadow-2xl" style={{ translate: "-30% 0" }}>
        <div className="m-4 h-3 w-1/2 rounded bg-royal" />
        <div className="mx-4 h-2 w-3/4 rounded bg-navy/20" />
        <div className="mx-4 mt-2 h-2 w-2/3 rounded bg-navy/20" />
        <div className="absolute bottom-4 left-4 right-4 h-1/3 rounded-xl bg-gradient-to-br from-volt to-royal" />
      </div>
      <div className="absolute h-[34%] w-[52%] rotate-6 rounded-xl bg-navy p-4 shadow-2xl ring-1 ring-white/20" style={{ translate: "25% 30%" }}>
        <div className="text-sm font-bold">David Digil</div>
        <div className="text-[10px] text-volt">Founder &amp; CEO</div>
        <div className="absolute bottom-3 right-3 h-6 w-6 rounded bg-volt" />
      </div>
      <div className="glass absolute right-2 top-2 rounded-2xl px-4 py-3">
        <div className="text-[10px] text-white/60">500 business cards</div>
        <div className="text-sm font-bold text-volt">Instant price ✓</div>
      </div>
      <div className="glass absolute bottom-2 left-2 rounded-full px-3 py-1.5 text-[10px]">🚚 Delivery across all Emirates</div>
    </div>
  ),
  crm: (
    <div className="grid h-full grid-cols-3 gap-3">
      {[
        { t: "New leads", n: 12, c: "bg-white/15" },
        { t: "Qualified", n: 7, c: "bg-electric/60" },
        { t: "Won", n: 4, c: "bg-volt text-navy" },
      ].map((col, ci) => (
        <div key={col.t} className="glass flex flex-col gap-2 rounded-3xl p-3">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/70">
            {col.t} <span className="rounded-full bg-white/10 px-1.5">{col.n}</span>
          </div>
          {Array.from({ length: 4 - ci }).map((_, i) => (
            <div key={i} className={`rounded-xl p-2.5 ${col.c}`}>
              <div className="h-2 w-3/4 rounded bg-current opacity-60" />
              <div className="mt-1.5 flex items-center justify-between">
                <div className="h-1.5 w-1/3 rounded bg-current opacity-30" />
                <span className="text-[9px] font-bold">AI {92 - i * 7 - ci * 3}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  board: (
    <div className="flex h-full flex-col gap-4">
      <div className="relative flex-1 rounded-3xl bg-[#0c2a1f] p-5 ring-8 ring-[#5b3a1e]/70">
        <div className="font-mono text-sm text-white/85">
          <div>f(x) = 2x² + 3x − 5</div>
          <div className="mt-2 text-volt">f′(x) = 4x + 3</div>
          <div className="mt-3 h-12 w-full">
            <svg viewBox="0 0 200 50" className="h-full w-full" fill="none">
              <path d="M0 45 Q 60 -20 100 25 T 200 5" stroke="#ccff00" strokeWidth="2" />
              <line x1="0" y1="45" x2="200" y2="45" stroke="white" strokeOpacity=".3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="glass flex items-start gap-3 rounded-3xl p-4">
        <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-volt to-electric" />
        <p className="text-[11px] leading-snug text-white/85">
          <b className="text-volt">AI Tutor:</b> Great try! To differentiate 2x², bring the power down: 2·2x = 4x. Want a practice question?
        </p>
      </div>
    </div>
  ),
  tips: (
    <div className="flex h-full items-center justify-center gap-6">
      <div className="rounded-3xl bg-white p-4 shadow-2xl">
        <div className="grid grid-cols-7 gap-[3px]">
          {Array.from({ length: 49 }).map((_, i) => {
            const on = [0, 1, 2, 4, 6, 7, 9, 13, 14, 15, 16, 18, 20, 22, 24, 25, 28, 30, 31, 33, 35, 36, 37, 39, 41, 42, 44, 46, 47, 48].includes(i);
            return <span key={i} className={`h-3 w-3 rounded-[3px] ${on ? "bg-navy" : "bg-transparent"}`} />;
          })}
        </div>
        <div className="mt-2 text-center text-[10px] font-semibold text-navy">Scan to tip · Sara</div>
      </div>
      <div className="glass w-44 rounded-3xl p-4">
        <div className="text-[10px] uppercase tracking-widest text-white/60">Tip Sara</div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {["10", "20", "50"].map((v, i) => (
            <div key={v} className={`rounded-xl py-2 text-center text-xs font-bold ${i === 1 ? "bg-volt text-navy" : "bg-white/10"}`}>{v}</div>
          ))}
        </div>
        <div className="mt-2 text-center text-[10px] text-white/60">AED</div>
        <div className="mt-2 text-center text-sm">★★★★★</div>
        <div className="mt-3 rounded-xl bg-white py-2 text-center text-xs font-semibold text-black"> Pay</div>
      </div>
    </div>
  ),
};
