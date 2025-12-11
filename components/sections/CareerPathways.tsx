'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Scale, Hammer, TrendingUp, Code, Palette, Building, Microscope } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CareerPathways() {
  const pathways = [
    {
      icon: Stethoscope,
      title: 'Medicine',
      description: 'Explore healthcare careers with visits to hospitals and medical schools.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Scale,
      title: 'Law',
      description: 'Experience legal practice at top law firms and court visits.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Hammer,
      title: 'Engineering',
      description: 'Hands-on projects and visits to engineering consultancies.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'Learn from entrepreneurs and visit leading corporations.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Technology',
      description: 'Coding workshops and visits to tech startups and giants.',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Explore design, media, and creative industries in London.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Building,
      title: 'Architecture',
      description: 'Design projects and visits to renowned architectural firms.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Microscope,
      title: 'Science',
      description: 'Lab experiences and visits to research institutions.',
      gradient: 'from-teal-500 to-green-500',
    },
  ]

  return (
    <section id="programs" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Choose Your Path
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore your passion with specialized career camps designed to give you authentic industry experience
          </p>
        </motion.div>

        {/* Responsive grid: 1 col mobile, 2 col small tablet, 3 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-red-500"
              >
                <div className="aspect-square p-4 sm:p-6 flex flex-col items-center justify-center text-center relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-700 transition-colors duration-300 shadow-md flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-blue-700 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors duration-300 break-words">
                    {pathway.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words px-1">
                    {pathway.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="default" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold">
              View All 20+ Pathways
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

