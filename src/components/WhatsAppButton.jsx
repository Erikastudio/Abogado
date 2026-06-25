export default function WhatsAppButton() {
  const numero = "573001234567"; // cámbialo por el real

  return (
    <a
      href={`https://wa.me/${numero}?text=Hola,%20necesito%20asesoría%20jurídica`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl font-bold hover:scale-105 transition"
    >
      WhatsApp
    </a>
  );
}