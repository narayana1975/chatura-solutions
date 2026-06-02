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

  const services = [
    {
      icon: Globe,
      title: 'University Selection',
      description: 'Get guidance on choosing the right university based on your profile and goals.',
    },
    {
      icon: GraduationCap,
      title: 'Application Support',
      description: 'Expert help with applications, essays, and interview preparation for higher education.',
    },
    {
      icon: Briefcase,
      title: 'Career Path Planning',
      description: 'Plan your educational journey aligned with your career aspirations.',
    },
  ]

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
      <section className="bg-gradient-to-b from-background to-background/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Consultation Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive support at every step of your higher education journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "University Selection",
                description: "Expert guidance in selecting universities that match your academic profile, career goals, and personal preferences.",
                image: "/images/university-selection.png",
              },
              {
                title: "Application Support",
                description: "Comprehensive assistance with essay writing, application forms, and strategic positioning for top universities.",
                image: "/images/application-support.png",
              },
              {
                title: "Interview Coaching",
                description: "Personalized interview preparation to help you ace admission interviews and stand out to admissions committees.",
                image: "/images/interview-coaching.png",
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 mb-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="px-6 pb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">{service.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Students in Countries Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Students in Countries</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We have successfully guided students to universities across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg/960px-Front_view_of_Statue_of_Liberty_%28cropped%29.jpg"
              location="United States"
              flag="🇺��"
              stats="1,250+ Students"
              href="#"
              themeColor="210 100% 50%"
            />
          </div>
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop"
              location="United Kingdom"
              flag="🇬🇧"
              stats="680+ Students"
              href="#"
              themeColor="0 0% 20%"
            />
          </div>
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1280px-Moraine_Lake_17092005.jpg"
              location="Canada"
              flag="🇨🇦"
              stats="520+ Students"
              href="#"
              themeColor="0 100% 35%"
            />
          </div>
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1920px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"
              location="Australia"
              flag="🇦🇺"
              stats="410+ Students"
              href="#"
              themeColor="45 93% 47%"
            />
          </div>
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg"
              location="Germany"
              flag="🇩🇪"
              stats="380+ Students"
              href="#"
              themeColor="11 100% 50%"
            />
          </div>
          <div className="h-[400px]">
            <DestinationCard
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Singapore_Merlion.jpg/1280px-Singapore_Merlion.jpg"
              location="Singapore"
              flag="🇸🇬"
              stats="290+ Students"
              href="#"
              themeColor="39 100% 50%"
            />
          </div>
        </div>
      </section>



      {/* Consultation Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32" data-consultation-form>
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


      <section className="py-12 md:py-16">
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
