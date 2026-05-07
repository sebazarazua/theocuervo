import Card from '../ui/Card';

export default function ObrasSociales() {
  const obras = [
    { name: 'OPSECON', image: '/images/obras-sociales/opsecon.jpg' },
    { name: 'OSDE', image: '/images/obras-sociales/osde.jpg' },
    { name: 'Mediplus', image: '/images/obras-sociales/mediplus.jpg' },
    { name: 'Sancor', image: '/images/obras-sociales/sancor.jpg' },
    { name: 'IOMA', image: '/images/obras-sociales/ioma.jpg' },
    { name: 'Farmaplan', image: '/images/obras-sociales/farmaplan.jpg' },
    { name: 'Yoga', image: '/images/obras-sociales/yoga.jpg' },
    { name: 'Cartilla Privada', image: '/images/obras-sociales/cartilla-privada.jpg' },
  ];

  return (
    <section id="obras-sociales" className="py-20 lg:py-32 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Obras Sociales y Cartillas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las principales obras sociales y cartillas médicas para facilitarte el acceso a nuestros servicios.
          </p>
        </div>

        {/* Obras Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {obras.map((obra, idx) => (
            <Card 
              key={idx}
              variant="elevated"
              className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Imagen de la Obra Social */}
              <div className="w-full h-32 bg-medical-light flex items-center justify-center border-b border-medical-gray overflow-hidden">
                {obra.image ? (
                  <img 
                    src={obra.image} 
                    alt={obra.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-3xl opacity-30">🏢</div>
                )}
              </div>

              {/* Nombre de la Obra Social */}
              <div className="p-4 flex items-center justify-center flex-1">
                <h3 className="text-center text-sm lg:text-base font-semibold text-medical-dark">
                  {obra.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Info destacada */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-medical-gray shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-dark mb-2">8+</div>
              <p className="text-gray-600">Obras sociales principales</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-dark mb-2">100%</div>
              <p className="text-gray-600">Cobertura verificada</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-dark mb-2">24/7</div>
              <p className="text-gray-600">Consulta tus cartillas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
