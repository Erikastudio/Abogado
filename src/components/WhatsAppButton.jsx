export default function WhatsAppButton() {
  const numero = "573134623765";

  const mensaje = "Hola, estoy interesado en una asesoría jurídica.";

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl font-bold hover:scale-105 transition"
    >
      WhatsApp
    </a>
  );
}