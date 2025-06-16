import React from 'react';
import { motion } from 'framer-motion';

const GoogleForm: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-rose-50 to-rose-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">Confirme Sua Presença</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Por favor, preencha o formulário abaixo para que possamos nos organizar e garantir que sua presença seja especial.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl shadow-lg border border-rose-200">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSepfQdzmDTaoPevK_E0Ycsaob8Utl3hMzwH4rSaU_hFJjNDnA/viewform?embedded=true"
            width="100%"
            height="1100"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulário de Confirmação de Presença"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleForm;
