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
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    ¡Gracias por tu interés!
                  </h3>
                  <p className="text-gray-600">
                    Te contactaremos pronto con más información sobre nuestras plantillas profesionales.
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">✋ ¡Espera!</h3>
                    <p className="text-primary-100">
                      Tu página web profesional te está esperando
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center bg-red-50 border-2 border-red-200 px-4 py-2 rounded-full mb-4">
                        <span className="text-red-600 font-bold text-sm">🔥 Solo 3 plazas disponibles esta semana</span>
                      </div>
                      <p className="text-gray-700 font-semibold mb-2">
                        Últimas plazas con <span className="text-green-600">setup incluido</span> y entrega en 48h
                      </p>
                      <p className="text-sm text-gray-500">
                        Ya han confiado en nosotros +127 restaurantes
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
                        className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
                      >
                        Reservar Mi Plaza Ahora
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Sin compromiso. Tu información está segura con nosotros.
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
