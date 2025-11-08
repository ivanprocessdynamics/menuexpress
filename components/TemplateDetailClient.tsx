'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Monitor, Tablet, Smartphone, Palette, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import Footer from './Footer';
import { Template } from '@/types/template';

interface TemplateDetailClientProps {
  template: Template;
}

export default function TemplateDetailClient({ template }: TemplateDetailClientProps) {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTheme, setActiveTheme] = useState(0);

  const devices = [
    { id: 'desktop', label: 'Desktop', icon: Monitor, width: '100%' },
    { id: 'tablet', label: 'Tablet', icon: Tablet, width: '768px' },
    { id: 'mobile', label: 'Móvil', icon: Smartphone, width: '375px' },
  ];

  const colorThemes = [
    { name: 'Original', colors: template.colorScheme },
    { name: 'Oscuro', colors: { primary: '#1a1a1a', secondary: '#2d2d2d', accent: '#f5f5f5' } },
    { name: 'Azul', colors: { primary: '#1e40af', secondary: '#3b82f6', accent: '#93c5fd' } },
    { name: 'Verde', colors: { primary: '#065f46', secondary: '#10b981', accent: '#6ee7b7' } },
  ];

  const includedModules = [
    'Menú digital interactivo con filtros (alérgenos, vegano, etc.)',
    'Sistema de reservas integrado',
    'Galería de fotos optimizada',
    'Integración Google Maps',
    'Formulario de contacto',
    'Blog/Noticias',
    'Integración redes sociales',
    'SEO preconfigurado',
    'Panel de administración intuitivo',
    'Soporte multiidioma',
  ];

  const customizationIncludes = [
    'Tu logo integrado',
    'Colores corporativos personalizados',
    'Contenido inicial redactado',
    'Optimización de tus imágenes y fotos',
    'Configuración de Google Analytics',
    'Integración con redes sociales',
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/#plantillas"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a plantillas
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {template.badge && (
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase mb-4 ${
                      template.badge === 'popular'
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-green-400 text-green-900'
                    }`}
                  >
                    {template.badge === 'popular' ? '⭐ Más Popular' : '✨ Nuevo'}
                  </span>
                )}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
                  Plantilla {template.name}
                </h1>

                <p className="text-xl text-gray-600 mb-6">{template.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">(4.9/5 - 127 reseñas)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-primary-600">{template.price}</span>
                  <span className="ml-2 text-gray-500">pago único</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#formulario"
                    className="flex-1 bg-primary-600 text-white text-center px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Usar Esta Plantilla
                  </a>
                  <Link
                    href={`/demo/${template.slug}`}
                    target="_blank"
                    className="flex-1 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all text-center"
                  >
                    Ver Demo en Vivo
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Entrega en 48h
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    3 meses de soporte
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Garantía 30 días
                  </div>
                </div>
              </motion.div>

              {/* Right - Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gray-900 rounded-lg shadow-2xl p-4">
                  <div className="bg-white rounded overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.name}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Vista Previa Interactiva
              </h2>
              <p className="text-xl text-gray-600">
                Explora el diseño en diferentes dispositivos y temas de color
              </p>
            </div>

            {/* Device Selector */}
            <div className="flex justify-center gap-4 mb-8">
              {devices.map((device) => {
                const Icon = device.icon;
                return (
                  <button
                    key={device.id}
                    onClick={() => setActiveDevice(device.id as any)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeDevice === device.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{device.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Theme Selector */}
            <div className="flex justify-center gap-4 mb-8">
              <Palette className="w-6 h-6 text-gray-600" />
              {colorThemes.map((theme, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTheme(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTheme === index
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>

            {/* Preview Frame */}
            <motion.div
              key={activeDevice}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div
                className="bg-gray-900 rounded-lg shadow-2xl p-4 transition-all duration-500"
                style={{
                  width: activeDevice === 'desktop' ? '100%' : activeDevice === 'tablet' ? '768px' : '375px',
                  maxWidth: '100%',
                }}
              >
                <div className="bg-white rounded overflow-hidden aspect-[4/3]">
                  <div
                    className="w-full h-full flex items-center justify-center text-gray-400"
                    style={{ backgroundColor: colorThemes[activeTheme].colors.primary }}
                  >
                    <p className="text-white text-lg font-semibold">Vista previa de {template.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Included Modules */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Módulos Incluidos
                </h2>
                <ul className="space-y-4">
                  {includedModules.map((module, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                    >
                      <Check className="w-6 h-6 text-accent-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700">{module}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Customization */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Personalización Incluida
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <p className="text-gray-600 mb-6">
                    Cada plantilla incluye personalización completa para que refleje la identidad de tu restaurante:
                  </p>
                  <ul className="space-y-3">
                    {customizationIncludes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-primary-600 mr-3">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-700 font-semibold">Tiempo de entrega:</span>
                      <span className="text-2xl font-bold text-primary-600">48 horas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Soporte incluido:</span>
                      <span className="text-2xl font-bold text-primary-600">3 meses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="formulario" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 font-serif">
                Solicita Esta Plantilla
              </h2>
              <p className="text-xl text-primary-100">
                Completa el formulario y te contactaremos en menos de 2 horas
              </p>
            </div>

            <form className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl space-y-6">
              <input type="hidden" name="template" value={template.name} />
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre del Restaurante *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Ej: Restaurante La Bella Vista"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition-all hover:shadow-xl"
              >
                Solicitar Plantilla - {template.price}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
