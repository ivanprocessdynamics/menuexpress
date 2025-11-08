'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { templates, categories } from '@/data/templates';

export default function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredTemplates =
    activeCategory === 'all'
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="plantillas" className="py-20 bg-white">
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
            Menús Digitales con{' '}
            <span className="text-primary-600">Fotos que Venden</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada plantilla incluye secciones de menú optimizadas para mostrar tus platos con fotos atractivas.
            Tus clientes verán la variedad completa y pedirán más.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Template Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTemplates.map((template, index) => (
              <TemplateCard key={template.id} template={template} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TemplateCard({
  template,
  index,
}: {
  template: any;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Badge */}
      {template.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
              template.badge === 'popular'
                ? 'bg-yellow-400 text-yellow-900'
                : 'bg-green-400 text-green-900'
            }`}
          >
            {template.badge === 'popular' ? '⭐ Más Popular' : '✨ Nuevo'}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={template.image}
          alt={template.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          priority={index < 3}
        />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-6 gap-3"
        >
          <Link
            href={`/demo/${template.slug}`}
            target="_blank"
            className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <span>Ver Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/plantillas/${template.slug}`}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Detalles
          </Link>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {template.name}
        </h3>
        <p className="text-gray-600 mb-4">{template.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-4">
          {template.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start text-sm text-gray-600">
              <span className="text-accent-600 mr-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-2xl font-bold text-primary-600">{template.price}</div>
          <Link
            href={`/plantillas/${template.slug}`}
            className="text-primary-600 font-semibold hover:underline flex items-center space-x-1"
          >
            <span>Ver detalles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
