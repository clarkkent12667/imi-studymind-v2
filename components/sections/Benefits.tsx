'use client'

import { motion } from 'framer-motion'
import { Briefcase, Shield, MapPin } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Experience Your Future Career',
      description: 'Visit top firms like EY, Lloyds, Legal Chambers, and Kings College Hospital. Participate in hands-on workshops and gain real-world experience in your chosen field.',
    },
    {
      icon: Shield,
      title: 'Safety & Global Friendships',
      description: '24/7 safeguarding and support ensure peace of mind. Connect with ambitious peers from 50+ nations and build confidence in a nurturing environment.',
    },
    {
      icon: MapPin,
      title: 'Explore London',
      description: 'Based in the heart of London, experience iconic landmarks, world-class museums, and rich cultural heritage during your transformative summer.',
    },
  ]

  return (
    <section id="benefits" className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Why Improve ME Institute?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Improve ME Institute, in collaboration with Study Mind, offers a transformative experience that combines career exploration, personal growth, and cultural immersion
          </p>
        </motion.div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-red-500 transition-all duration-300 border-2 border-transparent"
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-3 md:mb-4 text-center break-words">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center break-words">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

