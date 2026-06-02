import fs from 'fs/promises'
import path from 'path'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime?: number
  image?: string
  featuredImage?: string | null
}

/**
 * Load all blog posts from the data directory
 */
export async function loadAllBlogs(): Promise<BlogPost[]> {
  try {
    const blogsDir = path.join(process.cwd(), 'public/data/blogs')
    const files = await fs.readdir(blogsDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))

    const blogs: BlogPost[] = []

    for (const file of jsonFiles) {
      const filePath = path.join(blogsDir, file)
      const content = await fs.readFile(filePath, 'utf-8')
      const blog = JSON.parse(content) as BlogPost
      blogs.push(blog)
    }

    // Sort by date (newest first)
    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return blogs
  } catch (error) {
    console.error('[v0] Error loading blogs:', error)
    return []
  }
}

/**
 * Load a single blog post by slug
 */
export async function loadBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), `public/data/blogs/${slug}.json`)
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content) as BlogPost
  } catch (error) {
    console.error(`[v0] Error loading blog ${slug}:`, error)
    return null
  }
}

/**
 * Generate sitemap entries for all blogs
 */
export async function generateBlogSitemapEntries(): Promise<string> {
  const blogs = await loadAllBlogs()
  
  const blogEntries = blogs
    .map(blog => {
      const lastmod = new Date(blog.date).toISOString().split('T')[0]
      return `  <url>
    <loc>https://chaturasolutions.com/blogs/${blog.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    })
    .join('\n')

  return blogEntries
}

/**
 * Validate blog data structure
 */
export function validateBlog(blog: any): boolean {
  const requiredFields = ['id', 'title', 'slug', 'excerpt', 'content', 'author', 'date', 'category']
  return requiredFields.every(field => field in blog && blog[field])
}

/**
 * Get blog statistics
 */
export async function getBlogStats() {
  const blogs = await loadAllBlogs()
  const categories = new Set(blogs.map(b => b.category))
  const authors = new Set(blogs.map(b => b.author))

  return {
    totalBlogs: blogs.length,
    categories: Array.from(categories),
    authors: Array.from(authors),
    lastUpdated: blogs.length > 0 ? blogs[0].date : null,
  }
}
