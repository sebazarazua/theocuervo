import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="inicio" className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierda */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-medical-dark leading-tight mb-6">
              Especialistas en tu salud y bienestar
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Con más de 30 años de experiencia, brindamos soluciones integrales en ortopedia, insumos biomédicos y atención personalizada para tu recuperación.
            </p>
            
            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('obras-sociales').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Obras Sociales
              </Button>
            </div>

            {/* Puntos destacados */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-dark">30+</div>
                <div className="text-sm text-gray-600 mt-2">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-dark">Especialistas</div>
                <div className="text-sm text-gray-600 mt-2">Profesionales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-dark">100%</div>
                <div className="text-sm text-gray-600 mt-2">Dedicación</div>
              </div>
            </div>
          </div>

          {/* Placeholder Visual Derecha */}
          <div className="flex items-center justify-center animate-fade-in">
            <div className="w-full aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-medical-gray to-medical-light rounded-2xl flex items-center justify-center border border-medical-gray">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-20">📋</div>
                <p className="text-gray-400 text-lg">Espacio para imagen médica</p>
                <p className="text-gray-300 text-sm mt-2">Aquí irá una composición visual profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
