import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-40 bg-ghoul-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-nosifer text-ghoul-red hover:text-white transition-colors duration-300 relative group">
          <span className="relative z-10">DR.KANEKII</span>
          <span className="absolute left-1 top-0 text-neon-cyan opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all">DR.KANEKII</span>
        </NavLink>

        {/* Desktop Menu - Increased spacing from space-x-8 to space-x-16 */}
        <div className="hidden md:flex space-x-16">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-orbitron text-sm tracking-widest hover:text-ghoul-red transition-colors relative group ${isActive ? 'text-ghoul-red' : 'text-gray-300'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                    />
                  )}
                  <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-200 -skew-x-12" />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white hover:text-ghoul-red">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-ghoul-dark flex flex-col items-center justify-center space-y-8"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="font-rubik-glitch text-4xl text-white hover:text-ghoul-red transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;