import Card from '../ui/Card';

export default function Productos() {
  const categories = [
    {
      title: 'Sillas de Ruedas',
      description: 'Amplia variedad de sillas de ruedas manuales y eléctricas adaptadas a tus necesidades',
      image: '/images/sillas-de-ruedas.png',
      icon: '♿',
    },
    {
      title: 'Ayudas para Caminar',
      description: 'Muletas, bastones y andadores de última tecnología para tu movilidad',
      image: '/images/ayudas-caminar.png',
      icon: '🚶',
    },
    {
      title: 'Productos para Baño',
      description: 'Accesorios y sistemas de seguridad para el baño adaptados',
      image: '/images/productos-bano.png',
      icon: '🛁',
    },
    {
      title: 'Insumos Médicos',
      description: 'Vendajes, soportes ortopédicos y equipamiento médico especializado',
      image: '/images/insumos-medicos.png',
      icon: '⚕️',
    },
    {
      title: 'Dormitorio y Rehabilitación',
      description: 'Camas especiales, almohadas ortopédicas y equipos de rehabilitación',
      image: '/images/dormitorio-rehabilitacion.png',
      icon: '🛏️',
    },
    {
      title: 'Accesorios Ortopédicos',
      description: 'Completo catálogo de accesorios y componentes especializados',
      image: '/images/accesorios-ortopedicos.png',
      icon: '🔧',
    },
  ];

  return (
    <section id="productos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con una amplia gama de productos especializados en ortopedia e insumos biomédicos para tu bienestar integral.
          </p>
        </div>

        {/* Productos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <Card 
              key={idx}
              variant="elevated"
              className="flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Imagen del Producto */}
              <div className="w-full h-48 bg-medical-light flex items-center justify-center border-b border-medical-gray overflow-hidden">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl opacity-30">{category.icon}</div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-medical-dark mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Link o Action */}
                <div className="mt-6 pt-4 border-t border-medical-gray">
                  <button className="text-medical-dark font-semibold text-sm hover:text-medical-accent transition-colors duration-300 inline-flex items-center gap-2">
                    Conocer más
                    <span>→</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
