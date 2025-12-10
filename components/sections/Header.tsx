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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/study-mind-png-long-logo.png" 
                alt="Study Mind Logo" 
                className="h-8 md:h-10 w-auto"
              />
              <span className="text-gray-400">×</span>
              <img 
                src="/IMI Logo - Booklets.png" 
                alt="ImproveMe Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-secondary-500 font-medium transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-secondary-500 font-medium transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-secondary-500 font-medium transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-secondary-500 font-medium transition-colors"
            >
              Stories
            </button>
            <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer">
              <Button size="default">Apply Now</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6">
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-left"
                >
                  Programs
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-left"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-left"
                >
                  Stories
                </button>
                <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer">
                  <Button size="default" className="w-full">Apply Now</Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

