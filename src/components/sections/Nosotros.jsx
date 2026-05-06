export default function Nosotros() {
  const features = [
    {
      title: 'Experiencia',
      description: 'Más de 30 años brindando soluciones en ortopedia e insumos biomédicos',
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe atención específica según sus necesidades individuales',
    },
    {
      title: 'Especialistas',
      description: 'Equipo profesional altamente capacitado y certificado',
    },
    {
      title: 'Confianza',
      description: 'Respaldados por la confianza de miles de pacientes satisfechos',
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Placeholder Visual Izquierda */}
          <div className="flex items-center justify-center animate-fade-in order-2 lg:order-1">
            <div className="w-full aspect-square lg:aspect-auto lg:h-[400px] bg-white rounded-2xl flex items-center justify-center border border-medical-gray shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-20">🏥</div>
                <p className="text-gray-400 text-lg">Imagen institucional</p>
                <p className="text-gray-300 text-sm mt-2">Equipo y especialistas</p>
              </div>
            </div>
          </div>

          {/* Contenido Derecha */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Somos una institución especializada en ortopedia, insumos biomédicos y cirugía, comprometida con la salud integral de nuestros pacientes. Nuestra trayectoria es el reflejo de nuestra dedicación y profesionalismo.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white rounded-lg border border-medical-gray hover:border-medical-dark transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-medical-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
