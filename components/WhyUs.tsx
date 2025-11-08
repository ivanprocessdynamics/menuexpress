'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Image, Smartphone, MessageCircle, Package } from 'lucide-react';

export default function WhyUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Zap,
      title: 'Rápido',
      description: 'Entrega en 48 h.',
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
    },
    {
      icon: Image,
      title: 'Bonito',
      description: 'Fotos optimizadas y diseño profesional.',
      color: 'text-pink-500',
      bg: 'bg-pink-50',
    },
    {
      icon: Smartphone,
      title: 'Funcional',
      description: 'Se ve perfecto en móviles.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: MessageCircle,
      title: 'Asistencia real',
      description: 'Soporte por WhatsApp cuando lo necesites.',
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: Package,
      title: 'Todo incluido',
      description: 'Dominio, hosting y configuración inicial.',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section id="por-que-elegirnos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            ¿Por qué tantos restaurantes{' '}
            <span className="text-primary-600">confían en nosotros?</span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1"
            >
              {/* Content */}
              <div className={`${reason.bg} w-12 h-1 mx-auto mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center bg-primary-50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-800 font-medium">
            Nos encargamos de todo.{' '}
            <span className="text-primary-600 font-bold">Tú solo eliges el estilo.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
