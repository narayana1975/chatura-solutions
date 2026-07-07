'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Users, Zap, Star, Clock, User, Search, TrendingUp, Award, BookOpen } from 'lucide-react'
import { HighlightCard } from '@/components/ui/card-5'

interface AvailableBatch {
  id: string
  courseTitle: string
  startDate: string
  endDate: string
  duration: string
  schedule: string
  instructor?: string
  seats: number
  seatsRemaining: number
  level: string
  description: string
  topics: string[]
  price: string
  registration_link?: string
}

interface PreviousBatch {
  id: string
  courseTitle: string
  startDate: string
  endDate: string
  duration: string
  instructor: string
  studentCount: number
  successRate: number
  testimonials: {
    student: string
    rating: number
    feedback: string
  }[]
}

interface CoursesData {
  ongoingBatches: AvailableBatch[]
  upcomingBatches: AvailableBatch[]
  previousBatches: PreviousBatch[]
}

const levelColors: { [key: string]: string } = {
  'Beginner': 'bg-green-100 text-green-800 border-green-300',
  'Intermediate': 'bg-blue-100 text-blue-800 border-blue-300',
  'Advanced': 'bg-purple-100 text-purple-800 border-purple-300',
}

export default function Courses() {
  const [courses, setCourses] = useState<CoursesData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'ongoing' | 'upcoming' | 'previous'>('ongoing')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBatches, setFilteredBatches] = useState<AvailableBatch[]>([])

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch('/data/courses.json')
        if (response.ok) {
          const data = await response.json()
          setCourses(data)
          setFilteredBatches(data.ongoingBatches)
        }
      } catch (error) {
        console.error('Error loading courses:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  useEffect(() => {
    if (courses && searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const batchesToSearch = activeTab === 'ongoing' ? courses.ongoingBatches : activeTab === 'upcoming' ? courses.upcomingBatches : courses.previousBatches
      const filtered = batchesToSearch.filter(
        (batch) =>
          batch.courseTitle.toLowerCase().includes(query) ||
          batch.description.toLowerCase().includes(query) ||
          (batch.instructor?.toLowerCase().includes(query) ?? false) ||
          batch.topics.some((topic) => topic.toLowerCase().includes(query))
      )
      setFilteredBatches(filtered)
    } else if (courses) {
      const batchesToShow = activeTab === 'ongoing' ? courses.ongoingBatches : activeTab === 'upcoming' ? courses.upcomingBatches : courses.previousBatches
      setFilteredBatches(batchesToShow)
    }
  }, [searchQuery, courses, activeTab])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center min-h-96">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading courses...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!courses) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center min-h-96">
          <p className="text-muted-foreground">Error loading courses</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 md:py-15">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Upskilling Courses & Batches
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join our expert-led courses to master interview preparation, data structures, and career development skills.
          </p>
        </div>
      </section>

      {/* Statistics Cards
      {courses && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Platform Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HighlightCard
              title="Active Batches"
              description="Upcoming courses ready for enrollment"
              metricValue={`${courses.availableBatches.length}`}
              metricLabel="Available Now"
              buttonText="Explore"
              onButtonClick={() => {
                const section = document.querySelector('[data-available-section]')
                section?.scrollIntoView({ behavior: 'smooth' })
              }}
              icon={<TrendingUp className="h-6 w-6" />}
              color="blue"
            />
            <HighlightCard
              title="Expert Instructors"
              description="Industry professionals teaching the courses"
              metricValue={`${new Set(courses.availableBatches.map((b) => b.instructor)).size}`}
              metricLabel="Instructors"
              buttonText="View"
              onButtonClick={() => {}}
              icon={<Award className="h-6 w-6" />}
              color="violet"
            />
            <HighlightCard
              title="Success Stories"
              description="Previous batches with high completion rates"
              metricValue={`${courses.previousBatches.length}`}
              metricLabel="Completed"
              buttonText="Learn"
              onButtonClick={() => setActiveTab('previous')}
              icon={<BookOpen className="h-6 w-6" />}
              color="orange"
            />
            <HighlightCard
              title="Student Satisfaction"
              description="Average success rate of our programs"
              metricValue={`${Math.round(courses.previousBatches.reduce((sum, b) => sum + b.successRate, 0) / courses.previousBatches.length)}%`}
              metricLabel="Success Rate"
              buttonText="Details"
              onButtonClick={() => setActiveTab('previous')}
              icon={<Star className="h-6 w-6" />}
              color="default"
            />
          </div>
        </section>
      )} */}

      {/* Tabs & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-available-section>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses by title, instructor, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="flex gap-4 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`pb-4 px-4 font-semibold transition-colors whitespace-nowrap ${activeTab === 'ongoing'
                ? 'text-primary border-b-2 border-primary -mb-1'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <span className="flex items-center gap-2">
              <Zap size={20} />
              Ongoing Batches ({courses?.ongoingBatches.length || 0})
            </span>
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 px-4 font-semibold transition-colors whitespace-nowrap ${activeTab === 'upcoming'
                ? 'text-primary border-b-2 border-primary -mb-1'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <span className="flex items-center gap-2">
              <TrendingUp size={20} />
              Upcoming Batches ({courses?.upcomingBatches.length || 0})
            </span>
          </button>
          <button
            onClick={() => setActiveTab('previous')}
            className={`pb-4 px-4 font-semibold transition-colors whitespace-nowrap ${activeTab === 'previous'
                ? 'text-primary border-b-2 border-primary -mb-1'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <span className="flex items-center gap-2">
              <Star size={20} />
              Previous Batches ({courses?.previousBatches.length || 0})
            </span>
          </button>
        </div>
      </section>

      {/* Ongoing & Upcoming Batches */}
      {(activeTab === 'ongoing' || activeTab === 'upcoming') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 md:py-0">
          {filteredBatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No courses match your search. Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {filteredBatches.map((batch) => {
                const levelColor = levelColors[batch.level] || levelColors['Beginner']
                return (
                  <div
                    key={batch.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
                  >
                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground flex-1 text-balance">
                          {batch.courseTitle}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border whitespace-nowrap ${levelColor}`}>
                          {batch.level}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6 text-balance">{batch.description}</p>

                      {/* Topics */}
                      {batch.topics && batch.topics.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-foreground mb-2">Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {batch.topics.map((topic, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Details */}
                      <div className="space-y-3 mb-6 pb-6 border-b border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>
                            {new Date(batch.startDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}{' '}
                            -{' '}
                            {new Date(batch.endDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock size={16} />
                          <span>{batch.duration}</span>
                        </div>
                        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User size={16} />
                        <span>Instructor: {batch.instructor}</span>
                      </div> */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-xs font-mono bg-muted px-2 py-1 rounded">{batch.schedule}</span>
                        </div>
                      </div>

                      {/* Seats & Price */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {batch.seatsRemaining} of {batch.seats} seats
                          </span>
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary transition-all"
                              style={{
                                width: `${((batch.seats - batch.seatsRemaining) / batch.seats) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-primary">{batch.price}</span>
                      </div>

                      {/* CTA Button */}
                      {activeTab === 'upcoming' ? (
                        <a
                          href={batch.registration_link || '/contact'}
                          target={batch.registration_link ? '_blank' : undefined}
                          rel={batch.registration_link ? 'noopener noreferrer' : undefined}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors text-center block"
                        >
                          Register Now
                        </a>
                      ) : (
                        <div className="w-full bg-muted text-muted-foreground font-semibold py-3 px-6 rounded-lg text-center">
                          Registration Closed
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      )}

      {/* Previous Batches */}
      {activeTab === 'previous' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-6">
            {courses.previousBatches.map((batch) => (
              <div
                key={batch.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6 pb-6 border-b border-border">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{batch.courseTitle}</h3>
                    <p className="text-muted-foreground">
                      {new Date(batch.startDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}{' '}
                      -{' '}
                      {new Date(batch.endDate).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-primary mb-1">{batch.successRate}%</div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{batch.studentCount}</div>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{batch.duration}</div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-xl font-bold text-foreground">{batch.instructor}</div>
                    <p className="text-sm text-muted-foreground">Instructor</p>
                  </div>
                </div>

                {/* Testimonials */}
                {batch.testimonials.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Star size={18} className="text-yellow-500" />
                      Student Testimonials
                    </h4>
                    <div className="space-y-3">
                      {batch.testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-muted p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" className="text-yellow-500" />
                              ))}
                            </div>
                            <span className="text-sm font-semibold text-foreground">{testimonial.student}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{testimonial.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground text-lg mb-8 text-balance">
            Join With Students who have already achieved their career goals through our expert-led courses.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Register Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
