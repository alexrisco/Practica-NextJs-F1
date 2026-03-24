"use client";

const ESCUDERIAS_2026 = [
  {
    id: 1,
    nombre: "Red Bull Racing",
    motor: "Ford-Red Bull",
    sede: "Milton Keynes, UK",
    color: "bg-blue-900",
  },
  {
    id: 2,
    nombre: "Ferrari",
    motor: "Ferrari",
    sede: "Maranello, Italia",
    color: "bg-red-700",
  },
  {
    id: 3,
    nombre: "Mercedes-AMG",
    motor: "Mercedes",
    sede: "Brackley, UK",
    color: "bg-cyan-600",
  },
  {
    id: 4,
    nombre: "McLaren",
    motor: "Mercedes",
    sede: "Woking, UK",
    color: "bg-orange-500",
  },
  {
    id: 5,
    nombre: "Aston Martin",
    motor: "Honda",
    sede: "Silverstone, UK",
    color: "bg-green-800",
  },
  {
    id: 6,
    nombre: "Williams Racing",
    motor: "Mercedes",
    sede: "Grove, UK",
    color: "bg-blue-500",
  }, // El equipo de Sainz
  {
    id: 7,
    nombre: "Cadillac F1 Team",
    motor: "GM-Cadillac",
    sede: "Detroit, USA",
    color: "bg-zinc-600",
  }, // El equipo de Checo
  {
    id: 8,
    nombre: "Audi F1 Team",
    motor: "Audi",
    sede: "Neuburg, Alemania",
    color: "bg-zinc-800",
  },
];

export default function EscuderiasPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-5xl font-black italic uppercase mb-12 border-b-4 border-red-600 pb-4">
        Constructores <span className="text-red-600 italic">2026</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ESCUDERIAS_2026.map((equipo) => (
          <div
            key={equipo.id}
            className="group flex flex-col md:flex-row bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-600 transition-all"
          >
            {/* Franja de color del equipo */}
            <div
              className={`w-full md:w-4 ${equipo.color} h-4 md:h-auto`}
            ></div>

            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-red-500 transition-colors">
                    {equipo.nombre}
                  </h2>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">
                    Motor: {equipo.motor}
                  </p>
                </div>
                <div className="text-zinc-800 font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                  {equipo.id}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-zinc-400 text-sm italic">
                <span className="w-4 h-[1px] bg-zinc-700"></span>
                Sede: {equipo.sede}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-red-600/10 border border-red-600/20 rounded-lg">
        <p className="text-red-500 text-sm font-bold text-center italic">
          REGLAMENTO 2026: Nueva unidad de potencia con 50% de energía eléctrica
          y combustibles 100% sostenibles.
        </p>
      </div>
    </div>
  );
}
