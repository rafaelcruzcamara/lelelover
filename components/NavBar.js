"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconGallery, IconMail } from "./icons";

const PAGES = [
  { href: "/", label: "Início", Icon: IconHome },
  { href: "/galeria", label: "Galeria", Icon: IconGallery },
  { href: "/recados", label: "Recados", Icon: IconMail },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 bg-grape-deep border-t-[3px] border-ink pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-xl mx-auto flex">
        {PAGES.map(({ href, label, Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 font-pixel text-[8px] uppercase ${
                active ? "text-sun" : "text-chalk/60"
              }`}
            >
              <Icon className={`w-6 h-6 ${active ? "text-sun" : "text-chalk/60"}`} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
