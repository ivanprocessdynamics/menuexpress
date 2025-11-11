'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

export default function VisualShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const devices = [
    {
      icon: Monitor,
      name: 'Desktop',
      description: 'Experiencia completa en pantallas grandes',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Tablet,
      name: 'Tablet',
      description: 'Adaptado perfectamente a tablets',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      name: 'Móvil',
      description: 'Optimizado para smartphones',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-serif">
            Diseño <span className="text-primary-600">100% Responsive</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tu página web se ve perfecta en cualquier dispositivo. Sin excepciones.
          </p>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${device.bg} rounded-2xl mb-4`}>
                <device.icon className={`w-10 h-10 ${device.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {device.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {device.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Desktop Preview */}
              <div className="md:col-span-2 bg-gray-900 rounded-lg p-2">
                <div className="bg-white rounded h-64 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Monitor className="w-16 h-16 text-primary-600 mx-auto" />
                    <p className="text-gray-600 font-semibold">Vista Desktop</p>
                    <p className="text-sm text-gray-500">Diseño completo y espacioso</p>
                  </div>
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="bg-gray-900 rounded-lg p-2">
                <div className="bg-white rounded h-64 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Smartphone className="w-12 h-12 text-green-600 mx-auto" />
                    <p className="text-gray-600 font-semibold text-sm">Vista Móvil</p>
                    <p className="text-xs text-gray-500">Optimizado y rápido</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-white text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span>Carga ultrarrápida</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span>Touch-friendly</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span>SEO optimizado</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
