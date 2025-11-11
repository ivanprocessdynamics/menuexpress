'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      role: 'Propietario',
      restaurant: 'La Terraza Mediterránea',
      city: 'Barcelona',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      quote:
        'Desde que lanzamos nuestro sitio web, las reservas online aumentaron un 45%. El diseño es elegante y profesional, justo lo que buscábamos.',
      metric: '+45% en reservas online',
      rating: 5,
    },
    {
      id: 2,
      name: 'María González',
      role: 'Gerente',
      restaurant: 'Sushi Master',
      city: 'Madrid',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      quote:
        'La implementación fue increíblemente rápida. En menos de 72 horas teníamos nuestro sitio funcionando perfectamente. El equipo de soporte es excepcional.',
      metric: 'Implementación en 72h',
      rating: 5,
    },
    {
      id: 3,
      name: 'Javier Martínez',
      role: 'Chef y Propietario',
      restaurant: 'Bistró Fusión',
      city: 'Valencia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote:
        'El sistema de menú digital es fantástico. Puedo actualizar los platos del día yo mismo sin necesitar ayuda técnica. Muy intuitivo.',
      metric: '100% de satisfacción',
      rating: 5,
    },
    {
      id: 4,
      name: 'Ana López',
      role: 'Propietaria',
      restaurant: 'Green Leaf Café',
      city: 'Sevilla',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      quote:
        'Nuestro sitio web refleja perfectamente la identidad de nuestro café vegano. El diseño es moderno, limpio y atrae exactamente al público que buscamos.',
      metric: '+60% tráfico web',
      rating: 5,
    },
    {
      id: 5,
      name: 'Roberto Sánchez',
      role: 'Gerente',
      restaurant: 'Taco Loco',
      city: 'Málaga',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote:
        'Los colores vibrantes y el diseño dinámico capturan perfectamente la esencia de nuestra cocina mexicana. Nuestros clientes están encantados.',
      metric: '+40% pedidos online',
      rating: 5,
    },
    {
      id: 6,
      name: 'Laura Fernández',
      role: 'Propietaria',
      restaurant: 'Bella Napoli',
      city: 'Bilbao',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      quote:
        'El personalizador de pizzas es un éxito total entre nuestros clientes. La inversión se pagó sola en el primer mes con el aumento de pedidos.',
      metric: 'ROI en 1 mes',
      rating: 5,
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Casos de Éxito
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Restaurantes que transformaron su negocio con nuestras soluciones
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Left: Image and Info */}
                <div className="text-center md:text-left">
                  <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{current.name}</h3>
                  <p className="text-primary-200 text-sm mb-1">{current.role}</p>
                  <p className="text-primary-300 font-semibold mb-1">
                    {current.restaurant}
                  </p>
                  <p className="text-primary-300 text-sm">{current.city}</p>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mt-3">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Right: Quote and Metric */}
                <div className="md:col-span-2">
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Metric Badge */}
                  <div className="inline-flex items-center bg-accent-500 text-white px-6 py-3 rounded-lg font-bold">
                    <span className="text-2xl mr-2">📈</span>
                    {current.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-white rounded-full'
                      : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
