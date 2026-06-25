export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-yellow-400 font-semibold mb-4">
            Asesoría Jurídica Profesional
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Defendemos sus derechos con experiencia y compromiso
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Brindamos asesoría y representación legal en
            derecho civil, laboral, familiar y comercial.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
              Solicitar Consulta
            </button>

            <button className="border border-white px-8 py-4 rounded-lg">
              Conocer Servicios
            </button>
          </div>
        </div>

        <div>
          <img
            src="/fotoabogado.jpg"
            alt="Abogado"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}