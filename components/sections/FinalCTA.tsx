'use client'

import { motion } from 'framer-motion'
import { Send, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-24 gradient-bg text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Summer?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Join students from 50+ nations for the experience of a lifetime. Limited spots available.
          </p>

          {/* Application Form */}
          <div className="glass border border-white/20 p-8 md:p-12 rounded-3xl mb-8">
            <h3 className="text-2xl font-bold text-primary-600 mb-6">
              Start Your Application
            </h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600 outline-none text-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600 outline-none text-gray-900"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Age"
                  min="12"
                  max="18"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600 outline-none text-gray-900"
                />
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600 outline-none text-gray-900"
                >
                  <option>Select Career Interest</option>
                  <option>Medicine</option>
                  <option>Law</option>
                  <option>Engineering</option>
                  <option>Business</option>
                  <option>Technology</option>
                  <option>Creative Arts</option>
                  <option>Architecture</option>
                  <option>Science</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full group">
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Application
                  </Button>
                </a>
                <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full bg-white text-primary-700 hover:bg-gray-50 border-0">
                    <Download className="mr-2 w-5 h-5" />
                    Download Brochure
                  </Button>
                </a>
              </div>
            </form>
          </div>

          <p className="text-white/80 text-sm">
            By submitting, you agree to be contacted by Study Mind and ImproveMe about career camps and educational opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

