import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-yellow-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#inicio"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          <span className="text-yellow-400">⚖</span> Abogado & Asociados
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <a href="#inicio" className="hover:text-yellow-400 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-yellow-400 transition">
            Servicios
          </a>

          <a href="#nosotros" className="hover:text-yellow-400 transition">
            Nosotros
          </a>

          <a href="#contacto" className="hover:text-yellow-400 transition">
            Contacto
          </a>
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-yellow-500/20">
          <a
            href="#inicio"
            className="block px-6 py-4 text-white hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="block px-6 py-4 text-white hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="block px-6 py-4 text-white hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="block px-6 py-4 text-white hover:bg-slate-800"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}