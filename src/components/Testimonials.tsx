"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jānis B.",
    content: "The process was incredibly smooth. I told them what I wanted – a specific spec BMW M5 – and they found it in Germany within a week.",
    car: "BMW M5 Competition"
  },
  {
    name: "Pēteris K.",
    content: "Long-term rental is the way to go. No depreciation worries, no service headaches. TopDrive's fleet is impeccable.",
    car: "Porsche Cayenne"
  },
  {
    name: "Sanda L.",
    content: "Professionalism at its finest. The car was delivered to my office, detailed to perfection. Highly recommended for busy professionals.",
    car: "Mercedes-Benz S-Class"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="mb-24">
            <h3 className="text-4xl md:text-6xl font-display">Client Reviews</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="border-t border-white/10 pt-8 group-hover:border-[#ff3c00] transition-colors duration-500">
                  
                  <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-10 min-h-[120px] group-hover:text-white transition-colors">
                    "{item.content}"
                  </p>

                  <div className="flex flex-col gap-1">
                     <span className="font-display text-lg text-white">{item.name}</span>
                     <span className="text-xs text-white/40 font-light mt-1">{item.car}</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
