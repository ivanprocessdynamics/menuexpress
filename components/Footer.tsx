'use client';

import { ChefHat, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <ChefHat className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-serif">Menu Express</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Plantillas profesionales de sitios web especializadas para restaurantes. 
              Diseño responsive, entrega en 48h y soporte continuo.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
              <Mail className="w-4 h-4" />
              <span>hola@menuexpress.es</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Barcelona, España</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#estilos" className="hover:text-white transition-colors">Plantillas</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#preguntas" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="opacity-50">Blog (Próximamente)</span></li>
              <li><span className="opacity-50">Guías (Próximamente)</span></li>
              <li><span className="opacity-50">Casos de Éxito</span></li>
              <li><span className="opacity-50">Soporte</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Menu Express. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="opacity-50">Política de Privacidad</span>
            <span className="opacity-50">Términos de Servicio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
