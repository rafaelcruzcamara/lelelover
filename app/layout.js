import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import HitCounter from "@/components/HitCounter";

export const metadata = {
  title: "Fã Clube do Lelê",
  description: "O mural oficial da turma do professor de matemática Lelê.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Nunito:wght@400;600;700;800&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-grape text-chalk min-h-screen pb-[calc(4.5rem+env(safe-area-inset-bottom))] overflow-x-hidden">
        <Header />
        <main className="max-w-xl mx-auto px-4 pt-6">{children}</main>
        <HitCounter />
        <NavBar />
      </body>
    </html>
  );
}
