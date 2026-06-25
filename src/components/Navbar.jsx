export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Abogado & Asociados
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#inicio" className="hover:text-yellow-400">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-yellow-400">
            Servicios
          </a>

          <a href="#nosotros" className="hover:text-yellow-400">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-yellow-400">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}