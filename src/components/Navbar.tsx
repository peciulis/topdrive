"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    // Determine scroll direction and visibility
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true);  // Scrolling up
    }

    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  });

  return (
    <nav 
        className={cn(
            "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 text-white transition-all duration-500",
            isScrolled ? "py-6 bg-[#020202]/90 backdrop-blur-md" : "py-6 md:py-10 bg-transparent",
            !isVisible && "-translate-y-full"
        )}
    >
      <div className="flex justify-between items-center max-w-[1920px] mx-auto relative z-50">
        <Link 
            href="/" 
            className={cn(
                "relative transition-all duration-500",
                isScrolled ? "h-10 w-32" : "h-12 w-36 md:h-14 md:w-44"
            )}
        >
          <Image 
            src="/Topdrive_Header_Logo.svg"
            alt="TopDrive"
            fill
            className="object-contain object-left" 
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {["Inventory", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                  "uppercase tracking-widest hover-underline-animation transition-all duration-500",
                  isScrolled ? "text-sm" : "text-base"
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-[#020202] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {["Inventory", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl uppercase tracking-widest hover:text-[#ff3c00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
