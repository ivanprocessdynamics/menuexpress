'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [restaurantType, setRestaurantType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsVisible(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {isSubmitted ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
                  >
                    <span className="text-4xl">🎉</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Código de Descuento Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Revisa tu email para obtener tu 10% de descuento
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">¡Espera!</h3>
                    <p className="text-primary-100">
                      Antes de irte, obtén un descuento exclusivo
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-yellow-100 text-yellow-900 px-6 py-3 rounded-lg font-bold text-2xl mb-4">
                        10% DE DESCUENTO
                      </div>
                      <p className="text-gray-600">
                        En tu primera plantilla de sitio web para restaurante
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Tu email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <select
                          value={restaurantType}
                          onChange={(e) => setRestaurantType(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                        >
                          <option value="">Tipo de restaurante</option>
                          <option value="alta-cocina">Alta Cocina / Gourmet</option>
                          <option value="italiano">Italiano</option>
                          <option value="japones">Japonés / Sushi</option>
                          <option value="mexicano">Mexicano</option>
                          <option value="fast-food">Fast Food</option>
                          <option value="pizzeria">Pizzería</option>
                          <option value="vegetariano">Vegetariano / Vegano</option>
                          <option value="fusion">Fusión / Moderno</option>
                          <option value="familiar">Familiar / Buffet</option>
                          <option value="cafeteria">Cafetería / Brunch</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition-all hover:shadow-lg"
                      >
                        Obtener Mi Descuento
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Sin compromiso. Cancela cuando quieras.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
