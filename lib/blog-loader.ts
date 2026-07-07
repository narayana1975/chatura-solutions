import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime?: number
  featuredImage?: string | null
  content: string
}

const BLOGS_DIRECTORY = path.join(process.cwd(), 'public', 'data', 'blogs')
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'

/**
 * Get all blog files from the blogs directory
 */
export function getAllBlogFiles(): string[] {
  try {
    if (fs.existsSync(BLOGS_DIRECTORY)) {
      return fs
        .readdirSync(BLOGS_DIRECTORY)
        .filter(file => file.endsWith('.json'))
        .map(file => file.replace('.json', ''))
    }
  } catch (error) {
    console.error('[v0] Error reading blogs directory:', error)
  }
  return []
}

/**
 * Load a single blog post by slug
 */
export function loadBlogBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOGS_DIRECTORY, `${slug}.json`)
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const blog: BlogPost = JSON.parse(fileContent)
      
      // Use placeholder if no image
      if (!blog.featuredImage) {
        blog.featuredImage = PLACEHOLDER_IMAGE
      }
      
      return blog
    }
  } catch (error) {
    console.error(`[v0] Error loading blog ${slug}:`, error)
  }
  return null
}

/**
 * Parse date string safely
 */
function parseDate(dateString: string): number {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      console.warn(`[v0] Invalid date format: ${dateString}`)
      return 0
    }
    return date.getTime()
  } catch (error) {
    console.warn(`[v0] Error parsing date ${dateString}:`, error)
    return 0
  }
}

/**
 * Load all blog posts
 */
export function loadAllBlogs(): BlogPost[] {
  const blogFiles = getAllBlogFiles()
  const blogs: BlogPost[] = []

  for (const file of blogFiles) {
    const blog = loadBlogBySlug(file)
    if (blog) {
      blogs.push(blog)
    }
  }

  // Sort by date (newest first) with safe date parsing
  return blogs.sort((a, b) => parseDate(b.date) - parseDate(a.date))
}
