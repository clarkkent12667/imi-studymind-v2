"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We audited a business which was really helpful because that's what I want to go into. I would 100% recommend it to anyone.",
    name: "Tania",
    programme: "Investment Banking",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&auto=format",
  },
  {
    quote:
      "It's covered loads of different strands and it's been really interesting. The tutor was really good and described everything really well and he's made everything fun and engaging.",
    name: "Aidan",
    programme: "Computer Science",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop&auto=format",
  },
  {
    quote:
      "My favourite part was the forensics investigation because that was really interactive. I also enjoyed going to the Chambers because I've never seen them before.",
    name: "Tania",
    programme: "Criminology",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=800&fit=crop&auto=format",
  },
  {
    quote:
      "I found it really insightful and thoroughly enjoyed it. There never used to be in-person psychology work experience so it was really good to find this now. I got a lot more out of it compared to a virtual experience.",
    name: "Alina",
    programme: "Psychology",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=800&fit=crop&auto=format",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="bg-white section-padding">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-text-gray uppercase tracking-wide mb-2">
                EXPERTS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4 sm:mb-5 md:mb-6">
                Learn from industry experts
              </h2>
              <p className="text-base sm:text-lg text-text-gray leading-relaxed">
                Blending practical knowledge, industry visits and project-based learning, we offer an exceptional enrichment experience. Learning from those at the forefront of their field, students receive industry feedback and personal career coaching to prepare them for an exciting future in their chosen field.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative h-72 sm:h-80 md:h-96 rounded-card overflow-hidden group"
              >
                {/* Background Image with Blur */}
                <div className="absolute inset-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover blur-sm scale-110 group-hover:scale-115 transition-transform duration-500"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Blue Vertical Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-blue" />

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-center p-4 sm:p-6 md:p-8 text-white">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl leading-none mr-1 sm:mr-2">"</span>
                    {testimonial.quote}
                  </p>
                  <p className="font-semibold text-base sm:text-lg">
                    {testimonial.name}, {testimonial.programme}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

