export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
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

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/573134623765?text=Hola,%20quiero%20solicitar%20una%20consulta%20jurídica."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Solicitar Consulta
              </a>

              <a
                href="#servicios"
                className="border border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="/fotoabogado.jpg"
              alt="Abogado"
              className="relative w-full max-w-sm rounded-3xl shadow-2xl border-2 border-yellow-500/30 object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
            <p className="text-gray-400">Años de experiencia</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
            <p className="text-gray-400">Casos atendidos</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">98%</h3>
            <p className="text-gray-400">Casos exitosos</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-400">Atención</p>
          </div>

        </div>

      </div>
    </section>
  );
}