import { ChefHat } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          {/* Company Info */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <ChefHat className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white font-serif">
              Web Dynamics
            </span>
          </div>
          <p className="text-sm max-w-2xl mx-auto">
            Creamos sitios web profesionales especializados para restaurantes que
            generan resultados reales.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm mb-2">
            © {currentYear} Web Dynamics | Expertos en páginas web para restaurantes locales de Cataluña.
          </p>
          <p className="text-xs text-gray-500">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
