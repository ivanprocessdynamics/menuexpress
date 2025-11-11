'use client';

import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Zap, Camera, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const clientLogos = [
    'Restaurante A',
    'Bistro B',
    'Café C',
    'Trattoria D',
    'Grill E',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #bfa094 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            {/* Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-serif"
              >
                Haz que tus platos{' '}
                <span className="text-primary-600">se vendan solos</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              <strong className="text-gray-900">
                Página web profesional con fotos irresistibles.
              </strong>
              <br />
              Lista en 48 h, sin complicaciones ni conocimientos técnicos.
            </motion.p>

            {/* Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">+127</span> restaurantes confían en nosotros
                </div>
              </div>
              <div className="flex items-center space-x-1 bg-green-50 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-semibold text-green-700">3 plazas disponibles esta semana</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center px-5 md:px-8 py-2.5 md:py-4 bg-primary-600 text-white text-sm md:text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1"
              >
                Quiero mi página web ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mockup Container */}
            <div className="relative">
              {/* Desktop Mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-gray-900 rounded-lg shadow-2xl p-2"
              >
                <div className="bg-white rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&fm=webp"
                    alt="Sitio web profesional para restaurante mostrando platos gourmet con fotografía profesional"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Browser Bar */}
                <div className="absolute top-2 left-2 right-2 h-8 bg-gray-800 rounded-t flex items-center px-3 space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
              </motion.div>

              {/* Mobile Mockup Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -right-5 w-32 md:w-48 bg-gray-900 rounded-2xl shadow-2xl p-1.5"
              >
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80&fm=webp"
                    alt="Carta digital responsive en teléfono móvil con fotos de hamburguesa gourmet"
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
