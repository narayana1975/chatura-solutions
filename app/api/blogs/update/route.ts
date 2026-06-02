import { NextRequest, NextResponse } from 'next/server'
import { loadAllBlogs, getBlogStats } from '@/lib/blog-utils'

/**
 * GET /api/blogs/update
 * Trigger a blog update/regeneration and return blog statistics
 */
export async function GET(request: NextRequest) {
  try {
    // Optional: Add authorization check here
    const authHeader = request.headers.get('authorization')
    const token = process.env.BLOG_UPDATE_TOKEN

    if (token && (!authHeader || authHeader !== `Bearer ${token}`)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Load all blogs to trigger update/refresh
    const blogs = await loadAllBlogs()
    const stats = await getBlogStats()

    console.log('[v0] Blog update triggered successfully')

    return NextResponse.json({
      success: true,
      message: 'Blogs updated successfully',
      stats,
      blogsUpdated: blogs.length,
    })
  } catch (error) {
    console.error('[v0] Blog update error:', error)
    return NextResponse.json(
      { error: 'Failed to update blogs' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/blogs/update
 * Alternative endpoint to trigger blog update
 */
export async function POST(request: NextRequest) {
  return GET(request)
}
