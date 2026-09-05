export function IconHome({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function IconGallery({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="14" height="14" rx="1.5" />
      <circle cx="8" cy="9" r="1.6" />
      <path d="M3 15.5 8 12l3 2.5 3-3 3 2.5" />
      <path d="M20 8v10a1.5 1.5 0 0 1-1.5 1.5H8" />
    </svg>
  );
}

export function IconMail({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconArrowLeft({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

export function IconStar({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5 14.9 9l7 .6-5.3 4.6 1.6 6.8L12 17.7 5.8 21l1.6-6.8L2.1 9.6l7-.6L12 2.5Z" />
    </svg>
  );
}

export function IconPhoto({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M3 17 9 12l4 3.5 3-2.5 5 4" />
    </svg>
  );
}
