import Card from '../ui/Card';

export default function ObrasSociales() {
  const obras = [
    { name: 'OPSECON', highlighted: true },
    { name: 'OSDE' },
    { name: 'Mediplus' },
    { name: 'Sancor' },
    { name: 'IOMA' },
    { name: 'Farmaplan' },
    { name: 'Yoga' },
    { name: 'Cartilla Privada' },
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
              variant={obra.highlighted ? 'elevated' : 'default'}
              className={`
                flex items-center justify-center p-8 min-h-[140px] 
                transition-all duration-300 hover:shadow-md
                animate-fade-in-up
                ${obra.highlighted ? 'border-2 border-medical-dark lg:col-span-2 lg:row-span-2' : ''}
              `}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="text-center">
                {obra.highlighted ? (
                  <>
                    <div className="text-5xl font-bold text-medical-dark mb-2">
                      {obra.name.split('').length}
                    </div>
                    <h3 className="text-2xl font-bold text-medical-dark">
                      {obra.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">Destacada</p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-medical-light rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="text-lg opacity-30">🏢</div>
                    </div>
                    <h3 className="text-sm lg:text-base font-semibold text-medical-dark">
                      {obra.name}
                    </h3>
                  </>
                )}
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
