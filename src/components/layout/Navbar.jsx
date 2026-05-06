import { useState } from 'react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Obras Sociales', href: '#obras-sociales' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-medical-gray">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-bold text-medical-dark tracking-tight">
              ORTOPEDIA BOURBON
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-medical-dark transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-medical-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-medical-gray mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-medical-light hover:text-medical-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2 mt-4">
              <Button 
                variant="whatsapp" 
                size="sm"
                className="w-full"
                onClick={() => window.open('https://wa.me/5491234567890', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
