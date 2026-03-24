import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "F1 World Championship 2026",
  description: "Plataforma oficial de seguimiento de la nueva era de Fórmula 1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white antialiased">
        {/* NAVBAR CON MÁXIMA VISIBILIDAD */}
        <nav className="sticky top-0 z-50 w-full border-b-2 border-red-600 bg-black/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(255,0,0,0.1)]">
          <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
            {/* LOGO EN BLANCO PURO */}
            <Link href="/" className="group flex flex-col">
              <span className="text-4xl font-black italic tracking-tighter leading-none uppercase text-white drop-shadow-md">
                F1<span className="text-red-600">APP</span>
              </span>
              <span className="h-1.5 w-0 bg-white transition-all duration-300 group-hover:w-full mt-1"></span>
            </Link>

            {/* MENÚ CON LETRAS MÁS GRANDES Y BLANCAS */}
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-10 text-[13px] font-black uppercase tracking-[0.15em] text-white">
                <Link
                  href="/"
                  className="hover:text-red-500 transition-colors drop-shadow-sm"
                >
                  Inicio
                </Link>
                <Link
                  href="/pilotos"
                  className="hover:text-red-500 transition-colors drop-shadow-sm"
                >
                  Pilotos
                </Link>
                <Link
                  href="/escuderias"
                  className="hover:text-red-500 transition-colors drop-shadow-sm"
                >
                  Escuderías
                </Link>
                <Link
                  href="/calendario"
                  className="hover:text-red-500 transition-colors drop-shadow-sm"
                >
                  Calendario
                </Link>
              </div>

              {/* BOTÓN MÁS LLAMATIVO */}
              <Link
                href="/contacto"
                className="bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-90"
              >
                Contacto
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="py-12 border-t border-white/10 bg-black text-center">
          <p className="text-white font-bold text-[10px] uppercase tracking-[0.4em] opacity-50">
            © 2026 Formula 1 Digital Experience
          </p>
        </footer>
      </body>
    </html>
  );
}
