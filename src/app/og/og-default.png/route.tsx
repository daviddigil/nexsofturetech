import { ImageResponse } from "next/og";

export const dynamic = "force-static";

const mark = (a: string, b: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke-linejoin="round" stroke-width="7"><path d="M17 10H83L50 44Z" fill="${a}" stroke="${a}"/><path d="M17 90H83L50 56Z" fill="${a}" stroke="${a}"/><path d="M10 17V83L44 50Z" fill="${b}" stroke="${b}"/><path d="M90 17V83L56 50Z" fill="${b}" stroke="${b}"/></g></svg>`
  )}`;

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#05061A", color: "white", padding: 72, position: "relative", fontFamily: "sans-serif" }}>
        <div style={{ position: "absolute", top: -200, left: 300, width: 800, height: 600, borderRadius: 9999, background: "rgba(43,43,255,0.45)", filter: "blur(120px)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "68%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={mark("#2B2BFF", "#CCFF00")} width={64} height={64} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>NEXSOFTURE</div>
              <div style={{ fontSize: 16, letterSpacing: 14, color: "#CCFF00" }}>TECH</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Building the</div>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: "#CCFF00" }}>next future</div>
            <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>of software.</div>
            <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>AI products · Web & App · Marketing · Design: Dubai, UAE</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32%" }}>
          <img src={mark("#3D5AFE", "#CCFF00")} width={320} height={320} alt="" />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
