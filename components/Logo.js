export default function Logo({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="#241040"
        stroke="#FFD23F"
        strokeWidth="3"
        strokeDasharray="6 5"
      />
      <circle cx="50" cy="50" r="36" fill="#3B1F63" stroke="#1A1025" strokeWidth="3" />

      <g transform="translate(50,47)">
        <path
          d="M-23 -6 0 -17 23 -6 0 5Z"
          fill="#FBF5FF"
          stroke="#1A1025"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M-12 -1 -12 11c0 4.5 24 4.5 24 0V-1"
          fill="none"
          stroke="#FBF5FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M23 -6 23 9" stroke="#FF2E88" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="23" cy="-6" r="2.6" fill="#FF2E88" />
      </g>

      <circle cx="26" cy="72" r="2.4" fill="#00D9E9" />
      <circle cx="74" cy="72" r="2.4" fill="#00D9E9" />
      <circle cx="50" cy="76" r="2" fill="#FFD23F" />
    </svg>
  );
}
