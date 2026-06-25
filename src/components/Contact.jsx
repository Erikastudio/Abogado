export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-4">
          Contáctenos
        </h2>

        <p className="text-gray-400 mb-12">
          Solicite su consulta jurídica hoy mismo
        </p>

        <form className="max-w-2xl mx-auto grid gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Correo"
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg outline-none"
          />

          <textarea
            placeholder="Mensaje"
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg h-40 outline-none"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black py-4 rounded-lg font-bold hover:scale-105 transition"
          >
            Enviar Mensaje
          </button>

        </form>

      </div>
    </section>
  );
}