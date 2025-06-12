import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
}

const imageSizes = {
  gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  hero: '100vw',
  profile: '(max-width: 768px) 100vw, 300px',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
}

export default function OptimizedImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  priority = false,
  sizes = imageSizes.card
}: OptimizedImageProps) {
  const imageProps = fill
    ? { fill: true, sizes }
    : { width, height }

  return (
    <Image
      src={src}
      alt={alt}
      {...imageProps}
      priority={priority}
      className={cn('object-cover', className)}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  )
}