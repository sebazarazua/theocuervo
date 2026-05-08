import { useEffect, useRef, useState } from 'react';

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="nosotros" className="py-20 lg:py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className={`rounded-2xl bg-gray-50 border border-medical-gray p-6 lg:p-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6 text-center">
              Nosotros
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center">
              Somos una institución especializada en ortopedia, insumos biomédicos y cirugía, comprometida con la salud integral de nuestros pacientes. Nuestra trayectoria es el reflejo de nuestra dedicación y profesionalismo.
            </p>

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
