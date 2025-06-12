'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
}

interface ParticleBackgroundProps {
  count?: number
  colors?: string[]
  className?: string
}

export default function ParticleBackground({ 
  count = 20, 
  colors = ['rgba(139, 106, 71, 0.3)', 'rgba(232, 180, 160, 0.2)', 'rgba(15, 74, 60, 0.1)'],
  className = ''
}: ParticleBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    
    setParticles(newParticles)
  }, [count, colors])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}