'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/contact', {
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

      setMessage('Message sent successfully! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      console.error('Error:', error)
      setMessage('Failed to send message. Please try again.')
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
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Have questions or want to learn more about our services? We&apos;d love to hear from you. Reach out and let&apos;s discuss how we can help you achieve your career goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@chaturasolutions.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@chaturasolutions.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Send Us a Message</h2>
        <p className="text-center text-muted-foreground mb-12">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
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
                placeholder="+1 (234) 567-8900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  message.includes('successfully')
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
              {isLoading ? 'Sending...' : 'Send Message'} {!isLoading && <ArrowRight size={20} />}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Your information is secure and will only be used to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Quick Responses</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">What is your typical response time?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Can I schedule a call with your team?</h3>
              <p className="text-muted-foreground">
                Yes! Please mention your preferred time in your message, and we&apos;ll do our best to accommodate you. You can also visit our mock interview page to use our scheduling system.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">What services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer upskilling courses, mock interviews, and educational consultation for higher education. Visit our home page to learn more about each service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Explore our services and transform your career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Services <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
