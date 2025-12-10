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
      description: 'All-inclusive package with accommodation, meals, activities, and 24/7 support. Save £120 with code IMPROVEME120.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Continued Support',
      description: 'Access to mentorship and guidance even after the camp ends. Join our global alumni network of future leaders.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            What Makes Our Camps Exceptional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect is designed to inspire, educate, and transform ambitious young minds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl border border-primary-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
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

