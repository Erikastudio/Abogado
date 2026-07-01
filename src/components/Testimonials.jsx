export default function Testimonials() {
  const testimonios = [
    {
      nombre: "María González",
      texto:
        "Recibí una excelente asesoría durante mi proceso familiar. Siempre estuvieron atentos y resolvieron todas mis dudas.",
    },
    {
      nombre: "Carlos Ramírez",
      texto:
        "Un servicio muy profesional y transparente. Recomiendo totalmente este despacho jurídico.",
    },
    {
      nombre: "Laura Sánchez",
      texto:
        "Gracias a su acompañamiento pude resolver mi caso laboral de manera satisfactoria. Excelente atención.",
    },
  ];

  return (
    <section
      data-aos="zoom-in"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Lo que dicen nuestros clientes
        </h2>

        <p className="text-center text-gray-400 mb-16">
          La confianza de nuestros clientes es nuestro mayor respaldo.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonios.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/10 to-white/5 border border-yellow-500/20 rounded-3xl p-8 backdrop-blur shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-yellow-400 text-3xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 italic mb-6">
                "{item.texto}"
              </p>

              <h3 className="font-bold text-white">
                {item.nombre}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}