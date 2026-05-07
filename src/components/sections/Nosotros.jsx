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
    <section id="nosotros" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Contenedor con imagen de fondo */}
        <div 
          className="relative rounded-2xl overflow-hidden min-h-[700px] lg:min-h-[800px] flex items-center"
          style={{
            backgroundImage: 'url(/images/nosotros.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        >
          {/* Overlay para mejor legibilidad del contenido derecho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white"></div>
          
          {/* Contenido encima del fondo - Lado derecho */}
          <div className="relative z-10 w-full lg:w-1/2 lg:ml-auto px-6 lg:px-12 py-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6 animate-fade-in-up">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed animate-fade-in-up">
              Somos una institución especializada en ortopedia, insumos biomédicos y cirugía, comprometida con la salud integral de nuestros pacientes. Nuestra trayectoria es el reflejo de nuestra dedicación y profesionalismo.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
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
