'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'glass' | 'floating' | 'premium'
  glowColor?: 'mocha' | 'emerald' | 'rose'
}

export function Card({ 
  children, 
  className, 
  hover = false,
  variant = 'default',
  glowColor = 'mocha'
}: CardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'glass':
        return 'glass-card backdrop-blur-md border border-white/20'
      case 'floating':
        return 'floating-card bg-white/90 backdrop-blur-sm shadow-floating'
      case 'premium':
        return 'rim-light bg-white/95 backdrop-blur-md shadow-floating-lg'
      default:
        return 'bg-white/80 backdrop-blur-sm shadow-lg'
    }
  }

  const getHoverEffects = () => {
    if (!hover) return {}
    
    switch (variant) {
      case 'glass':
        return {
          whileHover: { 
            y: -12, 
            scale: 1.02,
            rotateX: 5,
            rotateY: 5,
            boxShadow: `0 0 30px rgba(139, 106, 71, 0.3)`
          },
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 30
          }
        }
      case 'floating':
        return {
          whileHover: { 
            y: -16, 
            scale: 1.03,
            rotateX: 8,
            rotateY: 8,
            boxShadow: '0 35px 80px -15px rgba(0, 0, 0, 0.3)'
          },
          transition: { 
            type: "spring",
            stiffness: 400,
            damping: 25
          }
        }
      case 'premium':
        return {
          whileHover: { 
            y: -20, 
            scale: 1.05,
            rotateX: 10,
            rotateY: 10,
            boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.4)'
          },
          transition: { 
            type: "spring",
            stiffness: 500,
            damping: 20
          }
        }
      default:
        return {
          whileHover: { y: -8, scale: 1.02 },
          transition: { duration: 0.3, ease: "easeOut" }
        }
    }
  }

  return (
    <motion.div
      className={cn(
        "rounded-2xl overflow-hidden perspective-1000 will-change-transform",
        getVariantStyles(),
        hover && variant !== 'default' && 'hover-tilt',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
      {...getHoverEffects()}
    >
      <motion.div
        className="relative z-10"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </motion.div>
      
      {/* Ambient glow effect */}
      {hover && variant !== 'default' && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
          style={{
            background: variant === 'glass' 
              ? 'radial-gradient(circle at 50% 50%, rgba(139, 106, 71, 0.3), transparent 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(232, 180, 160, 0.2), transparent 70%)'
          }}
        />
      )}
    </motion.div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6 pb-3", className)}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("p-6 pt-0 flex items-center justify-between", className)}>
      {children}
    </div>
  )
}