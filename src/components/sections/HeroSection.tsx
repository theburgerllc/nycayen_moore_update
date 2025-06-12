'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import ParticleBackground from '@/components/ui/ParticleBackground'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/hero-poster.jpg"
          >
            <source src="/salon-ambiance.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 106, 71, 0.2) 0%, transparent 50%)'
          }}
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(139, 106, 71, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, rgba(232, 180, 160, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(15, 74, 60, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(139, 106, 71, 0.2) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Particle Effects */}
      <ParticleBackground 
        count={25} 
        colors={[
          'rgba(139, 106, 71, 0.4)', 
          'rgba(232, 180, 160, 0.3)', 
          'rgba(15, 74, 60, 0.2)',
          'rgba(255, 255, 255, 0.1)'
        ]} 
        className="z-5"
      />

      {/* Floating Orbs */}
      <AnimatedBackground variant="orbs" className="z-5 opacity-30" />
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-center perspective-1000"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 1.2
          }}
          className="max-w-5xl px-4"
        >
          {/* Main Heading with 3D Effect */}
          <motion.h1 
            className="heading-primary text-white mb-8 transform-gpu"
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.3 
            }}
            whileHover={{ 
              scale: 1.02,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
          >
            Where Your Hair Meets the Art of Styling
          </motion.h1>
          
          {/* Subtitle with Glass Effect */}
          <motion.div
            className="glass-card backdrop-blur-md mx-auto max-w-3xl mb-10 p-6 rounded-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.5 
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(139, 106, 71, 0.2)"
            }}
          >
            <p className="body-text text-white/95 leading-relaxed">
              Step into Manhattan&apos;s premier destination for bespoke hair artistry. 
              Our master stylists create personalized looks that elevate your most confident self.
            </p>
          </motion.div>
          
          {/* Action Buttons with Enhanced 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.7 
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center perspective-1000"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 20
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button 
                href="/book" 
                size="lg"
                className="px-10 py-5 text-lg shadow-floating hover:shadow-floating-lg transform-gpu"
              >
                Begin Your Transformation
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                rotateY: -5,
                z: 20
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg" 
                className="px-10 py-5 text-lg text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-glass transform-gpu"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Service Icons */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* Scissors Icon */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-8 h-8 glass-card rounded-full flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-white/70 text-xl">✂️</span>
            </motion.div>

            {/* Color Palette Icon */}
            <motion.div
              className="absolute top-1/3 right-1/4 w-8 h-8 glass-card rounded-full flex items-center justify-center"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -15, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <span className="text-white/70 text-xl">🎨</span>
            </motion.div>

            {/* Crown Icon */}
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-8 h-8 glass-card rounded-full flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            >
              <span className="text-white/70 text-xl">👑</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
      >
        <motion.div
          className="glass-card backdrop-blur-sm p-3 rounded-full cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
            <motion.div 
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 106, 71, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(232, 180, 160, 0.4) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
    </section>
  )
}