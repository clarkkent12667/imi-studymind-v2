'use client'

import { motion } from 'framer-motion'
import { Home, Shield, MapPin, Sparkles } from 'lucide-react'

export default function Accommodation() {
  const features = [
    {
      icon: Home,
      text: 'Private rooms in modern UCL Ramsay Hall',
    },
    {
      icon: Shield,
      text: '24/7 safeguarding, security & support staff',
    },
    {
      icon: MapPin,
      text: 'Central London location near UCL campus',
    },
    {
      icon: Sparkles,
      text: 'Modern facilities with dining & common areas',
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
            Your Home at UCL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comfortable, safe, and located in the heart of London
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary-200 to-primary-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary-500">
                <Home className="w-24 h-24 opacity-30" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-lg">
                <p className="text-sm font-medium text-primary-600">
                  UCL Ramsay Hall - Your Home in London
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 glass p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 pt-2">
                    {feature.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

