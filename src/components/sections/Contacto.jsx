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
                  Avenida Principal 123<br />
                  Buenos Aires, Argentina
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
                  <a href="tel:+541123456789" className="hover:text-medical-dark transition-colors">
                    +54 11 2345-6789
                  </a><br />
                  Atención: Lunes a Viernes 9:00-18:00
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
                  <a href="mailto:info@ortopediabourbon.com" className="hover:text-medical-dark transition-colors">
                    info@ortopediabourbon.com
                  </a>
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 pt-8 border-t border-medical-gray">
              <p className="text-gray-600 mb-4">¿Tienes una consulta rápida?</p>
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
              >
                Escribir por WhatsApp
              </Button>
            </div>
          </div>

          {/* Mapa Placeholder */}
          <div className="animate-fade-in">
            <div className="w-full h-[400px] bg-medical-light rounded-2xl flex items-center justify-center border border-medical-gray overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-20">🗺️</div>
                <p className="text-gray-400 text-lg">Mapa interactivo</p>
                <p className="text-gray-300 text-sm mt-2">Ubicación de nuestra sucursal</p>
              </div>
            </div>

            {/* Info adicional */}
            <div className="mt-6 p-6 bg-medical-light rounded-xl border border-medical-gray">
              <h3 className="font-semibold text-medical-dark mb-3">Horario de atención</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-medium text-medical-dark">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium text-medical-dark">9:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-medical-dark">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
