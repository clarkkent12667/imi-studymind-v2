'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SpecialOfferBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isClosed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClosed])

  if (isClosed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <Tag className="w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-lg">
                    Exclusive for ImproveMe Students: Save £120
                  </p>
                  <p className="text-sm text-white/90">
                    Use code <span className="font-bold bg-white text-primary-600 px-2 py-0.5 rounded">IMPROVEME120</span> at checkout
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a href="https://studymind.co.uk/work-experience/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="default" className="bg-white text-primary-600 hover:bg-gray-100 border-0">
                    Claim Offer
                  </Button>
                </a>
                <button
                  onClick={() => setIsClosed(true)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

