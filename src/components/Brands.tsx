"use client";

import { motion } from "framer-motion";

const brands = [
  "BMW",
  "Mercedes-Benz", 
  "Porsche",
  "Audi",
  "Range Rover",
  "Tesla",
  "Lexus",
  "Maserati"
];

export default function Brands() {
  return (
    <section className="py-12 bg-[#020202] border-b border-white/5 overflow-hidden">
      <div className="flex relative">
        <motion.div 
          className="flex gap-16 md:gap-32 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-2xl md:text-4xl font-display text-white/30 hover:text-white/60 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
