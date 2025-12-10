'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Globe, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 opacity-20"
        >
          <GraduationCap className="w-24 h-24 text-secondary-500" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 opacity-20"
        >
          <Globe className="w-32 h-32 text-accent-500" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-40 opacity-20"
        >
          <Award className="w-28 h-28 text-secondary-400" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Floating Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="glass px-4 py-2 rounded-full text-sm font-medium text-primary-600 flex items-center gap-2">
              <Award className="w-4 h-4" />
              UCL Hosted
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium text-primary-600 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              50+ Nations
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm font-medium text-primary-600 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              99% Recommended
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-600 leading-tight"
          >
            Transform Your Future at{' '}
            <span className="gradient-text">UCL London</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Elite Summer Career Camps for Ambitious Students | Ages 12-18
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="group"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Apply Now (Save £120)
              </Button>
            </a>
          </motion.div>

          {/* Special Offer Highlight */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 text-sm text-gray-600"
          >
            Use code <span className="font-bold text-primary-600 bg-white px-3 py-1 rounded-md border-2 border-primary-600">IMPROVEME120</span> for exclusive savings
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary-500 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-secondary-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

