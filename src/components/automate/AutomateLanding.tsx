import Link from "next/link";
import {
  Bot, Workflow, PhoneCall, MessagesSquare, FileText, Users, ArrowRight, ChevronRight,
  Clock, Languages, UserCheck, ShieldCheck, MapPin, Check,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { automate as A, emirates, type Emirate, type AutoIcon } from "@/content/automate";
import { getDict } from "@/content/ui";
import { href } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionHead } from "../sections/SectionHead";
import { Faq } from "../sections/Faq";
import { CtaBand } from "../sections/CtaBand";
import { WhatsAppIcon } from "../Icons";
import { AutomationFlow } from "./AutomationFlow";
import { SavingsCalculator } from "./SavingsCalculator";

const sysIcons: Record<AutoIcon, typeof Bot> = { agent: Bot, workflow: Workflow, voice: PhoneCall, social: MessagesSquare, docs: FileText, crm: Users };
const pillarIcons = [Clock, Languages, UserCheck, ShieldCheck];

export function AutomateLanding({ locale: l, emirate }: { locale: Locale; emirate?: Emirate }) {
  const d = getDict(l);
  const ar = l === "ar";
  const base = href(l, "/automate-uae");
  const crumbs = [
    { name: d.common.home, href: href(l) },
    { name: ar ? "أتمتة الإمارات" : "Automate UAE", href: emirate ? base : undefined },
    ...(emirate ? [{ name: emirate.name[l] }] : []),
  ];
  const h1Prefix = ar ? "الأتمتة بالذكاء الاصطناعي في" : "AI Automation in";

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-28 text-white sm:pt-36">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-royal/35 blur-[140px]" />
        <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-volt/15 blur-[120px]" />
        <div className="container-x">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="flip-rtl h-3 w-3" aria-hidden />}
                  {c.href ? <Link href={c.href} className="hover:text-volt">{c.name}</Link> : <span aria-current="page" className="text-white/80">{c.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="animate-rise">
              <p className="eyebrow text-volt">
                <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse-soft" />
                {emirate ? (ar ? `أتمتة الإمارات · ${emirate.name.ar}` : `Automate UAE · ${emirate.name.en}`) : A.hero.eyebrow[l]}
              </p>
              {emirate ? (
                <h1 className="h-display mt-6 text-[clamp(2.6rem,6.5vw,5.5rem)]">
                  {h1Prefix} <span className="text-gradient-volt">{emirate.name[l]}</span>
                </h1>
              ) : (
                <h1 className="h-display mt-6 text-[clamp(2.8rem,7vw,6rem)]">
                  <span className="block text-gradient-volt">{A.hero.title1[l]}</span>
                  <span className="block">{A.hero.title2[l]}</span>
                  <span className="block">{A.hero.title3[l]}</span>
                </h1>
              )}
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                {emirate ? `${emirate.intro[l]} ${emirate.angle[l]}` : A.hero.lead[l]}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={href(l, "/contact")} className="btn-volt !px-8 !py-4 text-base">
                  {A.hero.cta[l]} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
                </Link>
                <a href="#systems" className="btn-ghost !px-8 !py-4 text-base text-white">{A.hero.cta2[l]}</a>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-5xl p-4 sm:p-8">
                <AutomationFlow className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Integrations marquee ───── */}
      <section className="border-b border-navy/5 bg-white py-8" aria-label={A.integrations.title[l]}>
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate">{A.integrations.title[l]}</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]" dir="ltr">
          <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
            {[...A.integrations.list, ...A.integrations.list].map((n, i) => (
              <li key={i} aria-hidden={i >= A.integrations.list.length} className="whitespace-nowrap rounded-full border border-navy/10 px-5 py-2.5 text-sm font-semibold text-navy">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Emirate-specific focus ───── */}
      {emirate && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <SectionHead
              eyebrow={ar ? `قطاعات ${emirate.name.ar}` : `${emirate.name.en} industries`}
              title={ar ? `ما نؤتمته لشركات ${emirate.name.ar}` : `What we automate for ${emirate.name.en} businesses`}
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {emirate.sectors.map((s, i) => (
                <Reveal as="li" key={s.en} delay={i * 0.05} className="card flex items-center gap-4 bg-cloud ring-1 ring-navy/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-volt text-navy"><Check className="h-5 w-5" aria-hidden /></span>
                  <span className="font-display text-xl font-bold text-navy">{s[l]}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───── Vision ───── */}
      <section className={`${emirate ? "bg-cloud" : "bg-white"} py-24 sm:py-32`}>
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHead eyebrow={A.vision.eyebrow[l]} title={A.vision.title[l]} />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate">{A.vision.body[l]}</p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {A.vision.pillars.map((p, i) => {
                const I = pillarIcons[i];
                return (
                  <li key={p.t.en} className="rounded-3xl bg-white p-5 ring-1 ring-navy/5">
                    <I className="h-6 w-6 text-royal" aria-hidden />
                    <p className="mt-3 font-display text-lg font-bold text-navy">{p.t[l]}</p>
                    <p className="mt-1 text-sm text-slate">{p.d[l]}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───── Systems ───── */}
      <section id="systems" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-royal/30 blur-[120px]" />
        <div className="container-x relative">
          <SectionHead eyebrow={A.systems.eyebrow[l]} title={A.systems.title[l]} dark />
          <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {A.systems.items.map((s, i) => {
              const I = sysIcons[s.icon];
              return (
                <Reveal as="li" key={s.t.en} delay={(i % 3) * 0.06} className="glass group flex flex-col rounded-4xl p-7 transition-colors hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt text-navy transition-transform group-hover:scale-110">
                    <I className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold">{s.t[l]}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-white/65">{s.d[l]}</p>
                  <p className="mt-5 rounded-2xl bg-white/5 px-4 py-3 text-sm text-volt">{s.ex[l]}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───── Before / after by department ───── */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="container-x">
          <SectionHead eyebrow={A.departments.eyebrow[l]} title={A.departments.title[l]} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {A.departments.items.map((x, i) => (
              <Reveal as="li" key={x.t.en} delay={(i % 3) * 0.06} className="card ring-1 ring-navy/5">
                <h3 className="font-display text-2xl font-bold text-navy">{x.t[l]}</h3>
                <p className="mt-5 flex items-start gap-3 text-slate line-through decoration-red-400/60">
                  <span className="mt-0.5 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase text-red-500 no-underline">{ar ? "قبل" : "Before"}</span>
                  {x.before[l]}
                </p>
                <p className="mt-3 flex items-start gap-3 font-medium text-navy">
                  <span className="mt-0.5 rounded-full bg-volt px-2 py-0.5 text-[10px] font-bold uppercase text-navy">{ar ? "بعد" : "After"}</span>
                  {x.after[l]}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Savings calculator ───── */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="grid-bg absolute inset-0" />
        <div className="container-x relative">
          <SectionHead eyebrow={A.calc.eyebrow[l]} title={A.calc.title[l]} dark />
          <div className="mt-12">
            <SavingsCalculator
              locale={l}
              t={{
                people: A.calc.people[l], hours: A.calc.hours[l], cost: A.calc.cost[l], hoursSaved: A.calc.hoursSaved[l],
                aedSaved: A.calc.aedSaved[l], yearly: A.calc.yearly[l], note: A.calc.note[l],
              }}
            />
          </div>
        </div>
      </section>

      {/* ───── Process ───── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHead eyebrow={A.process.eyebrow[l]} title={A.process.title[l]} />
          <ol className="mt-14 grid gap-4 md:grid-cols-5">
            {A.process.steps.map((s, i) => (
              <Reveal as="li" key={s.t.en} delay={i * 0.08} className="relative rounded-4xl bg-cloud p-6">
                <span className="font-display text-5xl font-extrabold text-royal/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy">{s.t[l]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s.d[l]}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── Engagement models ───── */}
      <section className="bg-cloud py-24 sm:py-32">
        <div className="container-x">
          <SectionHead eyebrow={A.models.eyebrow[l]} title={A.models.title[l]} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {A.models.items.map((m, i) => (
              <Reveal as="li" key={m.t.en} delay={i * 0.06} className={`rounded-4xl p-7 ${i === 0 ? "bg-volt text-navy" : "bg-white text-navy ring-1 ring-navy/5"}`}>
                <h3 className="font-display text-2xl font-bold">{m.t[l]}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-navy/75" : "text-slate"}`}>{m.d[l]}</p>
                {i === 0 && (
                  <Link href={href(l, "/contact")} className="btn-navy mt-6">
                    {ar ? "احجز الآن" : "Book now"} <ArrowRight className="flip-rtl h-4 w-4" aria-hidden />
                  </Link>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Emirates grid ───── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHead eyebrow={A.emiratesSection.eyebrow[l]} title={A.emiratesSection.title[l]} />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {emirates.map((e) => {
              const active = emirate?.slug === e.slug;
              return (
                <li key={e.slug}>
                  <Link
                    href={href(l, `/automate-uae/${e.slug}`)}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between rounded-3xl px-6 py-5 transition-all ${active ? "bg-navy text-white" : "bg-cloud text-navy hover:bg-navy hover:text-white"}`}
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className={`h-5 w-5 ${active ? "text-volt" : "text-royal group-hover:text-volt"}`} aria-hidden />
                      <span className="font-display text-lg font-bold">{ar ? `الأتمتة في ${e.name.ar}` : `Automation in ${e.name.en}`}</span>
                    </span>
                    <ArrowRight className="flip-rtl h-4 w-4 opacity-60" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm text-slate">
            {ar
              ? `مكاتبنا: ${site.contact.offices.map((o) => o.label.ar).join(" · ")}. نخدم العملاء في الموقع وعن بُعد في جميع الإمارات.`
              : `Our offices: ${site.contact.offices.map((o) => `${o.city}`).join(" & ")}. We serve clients on-site and remotely across all seven Emirates.`}{" "}
            <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-royal hover:underline">
              <WhatsAppIcon className="h-4 w-4" /> {site.contact.phone}
            </a>
          </p>
        </div>
      </section>

      <Faq eyebrow={d.faq.eyebrow} title={d.faq.title} items={A.faq.map((f) => ({ q: f.q[l], a: f.a[l] }))} />
      <CtaBand
        locale={l}
        t={{
          ...d.cta,
          title: ar ? "لنؤتمت شركتك." : "Let's automate your business.",
          lead: ar ? "احجز تقييم أتمتة مجانياً لمدة 30 دقيقة. سنحدد أسرع المكاسب والعائد المتوقع لشركتك." : "Book a free 30-minute automation audit. We'll map your quickest wins and expected ROI.",
          primary: A.hero.cta[l],
        }}
      />
    </>
  );
}
