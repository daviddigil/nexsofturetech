"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import type { Dict } from "@/content/ui";

type Status = "idle" | "sending" | "ok" | "error";

/** Posts to /api/contact.php (Hostinger PHP mailer). */
export function ContactForm({ t, interests, locale }: { t: Dict["contact"]; interests: string[]; locale: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact.php", { method: "POST", body: new FormData(form) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok")
    return (
      <div className="card flex flex-col items-center gap-4 py-16 text-center ring-1 ring-navy/5" role="status">
        <CheckCircle2 className="h-14 w-14 text-royal" aria-hidden />
        <p className="max-w-sm text-lg font-medium text-navy">{t.success}</p>
      </div>
    );

  const field = "mt-2 w-full rounded-2xl border border-navy/10 bg-cloud px-4 py-3.5 text-navy outline-none transition focus:border-royal focus:bg-white focus:ring-4 focus:ring-royal/10";
  const label = "text-sm font-medium text-navy";

  return (
    <form onSubmit={onSubmit} className="card grid gap-5 ring-1 ring-navy/5 sm:grid-cols-2" noValidate={false}>
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot (bots fill it, humans never see it) */}
      <div className="hidden" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className={label}>
        {t.name} *
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        {t.email} *
        <input name="email" type="email" required autoComplete="email" className={field} dir="ltr" />
      </label>
      <label className={label}>
        {t.phone}
        <input name="phone" type="tel" autoComplete="tel" className={field} dir="ltr" placeholder="+971" />
      </label>
      <label className={label}>
        {t.company}
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className={label}>
        {t.interest}
        <select name="interest" className={field} defaultValue="">
          <option value="" disabled>—</option>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        {t.budget}
        <select name="budget" className={field} defaultValue="">
          <option value="" disabled>—</option>
          {t.budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        {t.message} *
        <textarea name="message" required rows={5} className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-volt w-full !py-4 text-base disabled:opacity-60 sm:w-auto">
          {status === "sending" ? t.sending : t.send} <Send className="flip-rtl h-4 w-4" aria-hidden />
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-red-600" role="alert">
            {t.error}
          </p>
        )}
      </div>
    </form>
  );
}
