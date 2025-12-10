'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Building2, PartyPopper } from 'lucide-react'

export default function ExperienceShowcase() {
  const timeline = [
    {
      day: 'Day 1',
      icon: PartyPopper,
      title: 'Arrival & Welcome',
      description: 'Check into UCL Ramsay Hall, meet your international peers, and attend the welcome orientation. Ice-breaker activities and camp introduction.',
    },
    {
      day: 'Days 2-3',
      icon: Building2,
      title: 'Industry Immersion',
      description: 'Visit leading firms like EY, Lloyds, Legal Chambers, and Kings College Hospital. Participate in professional workshops and meet industry experts in your chosen field.',
    },
    {
      day: 'Days 4-5',
      icon: Users,
      title: 'Workshops & Mentorship',
      description: 'Hands-on projects and skill-building sessions. One-on-one mentorship with professionals. Develop your UCAS personal statement.',
    },
    {
      day: 'Days 6-7',
      icon: Calendar,
      title: 'London Exploration',
      description: 'Visit iconic landmarks including Big Ben, Tower Bridge, and world-class museums. Cultural immersion and social activities with new friends.',
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            A Week That Changes Everything
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day is carefully designed to maximize learning, growth, and unforgettable experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  {/* Timeline Connector */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-secondary-500 to-secondary-200" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-bold text-accent-600 mb-2">
                      {item.day}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

