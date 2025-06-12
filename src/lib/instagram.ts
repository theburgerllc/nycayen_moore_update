import type { InstagramPost } from '@/lib/types'

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

export async function getInstagramPosts(limit = 12): Promise<InstagramPost[]> {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    console.warn('Instagram access token not configured')
    return []
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
      { 
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`Instagram API responded with status ${response.status}`)
    }
    
    const data = await response.json()
    
    if (!data.data || !Array.isArray(data.data)) {
      console.warn('Invalid Instagram API response format')
      return []
    }
    
    return data.data as InstagramPost[]
  } catch (error) {
    console.error('Instagram API Error:', error)
    return []
  }
}
