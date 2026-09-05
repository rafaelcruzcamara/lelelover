export const metadata = { title: "Sobre · Fã Clube do Lelê" };

export default function SobrePage() {
  return (
    <div className="space-y-6">
      <section className="bg-chalk text-ink border-[3px] border-ink shadow-hard p-5 rotate-[-0.5deg]">
        <h2 className="font-display text-lg mb-3">Quem é o Lelê</h2>
        <p className="text-sm leading-relaxed">
          Professor de matemática, dono da caneca mais famosa da escola e
          criador de frases que viram meme no mesmo dia. Edite este texto com
          a bio de verdade — trajetória, matérias que leciona, tempo de casa,
          o que quiser contar.
        </p>
      </section>

      <section className="bg-chalk text-ink border-[3px] border-ink shadow-hard p-5 rotate-[0.5deg]">
        <h2 className="font-display text-lg mb-3">O que é o fã-clube</h2>
        <p className="text-sm leading-relaxed">
          O Fã Clube do Lelê nasceu num grupo de WhatsApp e virou esse site:
          um mural com os melhores momentos de aula, dicas de matemática e
          espaço pra galera votar e mandar conteúdo. Edite este texto pra
          contar a história de verdade do grupo.
        </p>
      </section>
    </div>
  );
}
