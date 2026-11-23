/** Animated "AI workflow" node graph: pure SVG + CSS, no JS, crisp at any size. */
export function AutomationFlow({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 66, y: 70, l: "WhatsApp", c: "#25D366" },
    { x: 66, y: 200, l: "Email", c: "#3D5AFE" },
    { x: 66, y: 330, l: "Calls", c: "#CCFF00" },
    { x: 260, y: 200, l: "AI Agent", c: "#CCFF00", big: true },
    { x: 454, y: 70, l: "CRM", c: "#3D5AFE" },
    { x: 454, y: 200, l: "Invoice", c: "#FFFFFF" },
    { x: 454, y: 330, l: "Report", c: "#25D366" },
  ];
  const edges = [
    [0, 3], [1, 3], [2, 3], [3, 4], [3, 5], [3, 6],
  ];
  const path = (a: (typeof nodes)[number], b: (typeof nodes)[number]) => {
    const ax = a.x + (a.big ? 62 : 58);
    const bx = b.x - (b.big ? 62 : 58);
    const mx = (ax + bx) / 2;
    return `M${ax} ${a.y} C${mx} ${a.y}, ${mx} ${b.y}, ${bx} ${b.y}`;
  };
  return (
    <svg viewBox="0 0 520 400" className={className} role="img" aria-label="AI agent connecting WhatsApp, email and calls to CRM, invoicing and reports" style={{ direction: "ltr" }}>
      <defs>
        <radialGradient id="af-glow">
          <stop offset="0" stopColor="#CCFF00" stopOpacity=".55" />
          <stop offset="1" stopColor="#CCFF00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="af-line" x1="0" x2="1">
          <stop offset="0" stopColor="#3D5AFE" />
          <stop offset="1" stopColor="#CCFF00" />
        </linearGradient>
      </defs>
      <style>{`
        .af-flow{stroke-dasharray:6 10;animation:af-dash 1.6s linear infinite}
        .af-pulse{animation:af-pulse 2.4s ease-in-out infinite;transform-origin:260px 200px}
        .af-orbit{animation:af-spin 14s linear infinite;transform-origin:260px 200px}
        @keyframes af-dash{to{stroke-dashoffset:-32}}
        @keyframes af-pulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.12);opacity:.5}}
        @keyframes af-spin{to{transform:rotate(360deg)}}
        @media (prefers-reduced-motion:reduce){.af-flow,.af-pulse,.af-orbit{animation:none}}
      `}</style>

      <circle cx="260" cy="200" r="120" fill="url(#af-glow)" className="af-pulse" />
      <circle cx="260" cy="200" r="92" fill="none" stroke="#ffffff" strokeOpacity=".12" strokeDasharray="2 8" className="af-orbit" />

      {edges.map(([a, b], i) => (
        <g key={i}>
          <path d={path(nodes[a], nodes[b])} fill="none" stroke="#ffffff" strokeOpacity=".08" strokeWidth="6" />
          <path d={path(nodes[a], nodes[b])} fill="none" stroke="url(#af-line)" strokeWidth="2.5" className="af-flow" style={{ animationDelay: `${i * 0.2}s` }} />
        </g>
      ))}

      {nodes.map((n) =>
        n.big ? (
          <g key={n.l}>
            <rect x={n.x - 62} y={n.y - 62} width="124" height="124" rx="32" fill="#0B0F3A" stroke="#CCFF00" strokeWidth="2" />
            <g transform={`translate(${n.x - 30} ${n.y - 40}) scale(.6)`} strokeLinejoin="round" strokeWidth="7">
              <path d="M17 10H83L50 44Z" fill="#2B2BFF" stroke="#2B2BFF" />
              <path d="M17 90H83L50 56Z" fill="#2B2BFF" stroke="#2B2BFF" />
              <path d="M10 17V83L44 50Z" fill="#CCFF00" stroke="#CCFF00" />
              <path d="M90 17V83L56 50Z" fill="#CCFF00" stroke="#CCFF00" />
            </g>
            <text x={n.x} y={n.y + 44} textAnchor="middle" fill="#CCFF00" fontSize="14" fontWeight="700" fontFamily="system-ui">AI AGENT</text>
          </g>
        ) : (
          <g key={n.l}>
            <rect x={n.x - 58} y={n.y - 22} width="116" height="44" rx="22" fill="#ffffff" fillOpacity=".07" stroke="#ffffff" strokeOpacity=".15" />
            <circle cx={n.x - 38} cy={n.y} r="6" fill={n.c} />
            <text x={n.x - 26} y={n.y + 5} fill="#ffffff" fontSize="14" fontWeight="600" fontFamily="system-ui">{n.l}</text>
          </g>
        )
      )}
    </svg>
  );
}
