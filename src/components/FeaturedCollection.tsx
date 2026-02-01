"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CarCard from "@/components/CarCard";
import Button from "@/components/ui/Button";

const cars = [
  {
    make: "BMW",
    model: "M5",
    year: "2025",
    price: "€115,700",
    mileage: "6,400 km",
    image: "/cars/bmwg90.webp",
  },
  {
    make: "BMW",
    model: "M4",
    year: "2022",
    price: "€57,850",
    mileage: "51,800 km",
    image: "/cars/bmwm4.webp",
  },
  {
    make: "BMW",
    model: "X1 M35i",
    year: "2023",
    price: "€47,490",
    mileage: "18,400 km",
    image: "/cars/bmwx1.webp",
  },
  {
    make: "BMW",
    model: "X5",
    year: "2022",
    price: "€47,490",
    mileage: "90,000 km",
    image: "/cars/bmwx5.webp",
  },
  {
    make: "Porsche",
    model: "Cayenne",
    year: "2019",
    price: "€39,990",
    mileage: "187,000 km",
    image: "/cars/porschecayenne.webp",
  },
];

export default function FeaturedCollection() {
  return (
    <section id="inventory" className="py-24 bg-[#020202] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h3 className="text-4xl md:text-6xl font-display">
              Featured Arrivals
            </h3>
          </div>
          
        <div className="hidden md:block pb-2">
            <Button variant="text" icon="arrow-up-right" href="/inventory">
                View All Stock
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 md:hidden flex justify-center">
            <Button variant="outline" icon="arrow-up-right" href="/inventory">
                View All Stock
            </Button>
        </div>
      </div>
    </section>
  );
}
