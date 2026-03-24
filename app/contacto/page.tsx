"use client"; // NECESARIO para que el formulario responda al clic

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí simulamos que enviamos los datos a la escudería
    setEnviado(true);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto min-h-screen">
      <header className="mb-10">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">
          Join the <span className="text-red-600">Paddock</span>
        </h1>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-2">
          Contacta con el equipo técnico de F1 2026
        </p>
      </header>

      {enviado ? (
        // MENSAJE DE ÉXITO (Lo que sale después de enviar)
        <div className="bg-green-600/20 border border-green-600 p-10 rounded-lg text-center animate-in fade-in zoom-in duration-500">
          <h2 className="text-3xl font-black uppercase italic text-green-500">
            ¡Recibido, {nombre}!
          </h2>
          <p className="mt-4 text-zinc-300 font-medium">
            Tu solicitud ha sido enviada al muro de boxes. Nos pondremos en
            contacto contigo antes del próximo GP.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="mt-8 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        // FORMULARIO DE CONTACTO
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-2xl"
        >
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 italic">
              Nombre Completo
            </label>
            <input
              required
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Ayrton Senna"
              className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 italic">
              Email de contacto
            </label>
            <input
              required
              type="email"
              placeholder="piloto@f1-2026.com"
              className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 italic">
              Escudería de interés
            </label>
            <select className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded text-white focus:outline-none focus:border-red-600 transition-colors">
              <option>Williams Racing (Sainz Team)</option>
              <option>Cadillac F1 Team (Checo Team)</option>
              <option>Ferrari</option>
              <option>Red Bull Racing</option>
              <option>Audi F1</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2 italic">
              Mensaje / CV
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntanos por qué deberías estar en la parrilla..."
              className="w-full bg-zinc-800 border border-zinc-700 p-4 rounded text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-4 rounded shadow-lg shadow-red-600/20 transition-all active:scale-95"
          >
            Enviar Solicitud al Paddock
          </button>
        </form>
      )}
    </div>
  );
}
