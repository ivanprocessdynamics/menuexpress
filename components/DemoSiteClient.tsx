'use client';

import { useState } from 'react';
import { Template } from '@/types/template';
import Image from 'next/image';
import { 
  Phone, Mail, MapPin, ChefHat, Star, 
  Facebook, Instagram, Twitter, Menu as MenuIcon,
  X, Calendar, Users, ArrowLeft, Award, Clock
} from 'lucide-react';
import Link from 'next/link';
import { demoRestaurants, getDefaultDemoData } from '@/data/demoData';

interface DemoSiteClientProps {
  template: Template;
}

export default function DemoSiteClient({ template }: DemoSiteClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const demoData = demoRestaurants[template.slug] || getDefaultDemoData(template.name);
  
  // Set initial category
  if (selectedCategory === '' && demoData.menuCategories && demoData.menuCategories.length > 0) {
    setSelectedCategory(demoData.menuCategories[0]);
  }
  
  const filteredMenuItems = selectedCategory && demoData.menuCategories
    ? demoData.menuItems.filter(item => item.category === selectedCategory)
    : demoData.menuItems;
  
  const getIcon = (iconName: string) => {
    const iconClass = "w-10 h-10";
    const style = { color: template.colorScheme.primary };
    
    switch(iconName) {
      case 'star': return <Star className={iconClass} style={style} />;
      case 'chef': return <ChefHat className={iconClass} style={style} />;
      case 'calendar': return <Calendar className={iconClass} style={style} />;
      case 'users': return <Users className={iconClass} style={style} />;
      case 'award': return <Award className={iconClass} style={style} />;
      case 'clock': return <Clock className={iconClass} style={style} />;
      default: return <ChefHat className={iconClass} style={style} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: demoData.backgroundColor }}>
      {/* Barra superior */}
      <div className="bg-black text-white py-2 px-4 text-center text-xs sm:text-sm">
        <Link href={`/plantillas/${template.slug}`} className="inline-flex items-center hover:underline">
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Volver a detalles de plantilla</span>
          <span className="sm:hidden">Volver</span>
        </Link>
        <span className="ml-2 sm:ml-4 opacity-75 hidden sm:inline">| Vista Demo - {template.name}</span>
      </div>

      {/* Header */}
      <header 
        className="sticky top-0 z-40 shadow-md"
        style={{ backgroundColor: template.colorScheme.primary }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: template.colorScheme.accent }}
              >
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: template.colorScheme.primary }} />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl font-bold text-white truncate">{demoData.restaurantName}</h1>
                <p className="text-xs text-white/80 hidden sm:block">{demoData.tagline}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {['Inicio', 'Menú', 'Reservas', 'Galería', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:opacity-80 transition-opacity font-medium"
                >
                  {item}
                </a>
              ))}
              <button 
                className="px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: template.colorScheme.accent,
                  color: template.colorScheme.primary
                }}
              >
                Reservar Mesa
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {['Inicio', 'Menú', 'Reservas', 'Galería', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section 
        className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${template.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif">
            {demoData.heroTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            {demoData.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <button 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: template.colorScheme.accent,
                color: template.colorScheme.primary
              }}
            >
              Ver Menú Completo
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-all">
              Hacer Reserva
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {demoData.highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                  style={{ backgroundColor: template.colorScheme.primary + '20' }}
                >
                  {getIcon(highlight.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: template.colorScheme.primary }}>
                  {highlight.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: demoData.menuBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-serif" style={{ color: template.colorScheme.primary }}>
              Nuestro Menú
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">{demoData.menuSubtitle}</p>
            
            {/* Category Tabs */}
            {demoData.menuCategories && demoData.menuCategories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {demoData.menuCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                      selectedCategory === category
                        ? 'text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                    style={
                      selectedCategory === category
                        ? { backgroundColor: template.colorScheme.primary }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredMenuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 sm:h-64 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Popular
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg sm:text-xl font-bold flex-1 mr-3" style={{ color: template.colorScheme.primary }}>
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold whitespace-nowrap" style={{ color: template.colorScheme.accent }}>
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservas" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-serif" style={{ color: template.colorScheme.primary }}>
              Reserva Tu Mesa
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Garantiza tu lugar en {demoData.restaurantName}</p>
          </div>

          <form className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="+34 600 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Fecha</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Hora</label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Número de Personas</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Ocasión Especial</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white">
                  <option value="">Ninguna</option>
                  <option value="cumpleaños">Cumpleaños</option>
                  <option value="aniversario">Aniversario</option>
                  <option value="negocios">Comida de Negocios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ 
                backgroundColor: template.colorScheme.primary,
                color: 'white'
              }}
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: demoData.galleryBg }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-serif" style={{ color: template.colorScheme.primary }}>
              Galería
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Un vistazo a nuestra experiencia culinaria</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {demoData.galleryImages.map((img, index) => (
              <div key={index} className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={img}
                  alt={`Galería ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 md:py-16 text-white" style={{ backgroundColor: template.colorScheme.primary }}>
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Contacto</h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>{demoData.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="break-all">{demoData.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>{demoData.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Horario</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                {demoData.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between gap-2">
                    <span className="flex-shrink-0">{hour.days}</span>
                    <span className="font-semibold text-right">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Síguenos</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-white/80">
              © 2025 {demoData.restaurantName}. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              Demo creado por Web Dynamics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
