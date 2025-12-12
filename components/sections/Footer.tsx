'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-blue-900 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Footer grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Column 1: Logos & Description */}
          <div className="text-center sm:text-left">
            <button
              onClick={scrollToTop}
              className="flex flex-col items-center sm:items-start gap-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/IMI Logo - Booklets.png" 
                  alt="Improve ME Institute Logo" 
                  className="h-8 sm:h-10 w-auto"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-medium">in collaboration with</span>
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/study mind favicon.png" 
                  alt="Study Mind Logo" 
                  className="h-8 sm:h-10 w-auto"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            </button>
            <p className="text-sm text-white/80 break-words">
              Transforming futures through elite career education experiences at UCL London.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 block w-full text-left sm:text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 block w-full text-left sm:text-left"
                >
                  Why Improve ME Institute
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 block w-full text-left sm:text-left"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 block w-full text-left sm:text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 inline-block"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80 justify-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@studymind.co.uk" className="break-words hover:text-red-400 transition-colors">info@studymind.co.uk</a>
              </li>
              <li className="flex items-start gap-3 text-white/80 justify-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+971501852505" className="break-words hover:text-red-400 transition-colors">+971 50 185 2505</a>
              </li>
              <li className="flex items-start gap-3 text-white/80 justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="break-words">Gold & Diamond Park<br />Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Programs */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 inline-block break-words"
                >
                  Summer Career Camps
                </a>
              </li>
              <li>
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-red-400 transition-colors py-2 sm:py-1 min-h-[44px] sm:min-h-0 inline-block break-words"
                >
                  All Career Pathways
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Centered on all screens */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center break-words px-2">
              © 2025 Improve ME Institute. All rights reserved. Delivered in partnership with Study Mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

