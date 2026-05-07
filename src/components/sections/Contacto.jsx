import Button from '../ui/Button';

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Comunícate con nosotros de la forma que mejor te convenga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Dirección */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-medical-light">
                  <span className="text-xl">📍</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-dark mb-1">Dirección</h3>
                <p className="text-gray-600">
                  Adolfo Alsina 1433 Piso 4 A, C1088<br />
                  Ciudad Autónoma de Buenos Aires, Argentina
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-medical-light">
                  <span className="text-xl">📞</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-dark mb-1">Teléfono</h3>
                <p className="text-gray-600">
                  <a href="tel:43814939" className="hover:text-medical-dark transition-colors">
                    4381-4939
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-medical-light">
                  <span className="text-xl">✉️</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-dark mb-1">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@ortopediabourbon.com.ar" className="hover:text-medical-dark transition-colors">
                    info@ortopediabourbon.com.ar
                  </a>
                </p>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-medical-light">
                  <span className="text-xl">🕐</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-dark mb-2">Horario de atención</h3>
                <ul className="space-y-1">
                  <li className="text-gray-600 text-sm">
                    <span>Lunes a Jueves:</span>
                    <span className="font-medium text-medical-dark ml-2">10:00 - 16:30</span>
                  </li>
                  <li className="text-gray-600 text-sm">
                    <span>Viernes:</span>
                    <span className="font-medium text-medical-dark ml-2">10:00 - 14:00</span>
                  </li>
                  <li className="text-gray-600 text-sm">
                    <span>Sábado y Domingo:</span>
                    <span className="font-medium text-medical-dark ml-2">Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mapa Interactivo */}
          <div className="animate-fade-in space-y-6">
            {/* Mapa Google Maps Embebido */}
            <div className="w-full h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-medical-gray">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7320728826364!2d-58.38073!3d-34.60546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa8d4e4e4e9%3A0xce1207f2274b27e9!2sOrtopedia%20Bourbon!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Ortopedia Bourbon"
              />
            </div>

            {/* Google Maps Rating Display */}
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-medical-gray p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-medical-dark">Google Maps</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-medical-dark">5.0</span>
                  <div className="flex gap-1">
                    <span className="text-2xl text-yellow-400">★</span>
                    <span className="text-2xl text-yellow-400">★</span>
                    <span className="text-2xl text-yellow-400">★</span>
                    <span className="text-2xl text-yellow-400">★</span>
                    <span className="text-2xl text-yellow-400">★</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Calificación de Ortopedia Bourbon</p>
                <a 
                  href="https://maps.app.goo.gl/ehtuLhQnMTMjpggq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-medical-dark hover:text-white bg-medical-light hover:bg-medical-dark rounded-lg transition-colors text-sm font-medium"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
