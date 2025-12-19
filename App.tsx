import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const WarningModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-ghoul-dark border border-ghoul-red p-6 md:p-8 text-center relative overflow-hidden"
      >
        {/* Glitch lines in modal background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-1/4 w-full h-[1px] bg-white animate-pulse"></div>
          <div className="absolute top-1/2 w-full h-[1px] bg-ghoul-red animate-pulse delay-75"></div>
          <div className="absolute top-3/4 w-full h-[1px] bg-neon-cyan animate-pulse delay-150"></div>
        </div>

        <AlertCircle className="text-ghoul-red mx-auto mb-4 md:mb-6 w-12 h-12 md:w-16 md:h-16" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-rubik-glitch text-white mb-4 md:mb-6 uppercase tracking-widest">
          SYSTEM <span className="text-ghoul-red">WARNING</span>
        </h2>

        <div className="space-y-3 md:space-y-4 font-orbitron text-gray-300 text-xs md:text-base leading-relaxed">
          <p className="border-l-2 border-ghoul-red pl-3 md:pl-4 text-left">
            <span className="text-white font-bold">DR. KANEKII</span> IS NOT A MEDICAL PROFESSIONAL.
          </p>
          <p className="border-l-2 border-neon-cyan pl-3 md:pl-4 text-left">
            THE PREFIX <span className="text-neon-cyan font-bold">"DR"</span> STANDS FOR <span className="text-white font-bold italic">DAVINCI RESOLVE</span>.
          </p>
          <p className="text-[10px] md:text-sm font-poppins text-gray-500 mt-4 md:mt-6 italic opacity-80 leading-snug">
            Proceeding acknowledges you are entering a high-octane editing archive fueled by node-based visual mayhem.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 md:mt-10 w-full py-3 md:py-4 bg-ghoul-red text-white font-bangers text-xl md:text-2xl hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest active:scale-95"
        >
          Acknowledge & Enter
        </button>
      </motion.div>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Hero />
            <Gallery />
            <About />
            <Contact />
          </PageTransition>
        } />
        <Route path="/gallery" element={
          <PageTransition>
            <Gallery />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <Router>
      <div className="bg-ghoul-dark text-white min-h-screen selection:bg-ghoul-red selection:text-white">
        <AnimatePresence>
          {showWarning && <WarningModal onClose={() => setShowWarning(false)} />}
        </AnimatePresence>


        <ScrollToTop />
        <CustomCursor />
        <Navbar />

        <main className="relative z-0">
          <AnimatedRoutes />
        </main>

        <footer className="bg-black py-8 px-4 border-t border-gray-900 text-center relative z-10">
          <div className="container mx-auto max-w-7xl">
            <p className="font-orbitron text-[10px] md:text-xs text-gray-500 tracking-wider">
              © {new Date().getFullYear()} DR. KANEKII. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[8px] md:text-[10px] text-gray-700 mt-2">DR = DAVINCI RESOLVE // DESIGNED WITH CHAOS</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;