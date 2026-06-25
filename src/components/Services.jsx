export default function Services() {
  const servicios = [
    {
      titulo: "Derecho Familiar",
      descripcion:
        "Divorcios, custodia de menores, alimentos y sucesiones."
    },
    {
      titulo: "Derecho Laboral",
      descripcion:
        "Despidos injustificados, liquidaciones y demandas laborales."
    },
    {
      titulo: "Derecho Civil",
      descripcion:
        "Contratos, responsabilidad civil y cobro de obligaciones."
    },
    {
      titulo: "Derecho Comercial",
      descripcion:
        "Constitución de empresas y asesoría empresarial."
    }
  ];

  return (
    <section
      id="servicios"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Áreas de Práctica
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Servicios jurídicos especializados para personas y empresas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-gray-600">
                {servicio.descripcion}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}