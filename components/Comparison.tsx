'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { label: 'Tiempo para tener tu carta lista online', custom: '48 horas (listo y publicado)', scratch: '3-6 meses', generic: '1-2 semanas' },
    { label: 'Costo inicial', custom: '€199-349', scratch: '€1,000+', generic: '€0-200' },
    { label: 'Costo mensual', custom: '€19-49/mes', scratch: '€50-200/mes', generic: '€15-30/mes' },
    { label: 'Hosting y dominio incluido', custom: true, scratch: false, generic: false },
    { label: 'Diseño adaptado a móviles', custom: true, scratch: true, generic: false },
    { label: 'Fotos optimizadas', custom: true, scratch: 'Depende del diseñador', generic: false },
    { label: 'Menú con fotos de platos', custom: true, scratch: true, generic: false },
    { label: 'Diseño especializado para restaurantes', custom: true, scratch: true, generic: false },
    { label: 'Menú del día dinámico', custom: 'Plan Pro+', scratch: false, generic: true },
    { label: 'Sistema de reservas integrado', custom: 'Plan Pro+', scratch: false, generic: false },
    { label: 'Actualización futura', custom: 'Incluida', scratch: 'Extra €€€', generic: 'Limitada' },
    { label: 'Soporte real post-lanzamiento', custom: 'WhatsApp directo', scratch: 'Extra €€€', generic: 'Email lento' },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Más fácil, rápido y rentable{' '}
            <span className="text-primary-600">que hacerlo por tu cuenta</span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Compara y descubre por qué elegir nuestra solución es la mejor decisión
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 md:py-4 px-2 md:px-3 text-left text-xs md:text-sm font-semibold text-gray-900">
                      Características
                    </th>
                    <th scope="col" className="py-3 md:py-4 px-1 md:px-2 text-center">
                      <div className="text-xs md:text-sm font-semibold text-gray-500">
                        Desde Cero
                      </div>
                    </th>
                    <th scope="col" className="py-4 px-2 text-center">
                      <div className="text-xs font-semibold text-gray-500">
                        Genéricas
                      </div>
                    </th>
                    <th scope="col" className="py-4 px-2 text-center" style={{backgroundColor: '#FFF8F2'}}>
                      <div className="text-xs font-semibold text-primary-600 mb-1">
                        ⭐ Nosotros
                      </div>
                      <div className="inline-flex items-center bg-primary-600 text-white px-2 py-1 rounded-full text-[10px] font-bold">
                        MEJOR
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {features.map((feature, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-3 text-xs font-medium text-gray-900">
                        {feature.label}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {typeof feature.scratch === 'boolean' ? (
                          feature.scratch ? (
                            <Check className="w-4 h-4 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-gray-600">{feature.scratch}</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {typeof feature.generic === 'boolean' ? (
                          feature.generic ? (
                            <Check className="w-4 h-4 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs text-gray-600">{feature.generic}</span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-center" style={{backgroundColor: '#FFF8F2'}}>
                        {typeof feature.custom === 'boolean' ? (
                          feature.custom ? (
                            <Check className="w-4 h-4 text-accent-600 mx-auto font-bold" />
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-xs font-semibold text-primary-700">
                            {feature.custom}
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
