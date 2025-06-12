export interface Service {
  id: string
  title: string
  description: string
  price: {
    min: number
    max?: number
  }
  duration: string
  image: string
  slug: string
  features?: string[]
}

export interface Stylist {
  id: string
  name: string
  title: string
  bio: string
  image: string
  specializations: string[]
  experience: string
  slug: string
}

export interface InstagramPost {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  stylist?: string
  date: string
  time: string
  message?: string
}