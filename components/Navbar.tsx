"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navigationLinks = [
  { label: "Why Choose Us?", href: "#why-study-mind" },
  { label: "Our Courses", href: "#our-courses" },
  { label: "Who should join?", href: "#who-should-join" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Safety", href: "#safety" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQs", href: "#faqs" },
  { label: "Fees", href: "#fees" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-[1920px] mx-auto px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 min-h-[64px]">
          {/* Logo Section - Left */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Image
                src="/logo/IMI Logo - Booklets.png"
                alt="Improve ME Institute Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain flex-shrink-0"
                priority
              />
              <div className="h-8 md:h-10 w-px bg-gray-400 hidden md:block flex-shrink-0"></div>
              <Image
                src="/logo/study-mind-png-long-logo.png"
                alt="Study Mind Logo"
                width={150}
                height={40}
                className="h-8 md:h-10 w-auto object-contain flex-shrink-0"
                priority
              />
            </div>
          </div>

          {/* Navigation Menu - Center (Only visible on xl: 1280px+) */}
          <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 px-4">
            <nav className="flex items-center gap-4" aria-label="Main navigation">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-2 py-2 text-gray-800 hover:text-primary-blue-dark text-xs font-medium transition-colors duration-200 relative group whitespace-nowrap flex-shrink-0"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue-dark group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Section - Book Now Button & Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNow}
              className="bg-primary-blue-dark text-white px-4 md:px-6 py-2 md:py-2.5 rounded-button font-bold text-xs md:text-sm hover:bg-primary-blue transition-all shadow-md whitespace-nowrap flex-shrink-0"
            >
              Book Now
            </motion.button>

            {/* Hamburger Menu - Only visible below xl (1280px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-lg flex-shrink-0"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-1">
                {navigationLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-blue-dark hover:bg-gray-50 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
