type MarkProps = { className?: string; title?: string; mono?: string };

/** The Nexsofture "X" mark — four rounded glass triangles. */
export function LogoMark({ className = "h-8 w-8", title, mono }: MarkProps) {
  const a = mono ?? "url(#nx-a)";
  const b = mono ?? "url(#nx-b)";
  return (
    <svg viewBox="0 0 100 100" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      {!mono && (
        <defs>
          <linearGradient id="nx-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4B4BFF" />
            <stop offset="1" stopColor="#2020E0" />
          </linearGradient>
          <linearGradient id="nx-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1A2160" />
            <stop offset="1" stopColor="#0B0F3A" />
          </linearGradient>
        </defs>
      )}
      <g strokeLinejoin="round" strokeWidth="7">
        <path d="M17 10 H83 L50 44 Z" fill={a} stroke={a} />
        <path d="M17 90 H83 L50 56 Z" fill={a} stroke={a} />
        <path d="M10 17 V83 L44 50 Z" fill={b} stroke={b} />
        <path d="M90 17 V83 L56 50 Z" fill={b} stroke={b} />
      </g>
    </svg>
  );
}

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} dir="ltr">
      <LogoMark className="h-8 w-8" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-extrabold tracking-tight ${dark ? "text-white" : "text-navy"}`} style={{ fontFamily: "var(--font-saira)" }}>
          NEXSOFTURE
        </span>
        <span className={`mt-0.5 text-[0.55rem] font-semibold tracking-[0.55em] ${dark ? "text-volt" : "text-royal"}`}>TECH</span>
      </span>
    </span>
  );
}
