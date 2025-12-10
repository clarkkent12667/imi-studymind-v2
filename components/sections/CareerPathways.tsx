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
    <section id="programs" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore your passion with specialized career camps designed to give you authentic industry experience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex flex-col items-center justify-center text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-secondary-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-600 group-hover:text-white transition-colors duration-300 mb-2">
                      {pathway.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      {pathway.description}
                    </p>
                  </div>
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
            <Button size="lg" variant="outline">
              View All 20+ Pathways
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

