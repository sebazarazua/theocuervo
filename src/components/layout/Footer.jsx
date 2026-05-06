export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-dark text-white border-t border-medical-gray">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ortopedia Bourbon</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas en ortopedia, insumos biomédicos y cirugía con más de 30 años de experiencia.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#productos" className="text-gray-300 hover:text-white transition-colors">Productos</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Datos Legales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <p className="text-gray-300 text-sm">
              Mantén tus datos actualizados y contáctanos para más información sobre nuestros servicios.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Ortopedia Bourbon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
