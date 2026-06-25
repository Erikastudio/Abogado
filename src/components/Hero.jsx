export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-yellow-400 font-semibold mb-4">
            Bufete de Abogados
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Defensa legal con experiencia y resultados reales
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Asesoría jurídica profesional en derecho civil, laboral, familiar y comercial.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Solicitar Consulta
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="/fotoabogado.jpg"
            className="relative rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

      </div>
    </section>
  );
}