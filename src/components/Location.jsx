export default function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-4">
          Nuestra Ubicación
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Visítenos o agende una cita para recibir asesoría jurídica personalizada.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            title="Mapa"
            src="https://maps.google.com/maps?q=Bogota,Colombia&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}