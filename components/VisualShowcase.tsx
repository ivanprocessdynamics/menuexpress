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
    <section className="py-20 bg-white">
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
            Tu página web se ve perfecta en cualquier dispositivo
          </p>
        </motion.div>

        {/* Devices Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
}
