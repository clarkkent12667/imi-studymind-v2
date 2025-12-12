"use client";

import Image from "next/image";

export default function Footer() {
  const handleLogoClick = () => {
    const element = document.querySelector("#home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary-blue-dark text-white border-t border-white/10">
      <div className="container-custom py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8">
          {/* Description */}
          <div className="self-start">
            <button
              onClick={handleLogoClick}
              className="bg-white px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 sm:gap-3 w-fit cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <Image
                src="/logo/IMI Logo - Booklets.png"
                alt="Improve ME Logo"
                width={120}
                height={40}
                className="h-7 sm:h-8 md:h-10 w-auto object-contain flex-shrink-0"
              />
              <div className="h-7 sm:h-8 md:h-10 w-px bg-gray-300 flex-shrink-0"></div>
              <Image
                src="/logo/study-mind-png-long-logo.png"
                alt="Study Mind Logo"
                width={150}
                height={40}
                className="h-7 sm:h-8 md:h-10 w-auto object-contain flex-shrink-0"
              />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#why-study-mind" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Why Choose Us?
                </a>
              </li>
              <li>
                <a href="#our-courses" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#who-should-join" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Who should join?
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="#accommodation" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#safety" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#fees" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors">
                  Fees
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                Email: <a href="mailto:contact@improvemeinstitute.com?subject=Inquiry" className="hover:text-white transition-colors break-all">contact@improvemeinstitute.com</a>
              </li>
              <li>
                Phone: <a href="https://wa.me/971585471457" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+971 58 547 1457</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-7 md:pt-8 flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Improve ME Institute in collaboration with Study Mind UK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
