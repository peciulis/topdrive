"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "Do you offer warranty on sold vehicles?",
    answer: "Yes. Every vehicle we sell undergoes a rigorous technical inspection. We provide a standard 12-month warranty on engine and gearbox, with options to extend. Our cars from EU auctions come with full service history verification."
  },
  {
    question: "How does the long-term rental work?",
    answer: "Our long-term rental is all-inclusive. You pay a fixed monthly fee which covers insurance (CASCO + TPL), technical maintenance, seasonal tyres and storage, and 24/7 roadside assistance. Minimum term is 6 months."
  },
  {
    question: "Can you source a specific car configuration?",
    answer: "Absolutely. This is our specialty. You provide us with your desired specifications (model, year, features, budget), and our team searches exclusive dealer networks across Europe to find your match."
  },
  {
    question: "How does the Commission Sale work?",
    answer: "You entrust your car to us. We prepare it, photograph it, and list it on premium channels. We handle all viewings and test drives. Once sold, we charge a pre-agreed success fee."
  },
  {
    question: "Where are you located and do you deliver?",
    answer: "We are based in Vilnius, Lithuania. However, we deliver vehicles directly to your doorstep anywhere in the Baltics and select EU countries via secure enclosed transport."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        {/* Header Left */}
        <div className="col-span-1 md:col-span-4">
            <h3 className="text-4xl md:text-6xl font-display mb-8">
                Frequently Asked Questions
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Transparency excludes uncertainty. Here are the most common questions our clients ask. 
            </p>
            <Button variant="outline" href="#contact">
                Contact Us
            </Button>
        </div>

        {/* List Right */}
        <div className="col-span-1 md:col-span-7 md:col-start-6">
          <div className="flex flex-col border-t border-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl font-light pr-8 text-gray-200 group-hover:text-[#ff3c00] transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#ff3c00]">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-white/60 font-light leading-relaxed max-w-2xl text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
