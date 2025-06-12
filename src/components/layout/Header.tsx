'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair font-bold text-gray-800">
            NYC Ayen
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-mocha transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/book" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <motion.span
                className="block w-6 h-0.5 bg-charcoal"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-charcoal"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-charcoal"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-gray-800 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button href="/book" className="w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}