import { withBasePath } from "@/lib/basePath";

export default function Header() {
  return (
    <header className="border-b-[3px] border-ink">
      <div className="max-w-xl mx-auto px-4 pt-9 pb-7 flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/images/logo.png")}
          alt="Fã Clube do Lelê"
          className="w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-[3px_3px_0_#1A1025]"
        />
        <h1 className="sr-only">Fã Clube do Lelê</h1>
        <p className="font-pixel text-[8px] text-sun/80 tracking-[0.15em] mt-4">
          "VAMOS FAZER NOSSA HORAÇÃO PARA O..."
        </p>
      </div>
    </header>
  );
}
