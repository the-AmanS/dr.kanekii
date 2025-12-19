import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter } from 'lucide-react';
import GlitchText from './GlitchText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ghoul-dark pt-24 md:pt-32">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-ghoul-red/20 rounded-full blur-xl"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{
              y: [null, "-10%"],
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40
            }}
          />
        ))}
      </div>

      {/* Diagonal Slash Design */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,#ff0033_45%,#ff0033_46%,transparent_46%)] opacity-20"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-4 md:mb-6"
        >
          <h2 className="text-neon-cyan font-orbitron tracking-[0.2em] md:tracking-[0.5em] text-xs md:text-xl mb-2 md:mb-4 uppercase">
            Professional Anime Editor // DaVinci Resolve Specialist
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <GlitchText
            text="DR. KANEKII"
            as="h1"
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-nosifer text-white mb-4 cursor-default select-none drop-shadow-[0_0_15px_rgba(255,0,51,0.5)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 font-poppins max-w-2xl mx-auto text-base md:text-xl mb-10 md:mb-12 leading-relaxed"
        >
          I create high-energy anime edits with cinematic color grading and smooth transitions.
          Using the power of DaVinci Resolve to bring your favorite scenes to life.
          <br />
          <span className="text-ghoul-red font-bold uppercase tracking-widest mt-4 block text-sm md:text-base">High Impact. Smooth Flow. Pure Energy.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 md:gap-6"
        >
          <a href="https://www.instagram.com/amman._11/" target="_blank" rel="noreferrer" className="p-3 md:p-4 border border-ghoul-red text-ghoul-red hover:bg-ghoul-red hover:text-white transition-all duration-300 transform active:scale-95 md:hover:rotate-6 md:hover:scale-110">
            <Instagram size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="#" className="p-3 md:p-4 border border-white text-white hover:bg-white hover:text-ghoul-dark transition-all duration-300 transform active:scale-95 md:hover:-rotate-6 md:hover:scale-110">
            <Youtube size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="#" className="p-3 md:p-4 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-ghoul-dark transition-all duration-300 transform active:scale-95 md:hover:rotate-6 md:hover:scale-110">
            <Twitter size={20} className="md:w-6 md:h-6" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens to avoid overlap */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] md:text-xs font-orbitron text-gray-500 tracking-widest uppercase">Explore Archives</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-ghoul-red to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;