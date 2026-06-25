export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/fotoabogado.jpg"
            alt="Abogado"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>
          <p className="text-yellow-400 font-semibold mb-4">
            Sobre Nosotros
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Comprometidos con la defensa de sus derechos
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Nuestro despacho jurídico ofrece asesoría legal
            personalizada, representación judicial y acompañamiento
            integral para personas y empresas.
          </p>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                10+
              </h3>
              <p>Años de experiencia</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                500+
              </h3>
              <p>Casos atendidos</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                95%
              </h3>
              <p>Casos exitosos</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                1000+
              </h3>
              <p>Clientes satisfechos</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}