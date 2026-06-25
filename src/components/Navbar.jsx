export default function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wide">
          Abogado & Asociados
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#inicio" className="hover:text-yellow-400 transition">Inicio</a>
          <a href="#servicios" className="hover:text-yellow-400 transition">Servicios</a>
          <a href="#nosotros" className="hover:text-yellow-400 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-yellow-400 transition">Contacto</a>
        </div>

      </div>
    </nav>
  );
}