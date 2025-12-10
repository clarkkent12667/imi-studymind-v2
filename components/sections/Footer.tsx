'use client'

import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/study mind favicon.png" 
                alt="Study Mind Logo" 
                className="h-12 w-auto"
              />
              <span className="text-gray-400">×</span>
              <img 
                src="/IMI Logo - Booklets.png" 
                alt="ImproveMe Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4">
              Transforming futures through elite career education experiences at UCL London.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center hover:bg-secondary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center hover:bg-secondary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center hover:bg-secondary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center hover:bg-secondary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('programs')} className="text-white/80 hover:text-white transition-colors">
                  Our Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('benefits')} className="text-white/80 hover:text-white transition-colors">
                  Why Study Mind
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experience')} className="text-white/80 hover:text-white transition-colors">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Programs</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Medicine Camp</li>
              <li className="text-white/80">Law Camp</li>
              <li className="text-white/80">Engineering Camp</li>
              <li className="text-white/80">Business Camp</li>
              <li className="text-white/80">Technology Camp</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@studymind.co.uk</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+44 20 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>UCL Ramsay Hall, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2024 Study Mind International. All rights reserved. Powered by ImproveMe Education.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

