"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Crown } from "lucide-react";

const pricingTiers = [
  {
    name: "Rising Talent",
    price: "AED 8,995.00",
    weeks: "1 week",
    description: "Kickstart your career with confidence",
    icon: Brain,
    features: [
      "1 week including:",
      "Hands-on, practical workshops",
      "Run by industry professionals",
      "Visits & Excursions",
      "UCAS application advice",
    ],
    popular: false,
  },
  {
    name: "Career Explorer",
    price: "AED 14,995.00",
    weeks: "2 weeks",
    description: "Your path towards your dream career",
    icon: Brain,
    features: [
      "2 weeks including:",
      "All of week 1 benefits",
      "Build on career skills",
      "Networking opportunities",
      "Choice of: 2nd week, industry placements or career & life skills week",
    ],
    popular: true,
  },
  {
    name: "Future Leader",
    price: "AED 19,995.00",
    weeks: "3 weeks",
    description: "Build a solid foundation for a brighter future",
    icon: Crown,
    features: [
      "3 weeks, including:",
      "The ultimate immersive experience",
      "Week 1",
      "Week 2",
      "Career & life skills week",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fees" ref={ref} className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding relative overflow-hidden">
      {/* Background Grid Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg width="100%" height="100%" className="text-primary-blue">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg width="100%" height="100%" className="text-primary-blue">
          <defs>
            <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-text-gray uppercase tracking-wide mb-4">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-dark">
            <span className="text-primary-blue">Summer</span> Work Experience{" "}
            <span className="text-primary-blue">2026</span>
          </h2>
          <p className="text-base text-text-gray mb-6">
            Whether you choose 1 week or 3 weeks, we've got you covered.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-card p-8 shadow-md ${
                  tier.popular
                    ? "bg-gradient-to-br from-primary-blue to-primary-blue-light text-white scale-105"
                    : "bg-white text-text-dark"
                }`}
              >
                {/* Week Badge */}
                <div className="absolute top-4 right-4 bg-accent-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {tier.weeks}
                </div>

                {/* Most Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most popular</span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div className={`p-4 rounded-full ${
                    tier.popular ? "bg-white/20" : "bg-primary-blue/10"
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      tier.popular ? "text-white" : "text-primary-blue"
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-3 ${
                    tier.popular ? "text-white" : "text-text-dark"
                  }`}>
                    {tier.name}
                  </h3>
                  <div className="mb-3">
                    <span className={`text-4xl font-bold ${
                      tier.popular ? "text-white" : "text-text-dark"
                    }`}>
                      {tier.price}
                    </span>
                  </div>
                  <p className={`text-base ${
                    tier.popular ? "text-white/90" : "text-text-gray"
                  }`}>
                    {tier.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => {
                    const element = document.querySelector("#booking");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={`w-full px-6 py-3 rounded-lg font-medium mb-6 transition-colors ${
                    tier.popular
                      ? "bg-[#2D1B4E] text-white hover:bg-[#3D2B5E]"
                      : "bg-white border-2 border-text-gray text-text-dark hover:bg-gray-50"
                  }`}
                >
                  Book Now
                </button>

                {/* Features List */}
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm ${
                        tier.popular ? "text-white/90" : "text-text-gray"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

