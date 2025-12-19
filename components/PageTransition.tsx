import React from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: { 
    opacity: 0, 
    scale: 0.95,
    filter: 'blur(10px) contrast(200%)' 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    filter: 'blur(0px) contrast(100%)',
    transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.05,
    filter: 'blur(10px) hue-rotate(90deg)',
    transition: {
        duration: 0.3,
        ease: "easeIn"
    }
  }
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;