import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import GoogleForm from './components/GoogleForm';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Countdown />
        <EventDetails />
        <Gallery />
        <GoogleForm />
        <Footer />
        <MusicPlayer />
      </motion.div>
    </div>
  );
}

export default App;
