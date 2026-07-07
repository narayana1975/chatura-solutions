'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight, Search, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime?: number
  featuredImage?: string | null
}

const categoryColors: { [key: string]: string } = {
  'Interview Preparation': 'bg-gradient-to-br from-blue-500 to-blue-600',
  'Interview Tips': 'bg-gradient-to-br from-blue-500 to-blue-600',
  'Education': 'bg-gradient-to-br from-purple-500 to-purple-600',
  'Career': 'bg-gradient-to-br from-green-500 to-green-600',
  'Career Development': 'bg-gradient-to-br from-green-500 to-green-600',
  'Default': 'bg-gradient-to-br from-yellow-500 to-yellow-600',
}

const BLOGS_PER_PAGE = 6
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        // Dynamically load all blogs from data/blogs directory
        const response = await fetch('/api/blogs')
        if (response.ok) {
          const blogs: BlogPost[] = await response.json()
          setBlogPosts(blogs)
        }
      } catch (error) {
        console.error('[v0] Error loading blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  // Filter blogs based on search query
  const filteredBlogs = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE)
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex)

  // Reset to page 1 when search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Career Insights & Interview Tips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Stay updated with the latest trends in education, career development, and interview preparation.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                Found {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {loading ? (
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading blogs...</p>
            </div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery ? 'No blogs found matching your search.' : 'No blogs available yet.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paginatedBlogs.map((post) => {
                const bgColor = categoryColors[post.category] || categoryColors['Default']
                const imageUrl = post.featuredImage || PLACEHOLDER_IMAGE

                return (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.slug}`}
                    className="group rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200 relative">
                      <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className={`absolute top-4 left-4 ${bgColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 bg-card">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-balance">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 mb-4 flex-wrap text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(post.date)}
                        </div>
                        {post.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.readTime} min read
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-muted-foreground">By {post.author}</span>
                        <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary text-white'
                        : 'bg-card text-foreground hover:bg-accent'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  )
}
