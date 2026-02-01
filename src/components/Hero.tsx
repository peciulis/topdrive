"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020202] text-white flex flex-col justify-between pt-32 pb-12 px-6 md:px-12">
      {/* Background Ambience / Image Overlay */}
      <div className="absolute inset-0 z-0">
          <Image 
            src="/rental_bg.jpg"
            priority={true}
            alt="Cinematic Car Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center max-w-[1920px] mx-auto w-full">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 font-display">
              Excellence <br /> In Motion.
            </h1>
            <p className="max-w-md text-white/60 text-lg md:text-xl font-light pl-2 mt-8 mb-10">
              Professional long-term car rental and car sales. Experience the road without worries. 
            </p>
            
            <div className="pl-2">
                <Button variant="primary" href="#inventory">
                    See Inventory
                </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Visual Placeholder */}
        <div className="hidden md:block col-span-1 md:col-span-2 relative">
             {/* Empty for now to let background shine, or could be a scrolling element */}
        </div>
      </div>

      {/* Footer / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 flex justify-center items-end w-full max-w-[1920px] mx-auto border-t border-white/10 pt-6"
      >
        <div className="animate-bounce text-[#ff3c00]">
          <ArrowDown size={20} strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
}
