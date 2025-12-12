"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Heart } from "lucide-react";
import Image from "next/image";

const safetyPoints = [
  {
    icon: Heart,
    title: "Fully Vetted, Always Prepared",
    description: "All staff are DBS-checked and first-aid trained",
  },
  {
    icon: Heart,
    title: "Support Around the Clock",
    description: "Dedicated leaders are there 24/7 and ensure students feel happy, safe, and cared for",
  },
  {
    icon: Heart,
    title: "A Home Away from Home",
    description: "A warm, welcoming environment where students thrive and feel at ease.",
  },
];

export default function WhyStudentsLoveUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    {
      src: "/safety/safety1.webp",
      alt: "Students taking blood pressure in medical class",
    },
    {
      src: "/safety/safety3.webp",
      alt: "Student working on engineering project",
    },
    {
      src: "/safety/safety4.webp",
      alt: "Students working on robotics project",
    },
    {
      src: "/safety/hero4.webp",
      alt: "Happy students celebrating in library",
    },
  ];

  return (
    <section id="safety" ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
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
                SAFETY
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
                Why students feel safe and supported
              </h2>
            </div>
            
            <ul className="space-y-6">
              {safetyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <motion.li
                    key={point.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="space-y-2"
                  >
                    <div className="flex items-start gap-3">
                      <IconComponent className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5 fill-primary-blue" />
                      <div>
                        <h3 className="text-lg font-semibold text-text-dark mb-1">
                          {point.title}
                        </h3>
                        <p className="text-base text-text-gray leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Image Grid - 2x2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {images.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="relative h-48 sm:h-56 md:h-64 rounded-card overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  unoptimized={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

