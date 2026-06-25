export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-4">
          Contáctenos
        </h2>

        <p className="text-gray-600 mb-12">
          Solicite su consulta jurídica hoy mismo
        </p>

        <form className="max-w-2xl mx-auto grid gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="p-4 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Correo"
            className="p-4 border rounded-lg"
          />

          <textarea
            placeholder="Mensaje"
            className="p-4 border rounded-lg h-40"
          />

          <button
            type="submit"
            className="bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800"
          >
            Enviar Mensaje
          </button>

        </form>

      </div>
    </section>
  );
}