import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', as: Component = 'span' }) => {
  return (
    <div className="relative inline-block group">
      {/* Main Text */}
      <Component className={`relative z-10 ${className}`}>{text}</Component>
      
      {/* Red Glitch Layer */}
      <Component
        className={`absolute top-0 left-0 -z-10 text-ghoul-red opacity-0 group-hover:opacity-70 group-hover:animate-pulse translate-x-[2px] ${className}`}
        aria-hidden="true"
      >
        {text}
      </Component>

      {/* Cyan Glitch Layer */}
      <Component
        className={`absolute top-0 left-0 -z-10 text-neon-cyan opacity-0 group-hover:opacity-70 group-hover:animate-pulse -translate-x-[2px] translate-y-[1px] ${className}`}
        aria-hidden="true"
      >
        {text}
      </Component>
    </div>
  );
};

export default GlitchText;