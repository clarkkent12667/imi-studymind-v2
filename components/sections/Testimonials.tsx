'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tania',
      age: 17,
      camp: 'International Relations Camp',
      quote: 'I absolutely loved this programme! Learning about diplomacy, cybersecurity and global issues really opened my eyes — and visiting the Houses of Parliament made it all seem so real. I would recommend it to anyone interested in politics!',
      image: '👩‍🎓',
      rating: 5,
    },
    {
      name: 'Omar Hassan',
      age: 16,
      camp: 'Business & Entrepreneurship Camp',
      quote: 'The workshops at EY and meeting real entrepreneurs was life-changing. I learned more in one week than I could have imagined. The mentorship and support from Improve ME Institute continues even after the camp ended.',
      image: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Layla Ahmed',
      age: 15,
      camp: 'Medicine Camp',
      quote: 'As someone who dreams of becoming a doctor, this camp gave me real insight into medical careers. The hospital visits and workshops with healthcare professionals were invaluable. My parents were amazed at how much I grew in just one week.',
      image: '👩‍⚕️',
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Student Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Hear from students whose lives were transformed by Improve ME Institute
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl"
          >
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mb-4 md:mb-6" />
            
            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 italic break-words">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-blue-700 rounded-full flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                {testimonials[activeIndex].image}
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg text-blue-700">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Age {testimonials[activeIndex].age} • {testimonials[activeIndex].camp}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots - Larger on mobile for touch */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

