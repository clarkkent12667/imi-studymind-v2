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
      if (window.scrollY > 500 && !isClosed) {
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
          className="fixed bottom-0 left-0 right-0 z-40 bg-red-600 text-white shadow-2xl"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Text content - stacks on mobile */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 text-center sm:text-left min-w-0">
                <Tag className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 hidden sm:block" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg break-words">
                    Exclusive for Improve ME Institute Students: Save AED 440 (£120)
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/90 mt-1 break-words">
                    Use code <span className="font-bold bg-white text-red-600 px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap">IMPROVEME120</span> at checkout
                  </p>
                </div>
              </div>
              
              {/* CTA - Full width on mobile */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  href="https://studymind.co.uk/work-experience/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button 
                    variant="secondary" 
                    size="default" 
                    className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 border-0 py-2 sm:py-2 px-4 sm:px-6 text-sm sm:text-base font-semibold"
                  >
                    Claim Offer
                  </Button>
                </a>
                <button
                  onClick={() => setIsClosed(true)}
                  className="p-2 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

