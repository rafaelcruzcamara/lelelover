import PollWidget from "@/components/PollWidget";
import poll from "@/content/poll.json";

export const metadata = { title: "Comunidade · Fã Clube do Lelê" };

export default function ComunidadePage() {
  return (
    <div className="space-y-6">
      <PollWidget {...poll} />

      <a
        href="#"
        className="block text-center bg-cyan text-ink font-display text-sm border-[3px] border-ink shadow-hard-magenta py-3 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        Entrar no grupo do WhatsApp
      </a>
      <p className="font-pixel text-[8px] text-chalk/50 text-center -mt-3">
        troque "#" pelo link real do grupo
      </p>
    </div>
  );
}
