"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Building2, Heart, Brain, Plus, X } from "lucide-react";

const faqCategories = [
  {
    id: "academic",
    label: "Academic excellence",
    icon: GraduationCap,
  },
  {
    id: "beyond",
    label: "Beyond classroom",
    icon: Building2,
  },
  {
    id: "safety",
    label: "Safety & support",
    icon: Heart,
  },
  {
    id: "why",
    label: "Why Choose Us?",
    icon: Brain,
  },
];

const allFaqs = [
  {
    question: "How many students are in a group?",
    answer: "We maintain small group sizes of 12-15 students for personalized attention and optimal learning experiences.",
    category: "academic",
  },
  {
    question: "Does Improve ME Institute have a bursary scheme?",
    answer: "Yes, Improve ME Institute offers bursary schemes to support students who may need financial assistance. Please contact us for more information about eligibility and application processes.",
    category: "academic",
  },
  {
    question: "How is the content delivered, and will I receive any formal certification?",
    answer: "Content is delivered through hands-on workshops, industry visits, and practical sessions. Upon completion, you will receive a formal certificate of completion that can enhance your UCAS applications.",
    category: "academic",
  },
  {
    question: "Will Improve ME Institute's work experience programmes help with my university applications?",
    answer: "Absolutely! Our programmes provide valuable experiences, certificates, and UCAS application support that can significantly strengthen your university applications and personal statements.",
    category: "academic",
  },
  {
    question: "Who are Improve ME Institute's work experience programmes run by?",
    answer: "Our programmes are run by industry professionals and experts from leading companies and universities, ensuring you receive authentic, real-world insights into your chosen career path.",
    category: "beyond",
  },
  {
    question: "What safety measures are in place?",
    answer: "All staff are DBS-checked and first-aid trained. We have dedicated leaders available 24/7 to ensure students feel safe, happy, and well-supported throughout their experience.",
    category: "safety",
  },
  {
    question: "What makes Improve ME Institute different?",
    answer: "Improve ME Institute, in collaboration with Study Mind UK, offers immersive, hands-on work experience programmes with industry professionals, providing authentic career insights and practical skills that go beyond traditional classroom learning.",
    category: "why",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("academic");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = allFaqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-text-gray uppercase tracking-wide mb-2">
            FAQS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-text-dark">
            Frequently asked questions
          </h2>
          <div className="space-y-1 text-sm sm:text-base text-text-gray px-4">
            <p>Work experience programmes for ages 15-18 in 15 industries.</p>
            <p>Pick your career path, then choose a Weekend Programme or Summer Experience.</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-colors text-xs sm:text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-primary-blue-light text-white border-2 border-primary-blue"
                    : "bg-white text-text-dark border-2 border-gray-200 hover:border-primary-blue-light"
                }`}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary-blue-light transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-base sm:text-lg pr-3 sm:pr-4 text-text-dark">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-text-gray leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

