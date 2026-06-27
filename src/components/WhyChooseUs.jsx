export default function WhyChooseUs() {
  const ventajas = [
    {
      titulo: "Atención Personalizada",
      descripcion:
        "Cada caso recibe un análisis detallado y una estrategia jurídica adaptada a sus necesidades.",
    },
    {
      titulo: "Confidencialidad",
      descripcion:
        "Toda la información de nuestros clientes es tratada con absoluta reserva y profesionalismo.",
    },
    {
      titulo: "Compromiso",
      descripcion:
        "Acompañamos cada proceso legal con responsabilidad, transparencia y dedicación.",
    },
    {
      titulo: "Experiencia",
      descripcion:
        "Brindamos soluciones jurídicas eficientes basadas en el conocimiento y la práctica.",
    },
  ];

  return (
    <section
      data-aos="fade-left"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-slate-900 mb-4">
          ¿Por qué elegirnos?
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Nuestro compromiso es ofrecer un servicio jurídico de calidad,
          cercano y orientado a resultados.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {ventajas.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {item.titulo}
              </h3>

              <p className="text-gray-600">
                {item.descripcion}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}