"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section id="about" className="py-32 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        
        {/* Visual Content - Keeping the "Superb" layered look */}
        <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 border border-white/5 z-0" />
            <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/rental_bg.jpg"
                    alt="Luxury Interior Detail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                />
            </div>
            {/* Overlay Quote Box */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 md:-right-12 bg-[#ff3c00] p-8 md:p-12 z-20 max-w-xs shadow-2xl"
            >
                <p className="font-display text-2xl md:text-3xl leading-tight text-white">
                    "Excellence is not an act, but a habit."
                </p>
            </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-1 md:order-2 text-left">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-display mb-10 leading-[1.1]">
                    Trust is our <br/>primary engine.
                </h3>
                <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed max-w-lg">
                    <p>
                        We guarantee top condition vehicles with full history titles and guaranteed technical inspection.
                        Whether buying or renting, our mission is to ensure a comfortable and safe everyday life on the road.
                    </p>
                    <p>
                        From seasonal tyre changes to handling unexpected maintenance, our long-term rental service 
                        is designed to let you simply choose a car and drive.
                    </p>
                </div>

                <div className="mt-16 flex gap-16 border-t border-white/10 pt-8">
                    <div>
                        <span className="block text-5xl font-display text-white mb-2">500+</span>
                        <span className="text-xs uppercase tracking-widest text-[#ff3c00]">Vehicles Delivered</span>
                    </div>
                    <div>
                        <span className="block text-5xl font-display text-white mb-2">100%</span>
                        <span className="text-xs uppercase tracking-widest text-[#ff3c00]">Verified History</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
