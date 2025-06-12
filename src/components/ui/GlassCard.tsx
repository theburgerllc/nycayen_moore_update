'use client'

import React, { useState, useRef } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'floating' | 'holographic' | 'rim-light'
  interactive?: boolean
  glowColor?: 'mocha' | 'emerald' | 'rose'
}

export default function GlassCard({ 
  children, 
  className, 
  variant = 'glass',
  interactive = true,
  glowColor = 'mocha'
}: GlassCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 300,
    damping: 30
  })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'glass-card backdrop-blur-md'
      case 'floating':
        return 'floating-card bg-white/90 backdrop-blur-sm'
      case 'holographic':
        return 'holographic-border bg-white/80 backdrop-blur-md'
      case 'rim-light':
        return 'rim-light bg-white/85 backdrop-blur-sm'
      default:
        return 'glass-card'
    }
  }

  const getGlowClass = () => {
    if (!isHovered) return ''
    switch (glowColor) {
      case 'mocha':
        return 'glow-mocha'
      case 'emerald':
        return 'glow-emerald'
      case 'rose':
        return 'glow-rose'
      default:
        return 'glow-mocha'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'rounded-2xl p-6 transition-all duration-500 ease-out perspective-1000',
        getVariantClasses(),
        getGlowClass(),
        interactive && 'cursor-pointer',
        className
      )}
      style={interactive ? {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={interactive ? {
        scale: 1.02,
        z: 20
      } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div
        className="relative z-10"
        style={{
          transform: interactive ? 'translateZ(20px)' : undefined
        }}
      >
        {children}
      </motion.div>
      
      {/* Ambient light effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: `radial-gradient(circle at ${mouseX.get() + 300}px ${mouseY.get() + 300}px, rgba(139, 106, 71, 0.3), transparent 50%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}

// Specialized card variants
export function FloatingCard({ children, className, ...props }: Omit<GlassCardProps, 'variant'>) {
  return (
    <GlassCard variant="floating" className={className} {...props}>
      {children}
    </GlassCard>
  )
}

export function HolographicCard({ children, className, ...props }: Omit<GlassCardProps, 'variant'>) {
  return (
    <GlassCard variant="holographic" className={className} {...props}>
      {children}
    </GlassCard>
  )
}

export function RimLightCard({ children, className, ...props }: Omit<GlassCardProps, 'variant'>) {
  return (
    <GlassCard variant="rim-light" className={className} {...props}>
      {children}
    </GlassCard>
  )
}