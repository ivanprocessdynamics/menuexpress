'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, ThumbsUp } from 'lucide-react';

export default function Guarantee() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guarantees = [
    {
      icon: Clock,
      title: 'Entrega en 72h',
      description: 'O te devolvemos tu dinero',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: ThumbsUp,
      title: 'Satisfacción garantizada',
      description: '15 días para solicitar cambios',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Pago protegido y encriptado',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12 border-2 border-primary-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 font-serif">
                Nuestra <span className="text-primary-600">Garantía Total</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Trabajamos hasta que estés 100% satisfecho
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${guarantee.bg} rounded-full mb-4`}>
                    <guarantee.icon className={`w-8 h-8 ${guarantee.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Únete a los restaurantes que ya disfrutan de su página web profesional
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
