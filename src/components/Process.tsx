"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We define your requirements together, analyzing the market for the best fit."
  },
  {
    num: "02",
    title: "Sourcing",
    desc: "Rigorous inspection of candidate vehicles across Europe's premium network."
  },
  {
    num: "03",
    title: "Logistics",
    desc: "Secure transport, paperwork handling, and import formalities managed by us."
  },
  {
    num: "04",
    title: "Handover",
    desc: "Key delivery. Detailed walkthrough. Ready for the road."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
                <h3 className="text-4xl md:text-6xl font-display">Seamless Acquisition</h3>
            </div>
            <p className="text-sm uppercase tracking-widest text-[#ff3c00] border-b border-[#ff3c00] pb-1">
                How it works
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {steps.map((step, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group pr-8"
                >
                    <div className="text-6xl md:text-7xl font-display text-[#ff3c00]/20 group-hover:text-[#ff3c00] transition-colors mb-6 font-medium">
                        {step.num}
                    </div>
                    <div className="h-[2px] w-12 bg-white/10 group-hover:bg-[#ff3c00] transition-colors mb-8" />
                    
                    <h4 className="text-xl md:text-2xl text-white font-medium mb-4">{step.title}</h4>
                    <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs group-hover:text-gray-400 transition-colors">
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
