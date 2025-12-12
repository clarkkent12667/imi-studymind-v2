"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const benefitsRow1 = [
  "Early bird discounts available",
  "Limited spaces per programme",
  "Expert industry mentors",
];

const benefitsRow2 = [
  "University-recognized certificate",
  "Career preparation workshops",
];

export default function FinalCTASection() {
  return (
    <section id="how-to-apply" className="relative bg-gradient-to-b from-primary-blue-light to-primary-blue text-white section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Book Your 2026 Work Experience Now!
          </motion.h2>

          {/* Benefits - Two Rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 sm:space-y-4"
          >
            {/* First Row */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {benefitsRow1.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {benefitsRow2.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 sm:pt-4"
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
              className="flex items-center gap-2 bg-white text-primary-blue-dark px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-button font-bold text-base sm:text-lg mx-auto hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}

