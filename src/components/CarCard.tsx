"use client";

import Image from "next/image";

export default function CarCard({ car }:{ car: { make: string; model: string; year: string; price: string; mileage: string; image: string } }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <Image
          src={car.image}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover transform transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-wider border border-white/10">
                Automatic
            </span>
            <span className="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase tracking-wider border border-white/10">
                Petrol
            </span>
        </div>
      </div>

      <div className="flex justify-between items-start border-b border-white/10 pb-6 group-hover:border-[#ff3c00] transition-colors duration-500">
        <div>
          <h4 className="text-2xl font-medium mb-1 group-hover:text-white transition-colors">{car.make}</h4>
          <p className="text-white/60 font-light group-hover:text-white transition-colors">{car.model}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-medium mb-1">{car.price}</p>
          <div className="flex items-center gap-2 justify-end text-xs text-white/40 uppercase tracking-wider">
             <span>{car.year}</span>
             <span>•</span>
             <span>{car.mileage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
