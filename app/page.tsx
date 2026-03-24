import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white selection:bg-red-600">
      {/* SECTION 1: HERO - EL IMPACTO INICIAL (CIRCUITO REAL F1) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b-[12px] border-red-600">
        {/* IMAGEN DE FONDO: CIRCUITO DE NOCHE REAL (NO FÚTBOL) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1534367507873-d2d7e24c798f?q=80&w=2070&auto=format&fit=crop"
            alt="F1 Racing Night Circuit"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          {/* Degradado para que el texto se lea PERFECTO */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="bg-red-600 text-white text-[10px] font-black uppercase px-4 py-1 tracking-[0.5em] italic shadow-lg">
            Next Generation 2026
          </span>

          <h1 className="text-8xl md:text-[12rem] font-black italic uppercase tracking-tighter mt-6 leading-[0.8] drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
            F1{" "}
            <span className="text-red-600 underline decoration-white decoration-8 underline-offset-[20px]">
              2026
            </span>
          </h1>

          <p className="mt-12 text-white font-black uppercase tracking-[0.2em] text-sm md:text-lg max-w-3xl mx-auto drop-shadow-md">
            La mayor revolución técnica de la historia. Motores 100% sostenibles
            y aerodinámica activa.
            <span className="block text-red-500 mt-2">
              Sainz en Williams • Hamilton en Ferrari • Pérez en Cadillac
            </span>
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/pilotos"
              className="bg-white text-black px-12 py-5 font-black uppercase italic hover:bg-red-600 hover:text-white transition-all transform hover:-skew-x-12 shadow-2xl"
            >
              Explorar Pilotos
            </Link>
            <Link
              href="/calendario"
              className="border-4 border-white px-12 py-5 font-black uppercase italic hover:bg-white hover:text-black transition-all transform hover:-skew-x-12"
            >
              Calendario Real
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESOS RÁPIDOS (ESTILO TARJETAS DE BOXES) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card: Pilotos */}
          <Link
            href="/pilotos"
            className="group relative bg-zinc-900 border-t-8 border-red-600 p-10 hover:bg-zinc-800 transition-all shadow-2xl"
          >
            <h3 className="text-4xl font-black italic uppercase text-white group-hover:text-red-600">
              Drivers
            </h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mt-4">
              La parrilla más loca de la década
            </p>
            <div className="mt-8 inline-block text-xs font-black border-b-2 border-red-600 pb-1">
              VER PILOTOS →
            </div>
          </Link>

          {/* Card: Escuderías */}
          <Link
            href="/escuderias"
            className="group relative bg-zinc-900 border-t-8 border-white p-10 hover:bg-zinc-800 transition-all shadow-2xl"
          >
            <h3 className="text-4xl font-black italic uppercase text-white group-hover:text-zinc-400">
              Teams
            </h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mt-4">
              Nuevos motores, nuevas reglas
            </p>
            <div className="mt-8 inline-block text-xs font-black border-b-2 border-white pb-1">
              VER EQUIPOS →
            </div>
          </Link>

          {/* Card: Calendario */}
          <Link
            href="/calendario"
            className="group relative bg-zinc-900 border-t-8 border-red-600 p-10 hover:bg-zinc-800 transition-all shadow-2xl"
          >
            <h3 className="text-4xl font-black italic uppercase text-white group-hover:text-red-600">
              Schedule
            </h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mt-4">
              24 Carreras alrededor del mundo
            </p>
            <div className="mt-8 inline-block text-xs font-black border-b-2 border-red-600 pb-1">
              VER FECHAS →
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 3: DATOS TÉCNICOS 2026 */}
      <section className="bg-black py-24 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-black italic uppercase mb-16 text-center">
            Tech{" "}
            <span className="text-red-600 underline underline-offset-8 decoration-4">
              Specs
            </span>{" "}
            2026
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                100%
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
                Bio-Fuel
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                350kW
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
                Energy Recovery
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                MGU-K
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
                Triple Electric Power
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                ACTIVE
              </div>
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-red-600">
                Aerodynamics
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
