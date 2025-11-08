'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
            Tipos de restaurantes que utilizan nuestras plantillas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['La Terraza', 'Bistró 21', 'Sushi Master', 'Taco Loco', 'Bella Napoli', 'Green Leaf'].map(
              (name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  {name}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
