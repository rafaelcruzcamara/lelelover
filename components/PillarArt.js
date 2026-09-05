const PALETTE = {
  perfil: { bg: "#00D9E9", ink: "#1A1025" },
  memes: { bg: "#FF2E88", ink: "#1A1025" },
  dicas: { bg: "#FFD23F", ink: "#1A1025" },
  mural: { bg: "#FBF5FF", ink: "#1A1025" },
};

function Scene({ pillar, ink }) {
  switch (pillar) {
    case "perfil":
      return (
        <g stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="120" y="70" width="70" height="60" rx="6" fill="#FBF5FF" />
          <path d="M190 85h14a12 12 0 0 1 0 24h-14" fill="none" />
          <path d="M135 70v-6c0-6 6-10 12-10s12 4 12 10v6" />
          <path d="M100 130h110" />
          <circle cx="240" cy="55" r="10" fill="#FFD23F" stroke={ink} />
          <path d="M255 40 268 27M258 55h16M255 70 268 83" />
        </g>
      );
    case "memes":
      return (
        <g stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M110 60 190 60" />
          <path d="M150 60 138 96" fill="none" />
          <path d="M136 100 108 118" />
          <path d="M170 60 178 96" />
          <path d="M180 100 208 116" />
          <circle cx="108" cy="123" r="3" fill={ink} />
          <circle cx="118" cy="132" r="2.5" fill={ink} />
          <circle cx="206" cy="121" r="3" fill={ink} />
          <path d="M235 55 258 40 250 66 272 66 244 90 250 66Z" fill="#FFD23F" stroke={ink} />
        </g>
      );
    case "dicas":
      return (
        <g stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M110 130 170 60 230 130Z" fill="#FBF5FF" />
          <path d="M150 130v-30" />
          <circle cx="255" cy="65" r="16" />
          <path d="M255 65v-16M255 65h16" />
          <path d="M95 100h16M89 112h16" />
        </g>
      );
    default:
      return (
        <g stroke={ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="105" y="55" width="90" height="70" rx="4" fill="#FBF5FF" />
          <circle cx="150" cy="50" r="6" fill="#FF2E88" stroke={ink} />
          <path d="M120 80h50M120 95h35M120 110h42" />
          <path d="M225 60 250 50 245 78 275 72 240 100 245 78Z" fill="#00D9E9" stroke={ink} />
        </g>
      );
  }
}

export default function PillarArt({ pillar, className }) {
  const { bg, ink } = PALETTE[pillar] ?? PALETTE.mural;
  return (
    <svg viewBox="0 0 360 180" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="360" height="180" fill={bg} />
      <g opacity="0.16">
        <circle cx="30" cy="150" r="60" fill={ink} />
        <circle cx="335" cy="20" r="45" fill={ink} />
      </g>
      <Scene pillar={pillar} ink={ink} />
    </svg>
  );
}
