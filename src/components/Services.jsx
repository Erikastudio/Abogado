import { FaBalanceScale, FaBriefcase, FaFileContract, FaBuilding } from "react-icons/fa";

export default function Services() {
  const servicios = [
    {
      titulo: "Derecho Familiar",
      descripcion: "Divorcios, custodia de menores, alimentos y sucesiones.",
      icono: FaBalanceScale,
    },
    {
      titulo: "Derecho Laboral",
      descripcion: "Despidos injustificados, liquidaciones y demandas laborales.",
      icono: FaBriefcase,
    },
    {
      titulo: "Derecho Civil",
      descripcion: "Contratos, responsabilidad civil y cobro de obligaciones.",
      icono: FaFileContract,
    },
    {
      titulo: "Derecho Comercial",
      descripcion: "Constitución de empresas y asesoría empresarial.",
      icono: FaBuilding,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Áreas de Práctica
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Servicios jurídicos especializados para personas y empresas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => {
            const Icono = servicio.icono;

            return (
              <div
                key={index}
                className="bg-gradient-to-b from-white/10 to-white/5 border border-yellow-500/20 p-8 rounded-3xl backdrop-blur shadow-xl hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Icono className="text-5xl text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-white">
                  {servicio.titulo}
                </h3>

                <p className="text-gray-300 text-center">
                  {servicio.descripcion}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}