"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Hero section images from public folder
const heroImages = [
  "/hero section/DSC03280.JPG",
  "/hero section/DSC03370.JPG",
  "/hero section/DSC03384.JPG",
  "/hero section/DSC03477.JPG",
  "/hero section/DSC05952.JPG",
  "/hero section/DSC06034.JPG",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden w-full">
      {/* Top Hero Section - Deep Blue */}
      <div className="relative bg-gradient-to-br from-primary-blue-dark via-primary-blue to-primary-blue-dark text-white pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 w-full overflow-x-hidden">
        {/* Background Geometric Shapes */}
        <div className="absolute left-4 top-16 sm:left-10 sm:top-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-4 top-24 sm:right-10 sm:top-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute left-1/3 top-32 sm:top-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight px-2 break-words"
              style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
            >
              Explore 2026 Improve ME Institute Work Experience Programmes in Collaboration with Study Mind UK
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 w-full"
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
                className="w-full sm:w-auto bg-white text-primary-blue-dark px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#booking");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="hidden sm:block w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:text-primary-blue-dark transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us to Learn More
              </motion.button>
              <motion.a
                href="https://studymind.co.uk/work-experience/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:text-primary-blue-dark transition-all shadow-lg hover:shadow-xl"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-0 w-full overflow-hidden"
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
                    style={{ filter: 'blur(0.5px) brightness(0.98) contrast(0.95)' }}
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
