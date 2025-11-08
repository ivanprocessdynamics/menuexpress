'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: '¿Cómo aumenta el ticket medio una carta con fotos?',
      answer:
        'Diversos estudios en hostelería demuestran que los menús con imágenes atractivas aumentan la intención de compra y el gasto promedio por comensal entre un 15 y un 25%. Las fotos activan el deseo de probar nuevos platos y mejoran la percepción de calidad.',
    },
    {
      question: 'Ya tengo un menú físico con fotos, ¿por qué necesitaría uno digital?',
      answer:
        'Las fotos en papel solo funcionan cuando el cliente ya está sentado. Una carta digital te ayuda a no perder clientes en cada paso:\n\n• Quien te busca online decide antes al ver tus platos.\n• Quien pasa por la puerta puede escanear un QR y conocer tu menú sin esperar.\n• Y quien no habla tu idioma puede entenderlo todo desde su móvil.\n\nEn resumen, tu carta deja de depender de la mesa y empieza a atraer clientes desde cualquier lugar.',
    },
    {
      question: '¿Puedo personalizar los colores y el logo?',
      answer:
        'Absolutamente. Cada plantilla es completamente personalizable. Incluimos la integración de tu logo y paleta de colores corporativos. También ajustamos tipografías y elementos visuales según tu identidad de marca.',
    },
    {
      question: '¿Y si quiero cambiar algo después?',
      answer:
        'Puedes pedirnos cambios o actualizaciones por WhatsApp en cualquier momento. Según tu plan, incluimos una o más actualizaciones mensuales sin coste adicional. También puedes solicitar modificaciones extra si lo necesitas.',
    },
    {
      question: '¿Incluye hosting y dominio?',
      answer:
        'Sí. Todos nuestros planes incluyen dominio, hosting y mantenimiento técnico. Nos encargamos de toda la configuración para que tu carta esté siempre online y optimizada.',
    },
    {
      question: '¿Cómo funciona el sistema de reservas?',
      answer:
        'Integramos un sistema de reservas profesional que permite a tus clientes reservar mesa las 24 horas. Se integra con tu sistema de reservas en caso que tengas, y si no recibes notificaciones en tu correo electrónico.',
    },
    {
      question: '¿Se puede añadir el menú del día?',
      answer:
        'Claro. Puedes cambiarlo tú mismo o pedirnos que lo actualicemos cuando quieras. Es muy fácil y rápido.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        ' Aceptamos Stripe y transferencia bancaria. El pago del setup se realiza al inicio del proyecto mediante enlace seguro, y la cuota mensual se activa después de la entrega de tu web',
    },
    {
      question: '¿Cuánto tiempo tarda la entrega?',
      answer:
        'El proceso estándar es de 48 horas desde que recibimos todo tu contenido (textos, fotos, logo, etc.). El tiempo incluye diseño, personalización, procesamiento y edición de fotos, revisión y ajustes iniciales.',
    },
    {
      question: '¿Está optimizado para móviles?',
      answer:
        'Todos nuestros diseños son 100% responsive y mobile-first. Esto significa que se ven perfectos en cualquier dispositivo.',
    },
    {
      question: '¿Qué pasa si no me gusta el resultado?',
      answer:
        'Ofrecemos una garantía de satisfacción de 15 días. Si no quedas conforme con el resultado, te devolvemos el setup completo. Además, incluimos dos rondas de revisiones gratuitas para asegurarnos de que tu web quede exactamente como la imaginas.',
    },
  ];

  return (
    <section id="preguntas" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Preguntas <span className="text-primary-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Las respuestas que necesitas antes de decidir
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              inView={inView}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center bg-primary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está listo para ayudarte. Respondemos en menos de 4 horas.
          </p>
          <a
            href="https://wa.me/34123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Pregúntanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onClick,
  inView,
}: {
  faq: any;
  index: number;
  isOpen: boolean;
  onClick: () => void;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-primary-600" />
          ) : (
            <Plus className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
