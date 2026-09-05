const STYLES = {
  perfil: "bg-cyan text-ink",
  memes: "bg-magenta text-chalk",
  dicas: "bg-sun text-ink",
  mural: "bg-chalk text-ink",
};

export default function Tag({ pillar, label }) {
  const style = STYLES[pillar] ?? STYLES.mural;
  return (
    <span
      className={`inline-block font-pixel text-[9px] uppercase tracking-wide px-2 py-1 border-2 border-ink shadow-hard-sm ${style}`}
    >
      {label}
    </span>
  );
}
