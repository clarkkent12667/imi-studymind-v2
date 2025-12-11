'use client'

import { motion } from 'framer-motion'
import { Briefcase, FlaskConical, Globe, Award, Tag, HeadphonesIcon } from 'lucide-react'

export default function KeySellingPoints() {
  const points = [
    {
      icon: Briefcase,
      title: 'Industry Experience',
      description: 'Visit leading companies and meet professionals in your chosen field. Gain insider knowledge and network with industry leaders.',
    },
    {
      icon: FlaskConical,
      title: 'Interactive Workshops',
      description: 'Hands-on learning experiences designed by experts. Develop practical skills through real-world projects and challenges.',
    },
    {
      icon: Globe,
      title: 'Cultural Experience',
      description: 'Immerse yourself in London\'s rich history and culture. Visit iconic landmarks and experience life in a global city.',
    },
    {
      icon: Award,
      title: 'Stronger UCAS Applications',
      description: 'Stand out from the crowd with unique experiences. Demonstrate commitment, passion, and initiative to top universities.',
    },
    {
      icon: Tag,
      title: 'Great Value',
      description: 'All-inclusive package with accommodation, meals, activities, and 24/7 support. Save AED 440 (£120) with code IMPROVEME120.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Continued Support',
      description: 'Access to mentorship and guidance even after the camp ends. Join our global alumni network of future leaders.',
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            What Makes Our Camps Exceptional
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every aspect is designed to inspire, educate, and transform ambitious young minds
          </p>
        </motion.div>

        {/* Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white p-6 md:p-8 rounded-xl border-2 border-transparent shadow-md hover:shadow-xl hover:border-red-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-3 break-words">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

