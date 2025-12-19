import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section className="min-h-screen bg-zinc-950 flex items-center relative overflow-hidden">
            {/* Abstract Shapes / Background Elements */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-ghoul-dark md:skew-x-12 md:translate-x-32 z-0 border-l border-ghoul-red/30 opacity-50 md:opacity-100"></div>

            <div className="container mx-auto max-w-7xl px-6 pt-28 md:pt-40 pb-20 relative z-10 flex flex-col md:flex-row items-start gap-12 lg:gap-20">

                {/* Image/Visual Area with Graffiti Background */}
                <motion.div
                    className="w-full md:w-[45%] lg:w-[40%] relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Red Graffiti Overlay / Background */}
                    <div className="absolute -inset-4 md:-inset-10 -z-10 opacity-30 md:opacity-40 pointer-events-none scale-75 md:scale-100">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-ghoul-red">
                            <path d="M44.7,-76.4C58.3,-69.2,70,-58.3,78.2,-45.3C86.4,-32.3,91.1,-17.1,89.6,-2.6C88.1,11.8,80.4,25.6,71.2,37.6C62,49.5,51.3,59.5,39,66.9C26.7,74.3,12.8,79.1,-1.1,81C-15,82.8,-30,81.7,-43.3,75.1C-56.6,68.4,-68.2,56.2,-76.3,42.1C-84.4,28,-89,12,-89.2,-4.2C-89.4,-20.4,-85.2,-36.8,-75.7,-50.2C-66.2,-63.6,-51.4,-74,-36.6,-80.4C-21.8,-86.8,-7,-89.2,7.3,-90.1C21.6,-91,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="relative group overflow-hidden border border-white/10 max-w-sm mx-auto md:max-w-none">
                        <div className="absolute inset-0 bg-ghoul-red/10 animate-pulse group-hover:opacity-0 transition-opacity"></div>
                        <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0STHjGaOf7VDW2tmrzcZvSMFy9KIcYJbP-1wftmePTgl6VZmB3qvrcga3Gh-soCj25Bb38tYGDqi6uCLxKh4d4ahx2eObxGqAYXl1WCAUqlWFGSd46OBTMAzypwtZvZzyKTIGlAzm08Sk/s16000/kaneki_ken.jpg=d"
                            alt="Dr Kanekii Avatar"
                            className="w-full h-auto object-cover grayscale brightness-90 md:group-hover:grayscale-0 transition-all duration-700"
                        />

                        {/* The Creator Banner */}
                        <div className="absolute bottom-0 left-0 w-full bg-ghoul-red py-2 md:py-3 px-4 md:px-6">
                            <span className="font-bangers text-black text-xl md:text-2xl tracking-widest flex items-center gap-2">
                                THE CREATOR
                                <span className="w-8 md:w-12 h-0.5 bg-black/40"></span>
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Text Area */}
                <div className="w-full md:w-1/2 text-left space-y-8 md:space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-rubik-glitch leading-tight uppercase relative z-10">
                            <span className="text-white">WHO IS </span>
                            <span className="text-ghoul-red">DR. KANEKII?</span>
                        </h2>

                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-7xl font-rubik-glitch leading-tight uppercase absolute top-1 left-1 opacity-20 text-neon-cyan select-none -z-10"
                            animate={{
                                x: [0, -2, 2, -1, 0],
                                opacity: [0.1, 0.3, 0.1, 0.2, 0.1]
                            }}
                            transition={{
                                duration: 0.3,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        >
                            WHO IS DR. KANEKII?
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="space-y-6 md:space-y-8 text-gray-400 font-poppins text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p>
                            I am a video editor obsessed with the rhythm and flow of anime.
                            The <span className="text-ghoul-red font-bold">DR</span> prefix? That's not for a medical license—it's for
                            <span className="text-white font-bold"> DaVinci Resolve</span>.
                        </p>
                        <p>
                            Inspired by the psychological depth of Tokyo Ghoul,
                            my edits are surgical strikes of visual insanity delivered via the world's most powerful timeline.
                        </p>

                        <div className="space-y-3 md:space-y-4">
                            <p>
                                <strong className="text-neon-cyan font-orbitron uppercase tracking-widest text-[10px] md:text-xs block mb-1">Primary Engine:</strong>
                                <span className="text-gray-300">DaVinci Resolve</span>
                            </p>
                            <p>
                                <strong className="text-neon-cyan font-orbitron uppercase tracking-widest text-[10px] md:text-xs block mb-1">Auxiliary Tools:</strong>
                                <span className="text-gray-300 text-sm md:text-base">After Effects, After Motion Z, Blender, Sapphire & RSMB.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="p-4 md:p-6 border border-white/5 bg-zinc-900/40 backdrop-blur transition-all group active:border-ghoul-red/40">
                            <h4 className="text-3xl md:text-4xl font-bangers text-white md:group-hover:text-ghoul-red">2 YEARS</h4>
                            <span className="text-[10px] md:text-xs font-orbitron text-gray-500 tracking-[0.1em] md:tracking-[0.2em] uppercase">OF RENDERING</span>
                        </div>
                        <div className="p-4 md:p-6 border border-white/5 bg-zinc-900/40 backdrop-blur transition-all group active:border-ghoul-red/40">
                            <h4 className="text-3xl md:text-4xl font-bangers text-white md:group-hover:text-ghoul-red">90+</h4>
                            <span className="text-[10px] md:text-xs font-orbitron text-gray-500 tracking-[0.1em] md:tracking-[0.2em] uppercase">TIMELINES CLOSED</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;