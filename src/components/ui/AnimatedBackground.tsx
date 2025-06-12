'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'mesh' | 'orbs'
  className?: string
}

export default function AnimatedBackground({ 
  variant = 'gradient', 
  className = '' 
}: AnimatedBackgroundProps) {
  
  if (variant === 'orbs') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 106, 71, 0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232, 180, 160, 0.08) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(15, 74, 60, 0.06) 0%, transparent 70%)'
          }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        />
      </div>
    )
  }

  if (variant === 'mesh') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 106, 71, 0.05)" />
              <stop offset="100%" stopColor="rgba(232, 180, 160, 0.03)" />
            </linearGradient>
            <linearGradient id="meshGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(15, 74, 60, 0.04)" />
              <stop offset="100%" stopColor="rgba(139, 106, 71, 0.02)" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,0 Q250,200 500,100 T1000,150 L1000,400 Q750,300 500,350 T0,300 Z"
            fill="url(#meshGradient1)"
            animate={{
              d: [
                "M0,0 Q250,200 500,100 T1000,150 L1000,400 Q750,300 500,350 T0,300 Z",
                "M0,50 Q250,150 500,200 T1000,100 L1000,450 Q750,350 500,300 T0,350 Z",
                "M0,0 Q250,200 500,100 T1000,150 L1000,400 Q750,300 500,350 T0,300 Z"
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.path
            d="M0,600 Q250,500 500,600 T1000,550 L1000,1000 L0,1000 Z"
            fill="url(#meshGradient2)"
            animate={{
              d: [
                "M0,600 Q250,500 500,600 T1000,550 L1000,1000 L0,1000 Z",
                "M0,650 Q250,550 500,650 T1000,600 L1000,1000 L0,1000 Z",
                "M0,600 Q250,500 500,600 T1000,550 L1000,1000 L0,1000 Z"
              ]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </svg>
      </div>
    )
  }

  // Default gradient variant
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(253, 252, 251, 0.8) 0%, rgba(245, 242, 238, 0.6) 50%, rgba(240, 235, 228, 0.8) 100%)',
      }}
      animate={{
        background: [
          'linear-gradient(135deg, rgba(253, 252, 251, 0.8) 0%, rgba(245, 242, 238, 0.6) 50%, rgba(240, 235, 228, 0.8) 100%)',
          'linear-gradient(225deg, rgba(245, 242, 238, 0.8) 0%, rgba(240, 235, 228, 0.6) 50%, rgba(253, 252, 251, 0.8) 100%)',
          'linear-gradient(135deg, rgba(253, 252, 251, 0.8) 0%, rgba(245, 242, 238, 0.6) 50%, rgba(240, 235, 228, 0.8) 100%)'
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}