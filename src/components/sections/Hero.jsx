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

          {/* Imagen Visual Derecha */}
          <div className="flex items-center justify-center animate-fade-in">
            <div className="w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-medical-gray">
              <img 
                src="/images/hero.png" 
                alt="Especialistas en tu salud"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
