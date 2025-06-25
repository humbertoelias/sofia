import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 pb-40 bg-rose-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">Sofia</h2>
          <p className="text-rose-100 max-w-md mx-auto mb-6">
            Obrigada por fazer parte deste momento especial. Sua presença é o melhor presente!
          </p>

          {/* Parceiros */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold">Parceiros:</h3>
            <img
              src="/assets/agape-logo.jpg"
              alt="Logo Ágape Cerimonial"
              className="w-32 h-auto rounded-lg shadow-lg border-2 border-white"
            />
            <p className="text-rose-100 font-medium">Ágape Cerimonial</p>
            <p className="text-rose-100">Contato: (31) 9 9249-4408</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
