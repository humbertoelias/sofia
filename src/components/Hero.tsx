import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/assets/DSC_9239.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-rose-200 font-medium mb-4">Você está convidado para</p>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 font-serif">
            Aniversário de 18 anos da<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600">
              Sofia
            </span>
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Venha comemorar conosco este momento especial e inesquecível!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#rsvp"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 text-white font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Confirmar Presença
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
