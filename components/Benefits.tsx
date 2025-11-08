'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Zap,
  Calendar,
  Smartphone,
  TrendingUp,
  DollarSign,
  Headphones,
} from 'lucide-react';

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumenta Ticket Medio',
      description: 'Fotos atractivas de tus platos hacen que los clientes pidan más variedad y gasten 30-40% más',
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: Smartphone,
      title: 'Página Web con Fotos',
      description: 'Muestra todos tus platos con imágenes profesionales que abren el apetito y venden por ti',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: DollarSign,
      title: 'Más Variedad Pedida',
      description: 'Tus clientes descubren platos que no conocían. Dejan de pedir siempre lo mismo',
      color: 'text-primary-600',
      bg: 'bg-primary-50',
    },
    {
      icon: Zap,
      title: 'Implementación Rápida',
      description: 'Tu menú digital con fotos listo en 48 horas. Sin conocimientos técnicos necesarios',
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
    },
    {
      icon: Calendar,
      title: 'Reservas Incluidas',
      description: 'Sistema de reservas online integrado para mayor comodidad de tus clientes',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: Headphones,
      title: 'Soporte Incluido',
      description: '3 meses de actualizaciones y soporte técnico completamente gratuito',
      color: 'text-accent-600',
      bg: 'bg-accent-50',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Una Carta con{' '}
            <span className="text-primary-600">Fotos Atractivas</span> Vende Más
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tus clientes ven lo que van a comer, se animan a probar más platos y aumentan su gasto
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
  inView,
}: {
  benefit: any;
  index: number;
  inView: boolean;
}) {
  const Icon = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`${benefit.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
      >
        <Icon className={`w-8 h-8 ${benefit.color}`} />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {benefit.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
    </motion.div>
  );
}
