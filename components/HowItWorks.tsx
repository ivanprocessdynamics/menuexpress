'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Palette, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Camera,
      title: 'Envíanos tu menú o carta actual',
      description: 'Comparte tu menú actual por WhatsApp o email. No importa el formato.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: Palette,
      title: 'Elegimos juntos el diseño',
      description: 'Seleccionamos el estilo que más encaje con tu restaurante.',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: Rocket,
      title: 'Tu página lista en 72h',
      description: 'Recibe tu página web online, lista para compartir y atraer clientes.',
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-serif">
            Tu página web lista en{' '}
            <span className="text-primary-600">tres pasos simples</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Content */}
                <div className={`${step.bg} w-16 h-1 mb-6`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg
                    className="w-8 h-8 text-primary-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Reinforcement Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Sin webs complicadas. Sin plantillas genéricas.{' '}
            <span className="text-primary-600 font-bold">Solo resultados reales.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
