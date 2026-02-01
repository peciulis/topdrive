import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text" | "link";
  icon?: "arrow-right" | "arrow-up-right" | "none";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = "primary",
  icon = "arrow-right",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "group inline-flex items-center gap-3 text-sm uppercase tracking-widest transition-all duration-700 ease-out font-medium cursor-pointer";
  
  // Standardized Premium Styles
  const variants = {
    // Primary is now the same as standard premium outline to ensure uniformity
    primary: "border border-white/20 hover:border-[#ff3c00] hover:text-[#ff3c00] text-white px-8 py-4 backdrop-blur-sm",
    // Outline matches primary for consistency
    outline: "border border-white/20 hover:border-[#ff3c00] hover:text-[#ff3c00] text-white px-8 py-4 backdrop-blur-sm",
    // Text only
    text: "text-white hover:text-[#ff3c00]",
    // Underlined link
    link: "text-white border-b border-white/30 pb-1 hover:border-[#ff3c00] hover:text-[#ff3c00]",
  };

  const Icon = icon === "arrow-right" ? ArrowRight : icon === "arrow-up-right" ? ArrowUpRight : null;

  const content = (
    <>
      {children}
      {Icon && (
        <Icon 
          size={18} 
          className={cn(
            "transition-transform duration-700",
            icon === "arrow-right" && "group-hover:translate-x-1",
            icon === "arrow-up-right" && "group-hover:-translate-y-1 group-hover:translate-x-1"
          )} 
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
