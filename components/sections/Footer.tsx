'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-blue-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logos & Description */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/IMI Logo - Booklets.png" 
                  alt="Improve ME Institute Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <span className="text-gray-400 text-xs font-medium hidden sm:inline">in collaboration with</span>
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="/study mind favicon.png" 
                  alt="Study Mind Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-white/80 break-words">
              Transforming futures through elite career education experiences at UCL London.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-1"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-1"
                >
                  Why Improve ME Institute
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-1"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-white/80 hover:text-red-400 transition-colors py-1"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-red-400 transition-colors py-1 inline-block"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/80 justify-center sm:justify-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@studymind.co.uk</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 justify-center sm:justify-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+971 50 185 2505</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="break-words">Gold & Diamond Park<br />Dubai, UAE</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social (if needed) */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4">Follow Us</h3>
            <p className="text-xs sm:text-sm text-white/80 break-words">
              Stay connected with Improve ME Institute and Study Mind for the latest updates and opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar - Centered on all screens */}
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/70 text-xs sm:text-sm text-center">
              © 2025 Improve ME Institute. All rights reserved. Delivered in partnership with Study Mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

