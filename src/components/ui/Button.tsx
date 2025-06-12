'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  href,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:ring-4 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-200",
    secondary: "bg-white text-gray-800 border-2 border-charcoal hover:bg-gray-50 focus:ring-gray-200",
    ghost: "text-gray-800 hover:bg-gray-100 focus:ring-gray-200"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]"
  }

  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center w-full h-full"
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}