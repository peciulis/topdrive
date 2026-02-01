"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wallet, BadgePercent } from "lucide-react";
import Button from "@/components/ui/Button";

export default function TradeIn() {
  return (
    <section className="py-32 bg-[#020202] text-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
          
            {/* Text Content - Sticky for cinematic feel */}
          <div className="max-w-xl sticky top-32">
            <h3 className="text-4xl md:text-6xl font-display mb-10 leading-tight">
              Sell Your Vehicle
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              We are constantly looking for exceptional vehicles to add to our inventory. 
              Whether you want a quick sale or a premium commission service, we offer 
              competitive market rates for verified luxury cars.
            </p>

            <div className="mb-12 md:mb-0">
                <Button variant="outline" href="#contact">
                    Get a Valuation
                </Button>
            </div>
          </div>

          {/* List Content - Minimal Rows */}
          <div className="flex flex-col pt-8">
            
            {/* Option 1 */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="border-t border-white/10 py-12"
            >
                <div className="flex items-baseline justify-between mb-4">
                     <h4 className="text-3xl md:text-4xl font-display text-white">Instant Buyout</h4>
                     <Wallet className="text-[#ff3c00]" size={32} strokeWidth={1} />
                </div>
                <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                    Receive an immediate offer. If accepted, we handle payment and title transfer within 24 hours. Best for speed.
                </p>
            </motion.div>

            {/* Option 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               viewport={{ once: true }}
               className="border-t border-white/10 py-12"
            >
                 <div className="flex items-baseline justify-between mb-4">
                     <h4 className="text-3xl md:text-4xl font-display text-white">Commission Sale</h4>
                     <BadgePercent className="text-[#ff3c00]" size={32} strokeWidth={1} />
                </div>
                <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                    We list your car in our showroom. You retain ownership until sold, maximizing your return while we handle inquiries.
                </p>
            </motion.div>
            
            {/* Decorative bottom line */}
            <div className="w-full h-[1px] bg-white/10" />
            
          </div>

        </div>
      </div>
    </section>
  );
}
