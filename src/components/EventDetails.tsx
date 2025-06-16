import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Cake } from 'lucide-react';

const EventDetails: React.FC = () => {
  const details = [
    {
      icon: <CalendarDays className="w-6 h-6 text-rose-600" />,
      title: "Data",
      info: "26 de Julho de 2025",
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-600" />,
      title: "Horário",
      info: "22h",
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-600" />,
      title: "Local",
      info: "Comemorare, Bambuí - MG",
    },
    {
      icon: <Cake className="w-6 h-6 text-rose-600" />,
      title: "Idade",
      info: "18 anos",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">Detalhes do Evento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos ansiosos para compartilhar este momento especial com você!
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                {detail.icon}
              </div>
              <h3 className="text-xl font-semibold text-rose-800 mb-2">{detail.title}</h3>
              <p className="text-gray-600 mb-2">{detail.info}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
