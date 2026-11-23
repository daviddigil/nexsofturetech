import { Reveal } from "../Reveal";

export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
  as: H = "h2",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "text-volt" : "text-royal"}`}>{eyebrow}</p>
      <H className={`h-display mt-5 text-[clamp(2.2rem,5.5vw,4.25rem)] ${dark ? "text-white" : "text-navy"}`}>{title}</H>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "text-slate"}`}>{lead}</p>}
    </Reveal>
  );
}
