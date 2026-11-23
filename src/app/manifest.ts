import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Nexsofture",
    description: "AI products & digital experiences, engineered in the UAE.",
    start_url: "/en/",
    display: "standalone",
    background_color: "#05061A",
    theme_color: "#CCFF00",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
