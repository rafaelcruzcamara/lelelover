import Guestbook from "@/components/Guestbook";

export const metadata = { title: "Recados · Fã Clube do Lelê" };

export default function RecadosPage() {
  return (
    <div>
      <h2 className="font-display text-lg text-sun mb-2">
        Mural de recados
      </h2>
      <p className="text-sm text-chalk/70 mb-6">
        Deixa uma mensagem pro Lelê ou pra galera do fã-clube — fica
        registrado aqui pra sempre (ou até alguém apagar).
      </p>
      <Guestbook />
    </div>
  );
}
