"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Hero section images from public folder
const heroImages = [
  "/hero section/hero1.webp",
  "/hero section/hero2.webp",
  "/hero section/hero3.webp",
  "/hero section/hero4.webp",
  "/hero section/hero5.webp",
  "/hero section/hero6.webp",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Top Hero Section - Deep Blue */}
      <div className="relative bg-gradient-to-br from-primary-blue-dark via-primary-blue to-primary-blue-dark text-white pt-24 pb-20 md:pt-28 md:pb-24">
        {/* Background Geometric Shapes */}
        <div className="absolute left-10 top-20 w-20 h-20 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-20 top-32 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute left-1/3 top-40 w-12 h-12 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto space-y-8">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Explore 2026 Improve ME Institute Work Experience Programmes in Collaboration with Study Mind UK
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#booking");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-white text-primary-blue-dark px-12 py-4 rounded-button font-bold text-lg md:text-xl hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl"
              >
                Book Now
              </motion.button>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto pt-12"
            >
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`Student experience ${index + 1}`}
                    fill
                    quality={100}
                    priority={index < 3}
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover"
                    unoptimized={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
