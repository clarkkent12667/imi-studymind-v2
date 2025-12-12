"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function WhereStudentsStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accommodation" ref={ref} className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Curved Arrow */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 z-10 hidden md:block">
              <svg
                width="60"
                height="60"
                className="md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary-blue"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M20 60 Q40 20 60 20"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M55 15 L60 20 L55 25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-primary-blue">
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full">
                <Image
                  src="/accomodation/image-32@2x.webp"
                  alt="UCL Ramsay Hall"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized={true}
                />
                
                {/* Location Pin Overlay */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary-blue-dark text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">UCL Ramsay Hall</span>
                </div>
              </div>
            </div>
            
            {/* View Location Text */}
            <p className="text-center text-text-gray mt-4 font-medium">
              View Location
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-text-gray uppercase tracking-wide mb-2">
                ACCOMMODATION
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
                Where do students stay?
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-text-gray leading-relaxed">
              <p>
                Experience the best of London by staying in UCL's central halls, UCL Ramsay Hall. This accommodation, linked to one of the world's top universities, is ideally located near Oxford Street and is the heart of London.
              </p>
              <p>
                Your child will enjoy a single room with shared facilities, plus access to social spaces and study areas. This is the perfect place for them to explore London's culture while being surrounded by world-class education. Safe, convenient, and memorable—it's the ideal choice for international students.
              </p>
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={() => {
                const element = document.querySelector("#booking");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-8 py-3 border-2 border-primary-blue text-primary-blue rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-colors"
            >
              Contact Us to Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

