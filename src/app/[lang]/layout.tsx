import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Saira, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { site, locales, isLocale, dirOf } from "@/config/site";
import { getDict } from "@/content/ui";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd } from "@/lib/seo";

const saira = Saira({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-saira", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["400", "500", "600", "700"], variable: "--font-plex-arabic", display: "swap" });

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05061A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: ar ? "نكسوفتشر تك | منتجات الذكاء الاصطناعي وتطوير البرمجيات في الإمارات" : "Nexsofture Tech | AI Products & Software Development Company in the UAE",
      template: ar ? "%s | نكسوفتشر تك" : "%s | Nexsofture Tech",
    },
    applicationName: site.name,
    authors: [{ name: site.founder }],
    creator: site.name,
    publisher: site.name,
    category: "technology",
    formatDetection: { telephone: false, email: false, address: false },
    icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.png" },
    manifest: "/manifest.webmanifest",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    verification: {
      google: site.verification.google || undefined,
      yandex: site.verification.yandex || undefined,
      other: site.verification.bing ? { "msvalidate.01": site.verification.bing } : undefined,
    },
    other: { "geo.region": "AE-DU", "geo.placename": site.contact.address.city, "geo.position": `${site.contact.geo.lat};${site.contact.geo.lng}`, ICBM: `${site.contact.geo.lat}, ${site.contact.geo.lng}` },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <html lang={lang} dir={dirOf(lang)} className={`${saira.variable} ${inter.variable} ${plexArabic.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site summary" />
        <JsonLd data={organizationLd(lang)} />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-volt focus:px-4 focus:py-2 focus:text-navy">
          {lang === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
        </a>
        <SmoothScroll />
        <Header locale={lang} t={d.nav} />
        <main id="main">{children}</main>
        <Footer locale={lang} t={d.footer} nav={d.nav} />
        <WhatsAppFab label={d.cta.whatsapp} />
        {site.analytics.plausibleDomain && (
          <Script defer data-domain={site.analytics.plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
