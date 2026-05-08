import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-white">
      {/* Banner con imagen de ancho completo */}
      <div className="w-full h-64 lg:h-80 overflow-hidden">
        <img 
          src="/images/hero.png" 
          alt="Especialistas en tu salud"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido centrado */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Título */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-medical-dark leading-tight mb-6 animate-fade-in-up">
            Especialistas en tu salud y bienestar
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up">
            Con más de 30 años de experiencia, brindamos soluciones integrales en ortopedia, insumos biomédicos y atención personalizada para tu recuperación.
          </p>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
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
              Ver Clientes
            </Button>
          </div>

          {/* Puntos destacados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-medical-dark">30+</div>
              <div className="text-xs md:text-sm text-gray-600 mt-2">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-medical-dark">Especialistas</div>
              <div className="text-xs md:text-sm text-gray-600 mt-2">Profesionales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-medical-dark">100%</div>
              <div className="text-xs md:text-sm text-gray-600 mt-2">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
