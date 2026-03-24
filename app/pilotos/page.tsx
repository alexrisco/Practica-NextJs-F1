"use client";

import Image from "next/image";

const PILOTOS_2026 = [
  {
    id: 1,
    numero: 1,
    nombre: "Max Verstappen",
    equipo: "Red Bull",
    foto: "/pilotos/verstappen.png",
    color: "border-blue-700",
  },
  {
    id: 2,
    numero: 44,
    nombre: "Lewis Hamilton",
    equipo: "Ferrari",
    foto: "/pilotos/hamilton.png",
    color: "border-red-600",
  },
  {
    id: 3,
    numero: 14,
    nombre: "Fernando Alonso",
    equipo: "Aston Martin",
    foto: "/pilotos/alonso.png",
    color: "border-green-600",
  },
  {
    id: 4,
    numero: 4,
    nombre: "Lando Norris",
    equipo: "McLaren",
    foto: "/pilotos/norris.png",
  },
  {
    id: 5,
    numero: 55,
    nombre: "Carlos Sainz",
    equipo: "Williams",
    foto: "/pilotos/sainz.png",
    color: "border-blue-400",
  }, // CORREGIDO: Williams
  {
    id: 6,
    numero: 63,
    nombre: "George Russell",
    equipo: "Mercedes",
    foto: "/pilotos/russell.png",
    color: "border-cyan-500",
  },
  {
    id: 7,
    numero: 16,
    nombre: "Charles Leclerc",
    equipo: "Ferrari",
    foto: "/pilotos/leclerc.png",
    color: "border-red-600",
  },
  {
    id: 8,
    numero: 11,
    nombre: "Sergio Pérez",
    equipo: "Cadillac F1",
    foto: "/pilotos/perez.png",
    color: "border-zinc-400",
  }, // CORREGIDO: Cadillac
];

export default function PilotosPage() {
  return (
    // ESTE ES EL PADRE ÚNICO QUE ENVUELVE TODO
    <div className="p-8 max-w-7xl mx-auto min-h-screen text-white">
      {/* 1. HEADER */}
      <header className="mb-12 border-b border-zinc-800 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Parrilla <span className="text-red-600">Pilotos</span>
          </h1>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-sm mt-2">
            Temporada Proyectada F1 2026 | Line-up
          </p>
        </div>
        <div className="text-9xl font-black italic text-zinc-900 leading-none select-none">
          26
        </div>
      </header>

      {/* 2. GRID DE PILOTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILOTOS_2026.map((piloto) => (
          <div
            key={piloto.id}
            className={`group bg-zinc-900 border-b-4 ${piloto.color} rounded-lg overflow-hidden shadow-2xl transition-all hover:scale-105`}
          >
            <div className="relative aspect-[4/5] bg-zinc-800">
              <Image
                src={piloto.foto}
                alt={piloto.nombre}
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute bottom-0 right-0 text-9xl font-black italic text-black/40 leading-none tracking-tighter">
                {piloto.numero}
              </div>
            </div>

            <div className="p-5 border-t border-zinc-800">
              <div className="text-zinc-400 font-mono text-[11px] uppercase tracking-widest mb-1">
                {piloto.equipo}
              </div>
              <h2 className="text-2xl font-black uppercase italic tracking-tight group-hover:text-red-500 transition-colors">
                {piloto.nombre}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="mt-16 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-700 text-xs italic">
          * Line-up basado en proyecciones y contratos confirmados para la nueva
          era reglamentaria.
        </p>
      </footer>
    </div> // CIERRE DEL PADRE ÚNICO
  );
}
