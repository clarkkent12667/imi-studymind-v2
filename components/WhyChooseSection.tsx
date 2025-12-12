"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import StatsCounter from "./StatsCounter";

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1000, suffix: "", label: "Happy Alumni" },
    { value: 50, suffix: "+", label: "Nations represented" },
    { value: 10, suffix: " YEARS", label: "Excellence of" },
    { value: 98, suffix: "%", label: "Recommended" },
  ];

  return (
    <section id="why-study-mind" ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/why choose us/DW4A3864.JPG"
              alt="Students in professional setting"
              fill
              quality={100}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized={true}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wide mb-2">
                WHY CHOOSE US?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Immersive Work Experience
              </h2>
              <p className="text-base sm:text-lg text-text-gray">
                Improve ME Institute, in collaboration with Study Mind UK, offers work experience programmes trusted by 100s of students each year.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-card border border-blue-100"
                >
                  <StatsCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isInView}
                  />
                  <p className="text-sm text-text-gray mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

