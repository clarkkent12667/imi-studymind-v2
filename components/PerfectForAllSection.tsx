"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Gain career insights through experiences with industry professionals",
  "Boost your UCAS application with tailored support and guidance",
  "Enjoy hands-on learning to bring theory to life",
  "Learn from experts and prepare for your future career",
];

export default function PerfectForAllSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-should-join" ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-text-gray uppercase tracking-wide mb-2">
                WHO IS IT FOR
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
                Perfect for all students
              </h2>
            </div>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <Star className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5 fill-primary-blue" />
                  <span className="text-base text-text-dark leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
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

          {/* Image with Testimonial Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-400 p-1">
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/who is it for/image-31.webp"
                  alt="Students in museum with vintage airplanes"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              
              {/* Testimonial Overlay */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[85%] sm:max-w-xs bg-gray-100/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                <p className="text-xs sm:text-sm text-text-dark mb-2 italic">
                  "Our tutor was amazing. He knew the answer to every question that you could think of about engineering, and knew about everyone's subjects"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

