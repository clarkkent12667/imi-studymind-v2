'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logos - Responsive sizing */}
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0">
              <img 
                src="/IMI Logo - Booklets.png" 
                alt="Improve ME Institute Logo" 
                className="h-6 sm:h-8 md:h-12 w-auto flex-shrink-0"
              />
              <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm font-medium hidden sm:inline whitespace-nowrap">
                in collaboration with
              </span>
              <img 
                src="/study-mind-png-long-logo.png" 
                alt="Study Mind Logo" 
                className="h-6 sm:h-8 md:h-12 w-auto flex-shrink-0 max-w-[100px] sm:max-w-[120px] md:max-w-none"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors py-2 px-3"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors py-2 px-3"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors py-2 px-3"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors py-2 px-3"
              >
                Stories
              </button>
              <a 
                href="https://studymind.co.uk/work-experience/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <Button size="default" className="bg-red-600 hover:bg-red-700 text-white px-4 lg:px-6 py-2">
                  Apply Now
                </Button>
                <span className="text-xs text-gray-500 mt-1 hidden lg:block">Improve ME Institute Application</span>
              </a>
            </nav>

            {/* Mobile Menu Button - Touch-friendly */}
            <button
              className="md:hidden p-2 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slide-in with overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Slide-in menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col gap-2">
                  <button
                    onClick={() => scrollToSection('programs')}
                    className="text-left py-4 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors rounded-lg text-base"
                  >
                    Programs
                  </button>
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="text-left py-4 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors rounded-lg text-base"
                  >
                    Why Us
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="text-left py-4 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors rounded-lg text-base"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-left py-4 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors rounded-lg text-base"
                  >
                    Stories
                  </button>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a 
                      href="https://studymind.co.uk/work-experience/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button size="default" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-base font-semibold">
                        Apply Now
                      </Button>
                      <span className="text-xs text-gray-500 mt-2 block text-center">
                        Improve ME Institute Application
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

