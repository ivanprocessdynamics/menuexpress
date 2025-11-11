'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Esencial',
      ideal: 'Ideal para bares y braserías que quieren digitalizar su carta sin complicaciones.',
      setupPrice: '199',
      monthlyPrice: '19',
      popular: true,
      tagline: 'Tu carta online lista en 48h por menos de lo que cuesta un menú al día.',
      features: [
        'Carta digital responsive (hasta 30 platos)',
        'Hosting, dominio y mantenimiento técnico',
        'Actualizaciones de platos o precios (1 vez/mes)',
        'Soporte básico por WhatsApp (respuestas en 24 h)',
      ],
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Profesional',
      ideal: 'Perfecto para restaurantes que quieren actualizar su carta y controlar su menú diario',
      setupPrice: '249',
      monthlyPrice: '29',
      popular: false,
      tagline: 'Controla tu carta y actualiza tus menús sin depender de nadie.',
      features: [
        'Todo lo del plan Esencial',
        'Hasta 50 platos con fotos',
        'Categorías avanzadas (entrantes, postres, bebidas…)',
        'Menú del día dinámico',
        'Reservas online integradas',
        'Soporte prioritario (respuestas en el mismo día)',
      ],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      name: 'Premium',
      ideal: 'Sushi, alta cocina o restaurantes que buscan diferenciarse',
      setupPrice: '349',
      monthlyPrice: '49',
      popular: false,
      tagline: 'Diseño premium y atención preferente para destacar entre los mejores.',
      features: [
        'Todo lo del plan Profesional',
        'Diseño personalizado con tu estilo de marca',
        'Hasta 100 platos con fotos',
        'Estadísticas de visitas a tu carta',
        'Soporte premium (respuestas en 2 h)',
      ],
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="precios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-4">
            <span className="text-red-600 font-bold text-sm">🔥 Oferta limitada: Solo 3 plazas disponibles esta semana</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 font-serif">
            Elige tu <span className="text-primary-600">plan perfecto</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto mb-3 md:mb-4">
            Página web profesional con todo incluido. Sin sorpresas, sin letra pequeña.
          </p>
          <p className="text-sm md:text-lg text-primary-600 font-semibold max-w-2xl mx-auto">
            Empieza desde solo €199 setup y €19/mes — sin compromiso, con posibilidad de pasar a un plan superior más adelante.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-8 md:mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Más popular</span>
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary-500' : ''} h-full flex flex-col`}>
                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.gradient} p-4 md:p-6 text-center text-white`}>
                  <h3 className="text-xl md:text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 text-xs md:text-sm mb-2 md:mb-4 leading-tight">{plan.ideal}</p>
                  <div className="mb-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl md:text-4xl font-bold">€{plan.setupPrice}</span>
                      <span className="text-white/80 text-xs md:text-sm">setup</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-base md:text-xl font-semibold">+ €{plan.monthlyPrice}</span>
                      <span className="text-white/80 text-xs md:text-sm">/mes</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/90 mt-2 md:mt-3 italic leading-snug">&ldquo;{plan.tagline}&rdquo;</p>
                </div>

                {/* Features */}
                <div className="p-4 md:p-6 flex-grow">
                  <ul className="space-y-2.5 md:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 md:space-x-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-4 md:p-6 pt-0">
                  <a
                    href="#contacto"
                    className={`block w-full text-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-all transform hover:-translate-y-1 ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {plan.popular ? 'Empezar ahora →' : 'Solicitar plan'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 md:px-6 py-2 md:py-3 rounded-full">
            <p className="text-sm md:text-lg font-semibold text-gray-800">
              Solicita ahora y recibe tu página lista en 48 h.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
