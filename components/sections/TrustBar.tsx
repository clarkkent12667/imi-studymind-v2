'use client'

import { motion } from 'framer-motion'

export default function TrustBar() {
  const partners = [
    'UCL',
    'EY',
    'Lloyds Banking Group',
    'Legal Chambers',
    'Kings College Hospital',
    'Royal Courts of Justice',
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 font-medium">
            Trusted by <span className="font-bold text-primary-600">200+ schools worldwide</span> | 
            <span className="font-bold text-primary-600"> 45,000+ hours</span> of 1:1 tuition delivered
          </p>
        </motion.div>

        {/* Scrolling Partner Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-6 py-4 bg-gray-50 rounded-lg"
              >
                <div className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

