'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function StyleSelector() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const styles = [
    {
      title: 'Clásico & Casero',
      description: 'Diseño cálido y acogedor. Perfecto para tapas, bares y restaurantes familiares.',
      features: ['Menú visual con fotos', 'Diseño tradicional', 'Reservas integradas'],
      slug: 'tradicional',
      exampleUrl: 'https://tapasbar-nine.vercel.app',
      gradient: 'from-amber-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80&fm=webp',
      badge: 'Más elegido',
    },
    {
      title: 'Moderna & Delivery',
      description: 'Diseño vibrante y dinámico. Ideal para pizzerías, hamburgueserías y delivery.',
      features: ['Enfoque en delivery', 'Menú actualizable', 'Carga rápida'],
      slug: 'moderna',
      exampleUrl: 'https://pizzeria-phi-umber.vercel.app',
      gradient: 'from-red-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80&fm=webp',
      badge: null,
    },
    {
      title: 'Premium & Fusión',
      description: 'Diseño elegante y sofisticado. Especial para alta cocina, sushi y restaurantes gourmet.',
      features: ['Diseño exclusivo', 'Animaciones suaves', 'Galería premium'],
      slug: 'premium',
      exampleUrl: 'https://altacocina-main.vercel.app',
      gradient: 'from-purple-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80&fm=webp',
      badge: 'Exclusivo',
    },
  ];

  return (
    <section id="estilos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            3 Estilos Únicos para{' '}
            <span className="text-primary-600">cada tipo de restaurante</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cada plantilla está diseñada desde cero para un tipo específico de negocio gastronómico
          </p>
        </motion.div>

        {/* Style Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {styles.map((style, index) => (
            <motion.div
              key={style.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Header with Image Background */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-50`} />
                  
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black opacity-30" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
                    {style.badge && (
                      <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-3 shadow-lg border border-white/30">
                        {style.badge}
                      </div>
                    )}
                    <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-2">
                      {style.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/60 rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 font-medium mb-4 text-center">
                    {style.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {style.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={style.exampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    Ver demo en vivo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
