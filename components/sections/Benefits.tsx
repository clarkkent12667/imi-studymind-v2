'use client'

import { motion } from 'framer-motion'
import { Briefcase, Shield, MapPin } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Experience Your Future Career',
      description: 'Visit top firms like EY, Lloyds, and Linklaters. Participate in hands-on workshops and gain real-world experience in your chosen field.',
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
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            Why Study Mind?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A transformative experience that combines career exploration, personal growth, and cultural immersion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                className="glass p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

