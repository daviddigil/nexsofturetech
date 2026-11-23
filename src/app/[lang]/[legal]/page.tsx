import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site, locales, type Locale } from "@/config/site";
import { getDict } from "@/content/ui";
import { pageMeta } from "@/lib/seo";
import { href } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";

/**
 * Privacy + Terms. Template text — have it reviewed by a UAE legal advisor (PDPL, Federal Decree-Law No. 45 of 2021).
 */
type Doc = { title: string; updated: string; sections: { h: string; p: string }[] };
const docs: Record<"privacy" | "terms", Record<Locale, Doc>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: 23 November 2026",
      sections: [
        { h: "Who we are", p: `${site.legalName} (“we”, “us”) operates ${site.domain} and the products listed on it. Our registered office is in Ras Al Khaimah (Al Hamra Industrial Zone-FZ) and our operating office is in Dubai, United Arab Emirates.` },
        { h: "What we collect", p: "Information you submit through forms (name, email, phone, company, message), and anonymous usage statistics if analytics is enabled. We do not sell personal data." },
        { h: "How we use it", p: "To respond to enquiries, provide quotes and services, improve our website, and comply with legal obligations under UAE law, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data." },
        { h: "Your rights", p: `You may request access to, correction of, or deletion of your personal data at any time by emailing ${site.contact.email}.` },
        { h: "Cookies", p: "This website uses only essential cookies by default. Any analytics is privacy-friendly and does not track you across sites." },
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: 23 نوفمبر 2026",
      sections: [
        { h: "من نحن", p: `تشغّل ${site.legalName} موقع ${site.domain} والمنتجات المذكورة فيه، ومكتبنا المسجّل في رأس الخيمة (المنطقة الصناعية بالحمرا - منطقة حرة) ومكتب العمليات في دبي، الإمارات العربية المتحدة.` },
        { h: "ما نجمعه", p: "المعلومات التي ترسلها عبر النماذج (الاسم والبريد والهاتف والشركة والرسالة)، وإحصاءات استخدام مجهولة الهوية عند تفعيل التحليلات. نحن لا نبيع البيانات الشخصية." },
        { h: "كيف نستخدمها", p: "للرد على الاستفسارات وتقديم عروض الأسعار والخدمات وتحسين موقعنا والامتثال للالتزامات القانونية في الإمارات، بما في ذلك المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية." },
        { h: "حقوقك", p: `يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها في أي وقت عبر مراسلة ${site.contact.email}.` },
        { h: "ملفات تعريف الارتباط", p: "يستخدم هذا الموقع ملفات تعريف الارتباط الأساسية فقط بشكل افتراضي، وأي تحليلات تحترم الخصوصية ولا تتبعك عبر المواقع." },
      ],
    },
  },
  terms: {
    en: {
      title: "Terms of Service",
      updated: "Last updated: 23 November 2026",
      sections: [
        { h: "Use of this website", p: "Content on this website is provided for general information about Nexsofture Tech and its products and services. Product-specific terms apply when you sign up for any of our platforms." },
        { h: "Intellectual property", p: "The Nexsofture name, logo, product names and website content are the property of Nexsofture Tech and may not be used without permission." },
        { h: "Projects & proposals", p: "Client projects are governed by a separate written proposal or agreement that defines scope, timelines, payment and ownership." },
        { h: "Governing law", p: "These terms are governed by the laws of the United Arab Emirates and the Emirate of Ras Al Khaimah." },
        { h: "Contact", p: `Questions about these terms: ${site.contact.email}.` },
      ],
    },
    ar: {
      title: "شروط الخدمة",
      updated: "آخر تحديث: 23 نوفمبر 2026",
      sections: [
        { h: "استخدام الموقع", p: "يُقدَّم محتوى هذا الموقع للتعريف العام بنكسوفتشر تك ومنتجاتها وخدماتها، وتنطبق شروط خاصة بكل منتج عند الاشتراك في أي من منصاتنا." },
        { h: "الملكية الفكرية", p: "اسم نكسوفتشر وشعارها وأسماء منتجاتها ومحتوى الموقع ملك لنكسوفتشر تك ولا يجوز استخدامها دون إذن." },
        { h: "المشاريع والعروض", p: "تخضع مشاريع العملاء لعرض أو اتفاقية مكتوبة منفصلة تحدد النطاق والجدول الزمني والدفع والملكية." },
        { h: "القانون الحاكم", p: "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة وإمارة رأس الخيمة." },
        { h: "التواصل", p: `للاستفسار عن هذه الشروط: ${site.contact.email}.` },
      ],
    },
  },
};

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((lang) => (["privacy", "terms"] as const).map((legal) => ({ lang, legal })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[legal]">): Promise<Metadata> {
  const { lang, legal } = await params;
  const doc = docs[legal as "privacy"]?.[lang as Locale];
  if (!doc) return {};
  return pageMeta({ locale: lang as Locale, path: `/${legal}`, title: doc.title, description: doc.sections[0].p });
}

export default async function Legal({ params }: PageProps<"/[lang]/[legal]">) {
  const { lang: raw, legal } = await params;
  const lang = raw as Locale;
  const doc = docs[legal as "privacy"]?.[lang];
  if (!doc) notFound();
  const d = getDict(lang);
  return (
    <>
      <PageHero crumbs={[{ name: d.common.home, href: href(lang) }, { name: doc.title }]} title={doc.title} lead={doc.updated} />
      <article className="bg-white py-16 sm:py-24">
        <div className="prose-nx container-x max-w-3xl text-lg">
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
