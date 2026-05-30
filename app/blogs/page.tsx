'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'
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
}

const categoryColors: { [key: string]: string } = {
  'Interview Tips': 'bg-gradient-to-br from-blue-500 to-blue-600',
  'Education': 'bg-gradient-to-br from-purple-500 to-purple-600',
  'Career': 'bg-gradient-to-br from-green-500 to-green-600',
  'Default': 'bg-gradient-to-br from-yellow-500 to-yellow-600',
}

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        // Load all blog JSON files from data/blogs directory
        const blogs: BlogPost[] = []
        const blogFiles = [
          'top-10-interview-questions',
          'choosing-right-university',
          'essential-skills-2024',
          'star-method-behavioral-interviews',
        ]

        for (const file of blogFiles) {
          const response = await fetch(`/data/blogs/${file}.json`)
          if (response.ok) {
            const data = await response.json()
            blogs.push(data)
          }
        }

        // Sort by date (newest first)
        blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setBlogPosts(blogs)
      } catch (error) {
        console.error('Error loading blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

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
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blogs available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const bgColor = categoryColors[post.category] || categoryColors['Default']
              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
                >
                  <div className={`${bgColor} h-48 flex items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <span className="relative text-sm font-semibold bg-primary/90 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-balance">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {formatDate(new Date(post.date))}
                      </div>
                      <span>by {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Want to Share Your Story?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            If you would like to contribute an article or suggest a topic, please get in touch with us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
