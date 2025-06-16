import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'details', label: 'Detalhes' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'rsvp', label: 'Confirmar Presença' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-serif text-2xl ${scrolled ? 'text-rose-700' : 'text-white'}`}
        >
          Festa de Aniversário
        </motion.div>

        {/* Desktop Menu (Sem o botão RSVP) */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-rose-500 ${
                scrolled ? 'text-rose-900' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-rose-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-2">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-3 text-rose-900 hover:text-rose-500 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Botão RSVP só no mobile */}
            <a
              href="#rsvp"
              className="block py-3 my-2 text-center rounded-full bg-gradient-to-r from-rose-500 to-rose-700 text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Confirmar Presença
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
