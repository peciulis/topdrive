"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#020202] text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24">
             <h3 className="text-4xl md:text-6xl font-display mb-8">
              Get In Touch
            </h3>
             <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
                Have questions about our inventory or services? Fill out the form below and we will get back to you shortly.
            </p>
        </div>

        {/* Centered Form */}
        <div className="w-full">
             <form className="flex flex-col gap-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="group relative">
                        <input 
                            type="text" 
                            placeholder="Name"
                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff3c00] transition-colors text-center md:text-left"
                        />
                    </div>
                     <div className="group relative">
                        <input 
                            type="tel" 
                            placeholder="Phone"
                            className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff3c00] transition-colors text-center md:text-left"
                        />
                    </div>
                </div>

                 <div className="group relative">
                    <input 
                        type="email" 
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff3c00] transition-colors text-center md:text-left"
                    />
                </div>

                 <div className="group relative">
                    <textarea 
                        rows={1}
                        placeholder="Tell us about your request"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff3c00] transition-colors resize-none text-center md:text-left"
                    />
                </div>

                <div className="pt-8 flex justify-center w-full">
                    <Button variant="primary" className="w-full md:w-auto min-w-[200px] justify-center">
                        Send Message
                    </Button>
                </div>
            </form>
        </div>

      </div>
    </section>
  );
}