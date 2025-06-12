/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['graph.instagram.com', 'scontent.cdninstagram.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
}

module.exports = nextConfig