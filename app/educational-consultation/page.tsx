'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Globe, GraduationCap, Briefcase, ArrowRight, Users } from 'lucide-react'
import { DestinationCard } from '@/components/ui/card-21'

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
      const supabase = createClient()

      const { error } = await supabase.from('consultations').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          target_country: formData.target_country,
          target_university: formData.target_university,
          education_level: formData.education_level,
        },
      ])

      if (error) throw error

      setMessage('Consultation request submitted! We will contact you soon.')
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Expert Guidance for Higher Education
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Personalized consultation to help you select the right university and prepare for admission. Our experts have helped hundreds of students get into their dream institutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
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
              flag="🇺🇸"
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have Questions?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our experts are ready to help. Get in touch with us today.
          </p>
          <a
            href="mailto:consultation@chaturasolutions.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Email Us <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
