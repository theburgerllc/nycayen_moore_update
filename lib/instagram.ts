// lib/instagram.ts
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

export async function getInstagramPosts(limit = 12) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    )
    
    if (!response.ok) throw new Error('Failed to fetch Instagram posts')
    
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Instagram API Error:', error)
    return []
  }
}

// components/InstagramFeed.tsx
import { getInstagramPosts } from '@/lib/instagram'
import OptimizedImage from './OptimizedImage'

export default async function InstagramFeed() {
  const posts = await getInstagramPosts(8)

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary text-center mb-12">Latest Transformations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post: any) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square group overflow-hidden rounded-lg"
            >
              <OptimizedImage
                src={post.media_url}
                alt={post.caption?.substring(0, 100) || 'Instagram post'}
                type="gallery"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View on Instagram</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
