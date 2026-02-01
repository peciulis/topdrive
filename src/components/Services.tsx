"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Premium Sales",
    description: "Exclusive inventory of hand-picked luxury vehicles.",
    detail: "Specializing in low-mileage, high-spec cars that maintain independent value."
  },
  {
    id: "02",
    title: "Long-Term Rental",
    description: "Flexibility of ownership without commitment.",
    detail: "Premium fleet for 6-24 month terms. Includes insurance, maintenance, and storage."
  },
  {
    id: "03",
    title: "Brokerage",
    description: "Maximize value without the hassle.",
    detail: "We handle the entire sale process with a transparent success fee only when sold."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
                <h3 className="text-4xl md:text-6xl font-display leading-[1.1]">
                    Our Services
                </h3>
            </div>
            <p className="max-w-md text-white/60 font-light text-lg leading-relaxed md:pb-2">
                We provide a full spectrum of automotive services designed for those who value time and quality above all else.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                >
                    <div className="border-b border-white/10 pb-12 pt-8 min-h-[320px] flex flex-col justify-between group-hover:border-[#ff3c00] transition-colors duration-500 relative">
                        
                        <div className="mt-auto">
                             <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-medium group-hover:text-white transition-colors">
                                    {service.title}
                                </h4>
                                <ArrowUpRight className="text-[#ff3c00] group-hover:rotate-45 transition-transform duration-500" size={24} />
                            </div>
                            
                             <p className="text-xl text-white mb-6 font-light">
                                {service.description}
                            </p>
                            <p className="text-white/60 font-light text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {service.detail}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
