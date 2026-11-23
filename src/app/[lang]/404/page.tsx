import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = { title: "404", robots: { index: false, follow: true } };

/** Served by Apache for unknown URLs (see public/.htaccess → ErrorDocument). */
export default async function NotFoundPage({ params }: PageProps<"/[lang]/404">) {
  const lang = (await params).lang as Locale;
  const ar = lang === "ar";
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink pt-24 text-white">
      <div className="grid-bg absolute inset-0" />
      <div className="container-x relative flex flex-col items-center text-center">
        <LogoMark className="h-24 w-24 animate-float" />
        <h1 className="h-display mt-8 text-7xl text-volt sm:text-9xl">404</h1>
        <p className="mt-4 max-w-md text-lg text-white/70">{ar ? "يبدو أن هذه الصفحة انتقلت إلى المستقبل." : "Looks like this page has moved to the future."}</p>
        <div className="mt-8 flex gap-3">
          <Link href="/en/" className="btn-volt">Home</Link>
          <Link href="/ar/" className="btn-ghost text-white">الرئيسية</Link>
        </div>
      </div>
    </section>
  );
}
