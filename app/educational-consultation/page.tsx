'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Globe, GraduationCap, Briefcase, ArrowRight, Users } from 'lucide-react'
import { DestinationCard } from '@/components/ui/card-21'
import ConsultationTestimonials from '@/components/ui/consultation-testimonials'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationalConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    target_country: '',
    target_university: '',
    education_level: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setMessage('Consultation request submitted! Our executive will contact you Soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        target_country: '',
        target_university: '',
        education_level: '',
      })

      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      console.error('Error:', error)
      setMessage('Failed to submit. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEnquireClick = () => {
    const formSection = document.querySelector('[data-consultation-form]')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Subheading */}
          <p className="text-center text-black text-2xl md:text-3xl font-bold mb-4">
            Find your perfect university
          </p>

          {/* Main Heading */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Get <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Expert Guidance</span> for Higher Education
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto text-black text-lg md:text-xl mb-12 leading-relaxed">
            Choosing the right university is one of the most important decisions of your life. Our expert consultants have guided <span className="font-semibold">hundreds of students to their dream universities</span> across the globe.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Personalized consultation for your educational journey
              </h2>
              <p className="text-black text-lg mb-8 leading-relaxed">
                Our experienced counselors provide one-on-one guidance to help you select universities that match your academic profile, career goals, and personal preferences. From shortlisting options to acing admission interviews, we&apos;ve got you covered.
              </p>
              <div>
                <button
                  onClick={handleEnquireClick}
                  className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors uppercase tracking-wider"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Right Column - Image Only */}
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bragging_img1-osXnCBdSr58avM2muxPMhkWJbb6wXi.webp"
                alt="Student with notebook and educational materials"
                width={450}
                height={630}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
<section className="bg-gradient-to-b from-background to-background/50 py-20 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Our Educational Consulting Services
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        Empowering students, educators, and institutions with expert guidance,
        innovative learning strategies, and solutions designed for academic success.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
        {
          title: "Academic Counselling",
          image: "/images/academic-counselling.png",
          services: [
            {
              heading: "Student Guidance",
              description:
                "Personalized advice on course selection, study techniques, academic performance, and goal setting.",
            },
            {
              heading: "Career Planning",
              description:
                "Helping students discover career interests, define long-term goals, and identify suitable educational pathways.",
            },
          ],
        },
        {
          title: "College Admissions Consulting",
          image: "/images/college-admissions.png",
          services: [
            {
              heading: "Application Assistance",
              description:
                "Expert support for applications, essays, interviews, and admission strategies.",
            },
            {
              heading: "School Selection",
              description:
                "Guidance in choosing institutions that align with academic strengths, career aspirations, and personal preferences.",
            },
          ],
        },
        {
          title: "Special Education Consulting",
          image: "/images/special-education.png",
          services: [
            {
              heading: "Individualized Education Plans",
              description:
                "Support in developing and reviewing IEPs tailored to each student's learning needs.",
            },
            {
              heading: "Support Services",
              description:
                "Recommendations on accommodations, resources, and learning support systems for student success.",
            },
          ],
        },
        {
          title: "Educational Technology Integration",
          image: "/images/educational-technology.png",
          services: [
            {
              heading: "Technology Planning",
              description:
                "Assisting institutions in selecting and implementing effective digital learning tools and platforms.",
            },
            {
              heading: "Professional Training",
              description:
                "Equipping teachers and administrators with practical skills to maximize educational technology.",
            },
          ],
        },
        {
          title: "Curriculum Development",
          image: "/images/curriculum-development.png",
          services: [
            {
              heading: "Curriculum Design",
              description:
                "Creating engaging, standards-aligned curricula that meet diverse student learning requirements.",
            },
            {
              heading: "Assessment Strategies",
              description:
                "Developing effective evaluation methods to measure student achievement and curriculum performance.",
            },
          ],
        },
        {
          title: "Institutional Consulting",
          image: "/images/institutional-consulting.png",
          services: [
            {
              heading: "Strategic Planning",
              description:
                "Helping institutions establish long-term goals, growth strategies, and operational excellence.",
            },
            {
              heading: "Program Evaluation",
              description:
                "Assessing educational programs and providing actionable recommendations for improvement.",
            },
          ],
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <div className="space-y-5">
              {service.services.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-primary/20 pl-4"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    


      {/* Consultation Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-20" data-consultation-form>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Schedule Your Consultation</h2>
        <p className="text-center text-muted-foreground mb-12">
          Fill out the form below and our team will get in touch within 24 hours to discuss your educational goals.
        </p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="+1 (234) 567-890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Education Level</label>
              <select
                name="education_level"
                value={formData.education_level}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select your education level</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor&apos;s Degree</option>
                <option value="master">Master&apos;s Degree</option>
                <option value="phd">Ph.D.</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Target Country</label>
                <input
                  type="text"
                  name="target_country"
                  value={formData.target_country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., USA, UK, Canada"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Target University (Optional)</label>
                <input
                  type="text"
                  name="target_university"
                  value={formData.target_university}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., Harvard, Stanford"
                />
              </div>
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg text-sm ${message.includes('submitted')
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? 'Submitting...' : 'Request Consultation'} {!isLoading && <ArrowRight size={20} />}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Your information is secure and will only be used to contact you about your consultation.
            </p>
          </form>
        </div>
      </section>

            {/* Testimonials Section */}
      <ConsultationTestimonials />
      
      {/* CTA Section */}
      <section className="py-12 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl py-12 md:py-16 px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Have Questions?
              </h2>

              <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
                Our experts are ready to help. Get in touch with us today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Contact US <ArrowRight size={18} />
                </Link>


              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
