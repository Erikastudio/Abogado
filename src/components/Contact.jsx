import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const texto = `Hola, soy ${form.nombre}.
Correo: ${form.correo}

Mensaje:
${form.mensaje}`;

    const url = `https://wa.me/573134623765?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-4">
          Contáctenos
        </h2>

        <p className="text-gray-400 mb-12">
          Solicite su consulta jurídica hoy mismo
        </p>

        <form
          onSubmit={enviarWhatsApp}
          className="max-w-2xl mx-auto grid gap-6"
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg outline-none"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="p-4 bg-white/5 border border-white/10 text-white rounded-lg h-40 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black py-4 rounded-lg font-bold hover:scale-105 transition"
          >
            Enviar por WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}