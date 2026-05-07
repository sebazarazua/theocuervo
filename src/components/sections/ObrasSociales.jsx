import Card from '../ui/Card';

export default function ObrasSociales() {
  const obras = [
    { name: 'OPSECON', image: '/images/obras-sociales/opsecon.png' },
    { name: 'OSUTHGRA', image: '/images/obras-sociales/osuthgra.png' },
    { name: 'DAS', image: '/images/obras-sociales/das.png' },
    { name: 'SIB', image: '/images/obras-sociales/sib.png' },
    { name: 'ANDAR', image: '/images/obras-sociales/andar.png' },
    { name: 'ART', image: '/images/obras-sociales/art.png' },
    { name: 'CdC', image: '/images/obras-sociales/cdc.png' },
    { name: 'OMINT', image: '/images/obras-sociales/omint.png' },
  ];

  return (
    <section id="obras-sociales" className="py-20 lg:py-32 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todos nuestros clientes avalan nuestro profesionalismo
          </p>
        </div>

        {/* Obras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {obras.map((obra, idx) => (
            <Card 
              key={idx}
              variant="default"
              className="flex items-center justify-center h-40 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] animate-fade-in-up border-0 shadow-none"
              style={{ 
                animationDelay: `${idx * 0.05}s`
              }}
            >
              {/* Imagen de la Obra Social */}
              {obra.image ? (
                <img 
                  src={obra.image} 
                  alt={obra.name}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <div className="text-3xl opacity-30">🏢</div>
              )}
            </Card>
          ))}
        </div>

        {/* Info destacada */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-medical-gray shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-dark mb-2">8+</div>
              <p className="text-gray-600">Clientes principales</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-dark mb-2">Confianza</div>
              <p className="text-gray-600">De nuestros clientes</p>
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
