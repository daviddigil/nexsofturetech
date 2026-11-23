import { ImageResponse } from "next/og";

export const dynamic = "force-static";

const svg = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke-linejoin="round" stroke-width="7"><path d="M17 10H83L50 44Z" fill="#2B2BFF" stroke="#2B2BFF"/><path d="M17 90H83L50 56Z" fill="#2B2BFF" stroke="#2B2BFF"/><path d="M10 17V83L44 50Z" fill="#0B0F3A" stroke="#0B0F3A"/><path d="M90 17V83L56 50Z" fill="#0B0F3A" stroke="#0B0F3A"/></g></svg>`
)}`;

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#CCFF00" }}>
        <img src={svg} width={128} height={128} alt="" />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
