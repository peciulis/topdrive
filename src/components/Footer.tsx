"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020202] text-white py-24 border-t border-white/5 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 lg:gap-24 text-center md:text-left">
            
            {/* Brand Side */}
            <div className="flex flex-col items-center md:items-start justify-between h-full min-h-[160px] max-w-md">
                 <div className="w-40 h-10 relative mb-8">
                    <Image 
                        src="/Topdrive_Header_Logo.svg" 
                        alt="TopDrive" 
                        fill
                        className="object-contain object-center md:object-left"
                    />
                </div>
                
                <p className="text-white/60 font-light text-lg leading-relaxed mb-12">
                    Making car ownership simple, convenient, and safe. Professional long-term car rental and car sales services. 
                </p>
            </div>

            {/* Info Side */}
            <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full md:w-auto items-center md:items-start">
                {/* Location */}
                <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#ff3c00] mb-8">Location</h4>
                    <p className="text-xl font-light leading-relaxed text-white/60">
                        Brīvības gatve 282 - 72<br />
                        Rīga, LV-1006<br />
                        Latvia
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#ff3c00] mb-8">Contact</h4>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:topdrive@topdrive.lv" className="text-xl font-light text-white/60 hover:text-[#ff3c00] transition-colors">
                            topdrive@topdrive.lv
                        </a>
                        <a href="tel:+37120310000" className="text-xl font-light text-white/60 hover:text-[#ff3c00] transition-colors">
                            +371 203 10000
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
