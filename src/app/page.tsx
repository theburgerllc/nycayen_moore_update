import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import InstagramFeed from '@/components/sections/InstagramFeed'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Suspense fallback={
        <section className="py-16 bg-white">
          <div className="container">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }>
        <InstagramFeed />
      </Suspense>
    </>
  )
}