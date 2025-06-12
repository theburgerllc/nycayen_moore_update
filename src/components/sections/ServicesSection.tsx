'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import OptimizedImage from '@/components/ui/OptimizedImage'
import Button from '@/components/ui/Button'
import ParticleBackground from '@/components/ui/ParticleBackground'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { formatPrice } from '@/lib/utils'
import type { Service } from '@/lib/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Precision Cuts',
    description: 'Masterfully crafted cuts that enhance your natural beauty and complement your lifestyle.',
    price: { min: 125, max: 400 },
    duration: '60-90 minutes',
    image: '/services/precision-cuts.jpg',
    slug: 'precision-cuts',
    features: ['Consultation & Analysis', 'Precision Cutting', 'Styling & Finishing', 'At-Home Care Guidance']
  },
  {
    id: '2',
    title: 'Signature Color',
    description: 'Transform your look with dimensional color artistry using premium techniques and products.',
    price: { min: 200, max: 600 },
    duration: '2-4 hours',
    image: '/services/signature-color.jpg',
    slug: 'signature-color',
    features: ['Color Consultation', 'Custom Formulation', 'Professional Application', 'Glossing Treatment']
  },
  {
    id: '3',
    title: 'Hair Extensions',
    description: 'Add length, volume, and versatility with our premium extension services.',
    price: { min: 500, max: 1500 },
    duration: '2-6 hours',
    image: '/services/hair-extensions.jpg',
    slug: 'hair-extensions',
    features: ['Extension Consultation', 'Color Matching', 'Professional Installation', 'Styling & Maintenance']
  },
  {
    id: '4',
    title: 'Treatments & Restoration',
    description: 'Revitalize and restore your hair with our advanced treatment therapies.',
    price: { min: 150, max: 800 },
    duration: '45-120 minutes',
    image: '/services/treatments.jpg',
    slug: 'treatments',
    features: ['Hair Analysis', 'Custom Treatment', 'Deep Conditioning', 'Scalp Therapy']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.8
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.6
    }
  }
}

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="orbs" className="opacity-40" />
      <ParticleBackground count={15} className="opacity-20" />
      
      {/* Main gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50/90 via-cream-100/80 to-cream-200/90" />
      
      <div className="container relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <h2 className="heading-secondary mb-6 text-shimmer">Our Signature Services</h2>
          </motion.div>
          <motion.p 
            className="body-text text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Experience the artistry of our master stylists with services designed to enhance your unique beauty. 
            Each appointment begins with a personalized consultation to understand your vision and lifestyle.
          </motion.p>
        </motion.div>

        {/* Floating 3D Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="perspective-2000 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              custom={index}
              className="perspective-container"
            >
              <Card 
                hover 
                variant="floating"
                className="h-full flex flex-col group relative overflow-hidden"
              >
                {/* Holographic border effect */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-mocha-300/20 via-rose-gold-300/30 to-emerald-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-white/90 rounded-2xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </motion.div>
                    
                    {/* Image overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating price badge */}
                    <motion.div
                      className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {service.price.max 
                          ? `${formatPrice(service.price.min)}+`
                          : formatPrice(service.price.min)
                        }
                      </span>
                    </motion.div>
                  </div>
                  
                  <CardContent className="flex-1 flex flex-col relative">
                    <motion.h3 
                      className="heading-secondary text-xl mb-3 text-gray-800"
                      whileHover={{ scale: 1.02 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500 font-medium">Duration:</span>
                        <span className="font-semibold text-gray-700">{service.duration}</span>
                      </div>
                      
                      {service.features && (
                        <div className="pt-2">
                          <p className="text-xs text-gray-500 mb-2 font-medium">Includes:</p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 bg-mocha-100/50 text-mocha-700 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button 
                      href={`/services/${service.slug}`} 
                      variant="primary" 
                      size="sm"
                      className="w-full group-hover:shadow-glow-emerald transition-all duration-300"
                    >
                      Discover More
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 25,
            delay: 0.6 
          }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Button 
              href="/services" 
              size="lg"
              className="px-12 py-4 text-lg shadow-floating hover:shadow-floating-lg transform-gpu"
            >
              Explore All Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}