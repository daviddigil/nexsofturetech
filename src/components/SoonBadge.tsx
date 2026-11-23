export function SoonBadge({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full bg-volt px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-navy ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-navy animate-pulse-soft" aria-hidden />
      {label}
    </span>
  );
}
