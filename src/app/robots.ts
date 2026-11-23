import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

/** Welcome classic search engines AND AI answer engines (AIO / GEO). */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User",
    "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
    "PerplexityBot", "Perplexity-User",
    "Google-Extended", "GoogleOther", "Applebot", "Applebot-Extended",
    "Bingbot", "DuckAssistBot", "YouBot", "Meta-ExternalAgent", "Amazonbot", "CCBot", "cohere-ai", "MistralAI-User",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
