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
    <section id="experience" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            A Week That Changes Everything
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Every day is carefully designed to maximize learning, growth, and unforgettable experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 items-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-6 md:p-8 rounded-xl md:rounded-2xl hover:shadow-xl transition-shadow duration-300 w-full">
                    <div className="text-xs sm:text-sm font-bold text-red-600 mb-2">
                      {item.day}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-3 break-words">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

