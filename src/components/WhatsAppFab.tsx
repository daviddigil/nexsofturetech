import { site } from "@/config/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFab({ label }: { label: string }) {
  return (
    <a
      href={`https://wa.me/${site.contact.whatsapp}`}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
