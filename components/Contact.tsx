import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-ghoul-dark pt-28 md:pt-40 pb-20 px-4 md:px-6 relative flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-nosifer text-ghoul-red mb-2 md:mb-4">COMMISSIONS</h2>
          <p className="font-orbitron text-white text-base md:text-xl tracking-widest">WANT AN EDIT? LET'S TALK.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-black/50 backdrop-blur-lg border border-white/10 p-6 md:p-12 relative overflow-hidden">
             {/* Decorative glowing border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ghoul-red via-neon-cyan to-ghoul-red animate-pulse"></div>

            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="space-y-6 md:space-y-8"
            >
                <div>
                    <h3 className="text-xl md:text-2xl font-bangers text-white mb-4">PRICING (INR)</h3>
                    <ul className="space-y-3 md:space-y-4 font-poppins text-gray-400 text-sm md:text-base">
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Short Edit (15s)</span>
                            <span className="text-neon-cyan">₹500</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Full AMV (1-2min)</span>
                            <span className="text-neon-cyan">₹2000</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Loop / Wallpaper</span>
                            <span className="text-neon-cyan">₹400</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Project File</span>
                            <span className="text-neon-cyan">₹5000</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-bangers text-white mb-2">CONTACT INFO</h3>
                    <div className="font-orbitron text-xs md:text-sm space-y-2">
                        <p className="text-gray-400 uppercase">INSTAGRAM: <span className="text-white ml-2">{SOCIALS.instagram}</span></p>
                    </div>
                </div>
            </motion.div>

            <motion.form 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="space-y-5 md:space-y-6"
            >
                <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-orbitron text-neon-cyan uppercase tracking-widest">NAME / HANDLE</label>
                    <input type="text" className="w-full bg-gray-900/80 border border-gray-800 text-white p-2.5 md:p-3 focus:outline-none focus:border-ghoul-red transition-colors text-sm" placeholder="@yourname" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-orbitron text-neon-cyan uppercase tracking-widest">TYPE OF EDIT</label>
                    <select className="w-full bg-gray-900/80 border border-gray-800 text-white p-2.5 md:p-3 focus:outline-none focus:border-ghoul-red transition-colors text-sm appearance-none">
                        <option>Short Edit</option>
                        <option>Full AMV</option>
                        <option>Loop</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-orbitron text-neon-cyan uppercase tracking-widest">DETAILS</label>
                    <textarea rows={3} className="w-full bg-gray-900/80 border border-gray-800 text-white p-2.5 md:p-3 focus:outline-none focus:border-ghoul-red transition-colors text-sm resize-none" placeholder="Song, Anime, Style..."></textarea>
                </div>
                <button type="submit" className="w-full bg-ghoul-red text-white font-bangers text-lg md:text-xl py-3 hover:bg-red-700 transition-all tracking-widest relative overflow-hidden group active:scale-[0.98]">
                    <span className="relative z-10">SEND REQUEST</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;