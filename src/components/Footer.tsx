import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "https://facebook.com" }
  ];

  return (
    <footer className="py-16 bg-rose-700 text-white">
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
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Parceiros:</h3>
            <p className="text-rose-100">Ágape Cerimonial</p>
            <p className="text-rose-100">Contato: (31) 9 9249-4408</p>
          </div>
        </motion.div>

        {/* Redes Sociais (se quiser manter) */}
        {/* <div className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-300 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
