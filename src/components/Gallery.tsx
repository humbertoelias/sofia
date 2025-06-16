import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery: React.FC = () => {
  const images = [
    { url: "/assets/DSC_9239.jpg", alt: "Sofia - Foto 1" },
    { url: "/assets/DSC_9442.jpg", alt: "Sofia - Foto 2" },
    { url: "/assets/DSC_9550.jpg", alt: "Sofia - Foto 3" },
    { url: "/assets/DSC_9636.jpg", alt: "Sofia - Foto 4" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="w-72 h-72 sm:w-80 sm:h-80">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
