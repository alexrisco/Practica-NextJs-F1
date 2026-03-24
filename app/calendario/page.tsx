"use client";

import { useState } from "react";

// Calendario Completo F1 2026 (Proyectado)
const CALENDARIO_COMPLETO = [
  {
    id: 1,
    fecha: "15 MAR",
    gp: "GP de Australia",
    circuito: "Albert Park",
    estado: "Finalizado",
  },
  {
    id: 2,
    fecha: "22 MAR",
    gp: "GP de China",
    circuito: "Shanghai",
    estado: "Finalizado",
  },
  {
    id: 3,
    fecha: "05 ABR",
    gp: "GP de Japón",
    circuito: "Suzuka",
    estado: "En proceso",
  },
  {
    id: 4,
    fecha: "19 ABR",
    gp: "GP de Baréin",
    circuito: "Sakhir",
    estado: "Próximamente",
  },
  {
    id: 5,
    fecha: "03 MAY",
    gp: "GP de Miami",
    circuito: "Miami International",
    estado: "Próximamente",
  },
  {
    id: 6,
    fecha: "17 MAY",
    gp: "GP de Emilia-Romaña",
    circuito: "Imola",
    estado: "Próximamente",
  },
  {
    id: 7,
    fecha: "24 MAY",
    gp: "GP de Mónaco",
    circuito: "Monte Carlo",
    estado: "Próximamente",
  },
  {
    id: 8,
    fecha: "31 MAY",
    gp: "GP de España (Madrid)",
    circuito: "IFEMA Madrid",
    estado: "Próximamente",
  },
  {
    id: 9,
    fecha: "14 JUN",
    gp: "GP de Canadá",
    circuito: "Gilles Villeneuve",
    estado: "Próximamente",
  },
  {
    id: 10,
    fecha: "28 JUN",
    gp: "GP de Austria",
    circuito: "Red Bull Ring",
    estado: "Próximamente",
  },
  {
    id: 11,
    fecha: "05 JUL",
    gp: "GP de Gran Bretaña",
    circuito: "Silverstone",
    estado: "Próximamente",
  },
  {
    id: 12,
    fecha: "19 JUL",
    gp: "GP de Bélgica",
    circuito: "Spa-Francorchamps",
    estado: "Próximamente",
  },
  {
    id: 13,
    fecha: "26 JUL",
    gp: "GP de Hungría",
    circuito: "Hungaroring",
    estado: "Próximamente",
  },
  {
    id: 14,
    fecha: "23 AGO",
    gp: "GP de Países Bajos",
    circuito: "Zandvoort",
    estado: "Próximamente",
  },
  {
    id: 15,
    fecha: "30 AGO",
    gp: "GP de Italia",
    circuito: "Monza",
    estado: "Próximamente",
  },
  {
    id: 16,
    fecha: "13 SEP",
    gp: "GP de Azerbaiyán",
    circuito: "Baku City",
    estado: "Próximamente",
  },
  {
    id: 17,
    fecha: "20 SEP",
    gp: "GP de Singapur",
    circuito: "Marina Bay",
    estado: "Próximamente",
  },
  {
    id: 18,
    fecha: "04 OCT",
    gp: "GP de EE.UU.",
    circuito: "COTA Austin",
    estado: "Próximamente",
  },
  {
    id: 19,
    fecha: "18 OCT",
    gp: "GP de México",
    circuito: "Hermanos Rodríguez",
    estado: "Próximamente",
  },
  {
    id: 20,
    fecha: "25 OCT",
    gp: "GP de Brasil",
    circuito: "Interlagos",
    estado: "Próximamente",
  },
  {
    id: 21,
    fecha: "08 NOV",
    gp: "GP de Las Vegas",
    circuito: "Las Vegas Strip",
    estado: "Próximamente",
  },
  {
    id: 22,
    fecha: "22 NOV",
    gp: "GP de Qatar",
    circuito: "Lusail",
    estado: "Próximamente",
  },
  {
    id: 23,
    fecha: "29 NOV",
    gp: "GP de Abu Dabi",
    circuito: "Yas Marina",
    estado: "Próximamente",
  },
];

export default function CalendarioPage() {
  const [carreras, setCarreras] = useState(CALENDARIO_COMPLETO);

  const cambiarEstado = (id: number) => {
    setCarreras(
      carreras.map((c) => {
        if (c.id === id) {
          const estados = ["Próximamente", "En proceso", "Finalizado"];
          const indexActual = estados.indexOf(c.estado);
          const siguiente = estados[(indexActual + 1) % estados.length];
          return { ...c, estado: siguiente };
        }
        return c;
      }),
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-black italic mb-8 border-l-8 border-red-600 pl-4 uppercase tracking-tighter">
        Calendario <span className="text-red-600">F1 2026</span>
      </h1>

      <div className="space-y-3">
        {carreras.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 text-center">
                <p className="text-red-600 font-black text-lg leading-none">
                  {c.fecha.split(" ")}
                </p>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">
                  {c.fecha.split(" ")}
                </p>
              </div>

              <div className="border-l border-zinc-800 pl-6">
                <h2 className="text-sm font-black uppercase text-white tracking-wide">
                  {c.gp}
                </h2>
                <p className="text-zinc-500 text-xs italic font-mono">
                  {c.circuito}
                </p>
              </div>
            </div>

            <button
              onClick={() => cambiarEstado(c.id)}
              className={`min-w-[120px] py-2 text-[10px] font-black uppercase tracking-widest rounded transition-all ${
                c.estado === "Finalizado"
                  ? "bg-zinc-800 text-zinc-500"
                  : c.estado === "En proceso"
                    ? "bg-yellow-500 text-black animate-pulse"
                    : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {c.estado}
            </button>
          </div>
        ))}
      </div>

      <footer className="mt-10 py-6 border-t border-zinc-800 text-center">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
          Total: 23 Grands Prix | Temporada 2026
        </p>
      </footer>
    </div>
  );
}
