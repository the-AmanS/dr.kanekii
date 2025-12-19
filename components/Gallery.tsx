import React from 'react';
import { motion } from 'framer-motion';
import { Construction, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  return (
    <section className="min-h-screen bg-black pt-40 pb-24 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 text-[10rem] font-bangers text-white/5 pointer-events-none select-none leading-none z-0 rotate-90 origin-top-right">
        FILES
      </div>

      {/* Animated Background Glitch Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-ghoul-red"
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Warning Icon with Glitch Effect */}
          <div className="relative inline-block mb-8">
            <motion.div
              animate={{
                x: [-2, 2, -2],
                filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
              }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            >
              <AlertTriangle size={80} className="text-ghoul-red mx-auto" />
            </motion.div>
          </div>

          <h2 className="text-6xl md:text-8xl font-rubik-glitch text-white mb-6 uppercase tracking-tighter">
            UNDER <span className="text-ghoul-red">CONSTRUCTION</span>
          </h2>

          <div className="inline-block bg-ghoul-red/10 border border-ghoul-red/30 px-6 py-2 mb-12">
            <p className="text-neon-cyan font-orbitron tracking-widest text-sm md:text-base animate-pulse">
              ERROR 404: GALLERY_FILES_ENCRYPTED // RESTORING DATA FLOW...
            </p>
          </div>

          <p className="text-gray-400 font-poppins text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            The archives are currently being overhauled to bring you a higher fidelity visual experience.
            Check back soon for the latest high-octane AMVs.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bangers text-2xl hover:bg-ghoul-red hover:text-white transition-all duration-300 clip-path-polygon">
              <ArrowLeft size={24} />
              BACK TO MISSION
            </Link>
            <a
              href="https://www.instagram.com/amman._11/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bangers text-2xl hover:bg-neon-cyan hover:text-black transition-all duration-300"
            >
              WATCH ON INSTAGRAM
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Warning Lines */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-ghoul-red flex items-center overflow-hidden opacity-50">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-black font-bold whitespace-nowrap mx-4 font-orbitron italic">WARNING: SITE UNDER MAINTENANCE // </span>
        ))}
      </div>
    </section>
  );
};

export default Gallery;