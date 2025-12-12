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

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    // Close menu first for better UX
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to start closing, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleBookNow = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    // Close menu first for better UX
    setIsMobileMenuOpen(false);
    
    // Small delay to allow menu to start closing, then scroll
    setTimeout(() => {
      const element = document.querySelector("#booking");
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  const handleLogoClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector("#home");
      if (element) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md overflow-x-hidden w-full max-w-[100vw] box-border">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8 w-full max-w-full box-border overflow-x-hidden">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 min-h-[56px] sm:min-h-[64px] gap-2 w-full max-w-full box-border">
          {/* Logo Section - Left */}
          <div className="flex items-center shrink-0 min-w-0 overflow-hidden max-w-[calc(100%-80px)] sm:max-w-none box-border">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink min-w-0 max-w-full cursor-pointer hover:opacity-80 transition-opacity box-border"
              aria-label="Scroll to top"
            >
              <Image
                src="/logo/IMI Logo - Booklets.png"
                alt="Improve ME Institute Logo"
                width={120}
                height={40}
                className="h-10 sm:h-9 md:h-10 lg:h-12 w-auto object-contain flex-shrink-0 max-w-[90px] sm:max-w-[90px] md:max-w-none box-border"
                priority
              />
              <div className="h-10 sm:h-9 md:h-10 lg:h-12 w-px bg-gray-400 hidden sm:block flex-shrink-0 box-border"></div>
              <Image
                src="/logo/study-mind-png-long-logo.png"
                alt="Study Mind Logo"
                width={150}
                height={40}
                className="h-10 sm:h-9 md:h-10 lg:h-12 w-auto object-contain flex-shrink-0 max-w-[120px] sm:max-w-[110px] md:max-w-none box-border"
                priority
              />
            </button>
          </div>

          {/* Navigation Menu - Center (Only visible on xl: 1280px+) */}
          <div className="hidden xl:flex items-center justify-center flex-1 min-w-0 px-4 box-border overflow-x-hidden">
            <nav className="flex items-center gap-4 max-w-full box-border" aria-label="Main navigation">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="px-2 py-2 text-gray-800 hover:text-primary-blue-dark text-xs font-medium transition-colors duration-200 relative group whitespace-nowrap flex-shrink-0 cursor-pointer box-border max-w-full overflow-hidden"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue-dark group-hover:w-full transition-all duration-300 box-border"></span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Section - Book Now Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 box-border">
            {/* Book Now Button - Only visible on desktop (xl+) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleBookNow(e)}
              className="hidden xl:block bg-primary-blue-dark text-white px-6 py-2.5 rounded-button font-bold text-sm hover:bg-primary-blue transition-all shadow-md whitespace-nowrap flex-shrink-0"
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
              className="xl:hidden overflow-hidden border-t border-gray-200 w-full max-w-full box-border"
            >
              <div className="py-4 space-y-1">
                {navigationLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-blue-dark hover:bg-gray-50 active:bg-gray-100 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap touch-manipulation"
                    style={{ touchAction: 'manipulation' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                {/* Book Now Button in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationLinks.length * 0.05 }}
                  className="px-4 pt-4 mt-2 border-t border-gray-200"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleBookNow(e)}
                    className="w-full bg-primary-blue-dark text-white px-6 py-3 rounded-button font-bold text-base hover:bg-primary-blue active:bg-primary-blue transition-all shadow-md touch-manipulation"
                    style={{ touchAction: 'manipulation' }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
