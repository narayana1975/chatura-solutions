import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Gallery6 } from '@/components/gallery6'
import HeroSection from '@/components/hero-section-9'
import { BouncyCardsFeatures } from '@/components/bounce-card-features'
import { AnimatedTestimonials } from '@/components/animated-testimonials'
import { BannerSystemDesign } from '@/components/ui/banner-system-design'
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, Link as LinkIcon } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation',
  description: 'Transform your career with expert upskilling courses, real mock interviews, and personalized educational consultation. Join 10,000+ successful students.',
  keywords: 'upskilling courses, mock interviews, educational consultation, career advancement, interview preparation, university selection',
  openGraph: {
    title: 'Chatura Solutions - Career Transformation Platform',
    description: 'Expert courses, mock interviews, and educational guidance for career success',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatura Solutions',
    description: 'Career transformation through expert courses and guidance',
  },
}

export default function Home() {
  const servicesGallery = [
    {
      id: 'item-1',
      title: 'Upskilling Courses',
      summary: 'Comprehensive courses designed to enhance your professional skills and expertise in your field. Master new technologies and advanced techniques with industry experts.',
      url: '#',
      image: '/images/services/upskilling.jpg',
    },
    {
      id: 'item-2',
      title: 'Mock Interviews',
      summary: 'Practice with industry experts and gain confidence for your actual interviews. Get real-time feedback and personalized coaching to ace your next interview.',
      url: '#',
      image: '/images/services/mock-interview.jpg',
    },
    {
      id: 'item-3',
      title: 'Educational Consultation',
      summary: 'Personalized guidance for higher education selection and career path planning. Navigate university options and craft your perfect academic journey.',
      url: '#',
      image: '/images/services/consultation.jpg',
    },
  ]

  const bounceCardFeatures = [
    { 
      title: 'Expert Instructors', 
      description: 'Learn from industry professionals with years of experience',
      gradient: 'bg-gradient-to-br from-cyan-400 to-teal-400',
      textColor: 'text-teal-50'
    },
    { 
      title: 'Personalized Guidance', 
      description: 'One-on-one consultation tailored to your goals',
      gradient: 'bg-gradient-to-br from-blue-400 to-cyan-400',
      textColor: 'text-cyan-50'
    },
    { 
      title: 'Proven Track Record', 
      description: '10,000+ students placed in top companies',
      gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400',
      textColor: 'text-emerald-50'
    },
    { 
      title: '24/7 Support', 
      description: 'Always available to answer your questions and concerns',
      gradient: 'bg-gradient-to-br from-cyan-400 to-sky-400',
      textColor: 'text-sky-50'
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Raj Kumar",
      role: "Software Engineer",
      company: "Google",
      content:
        "Chatura Solutions helped me crack my Google interview. The mock interviews were incredibly realistic and the feedback from the mentors was invaluable. I landed my dream job!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Microsoft",
      content:
        "The upskilling courses at Chatura Solutions are comprehensive and taught by industry experts. I was able to transition from engineering to product management smoothly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "MBA Student",
      company: "IIM Ahmedabad",
      content:
        "The educational consultation service helped me choose the right MBA program and craft my application strategy. I got accepted to my top choice!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ]

  const faqs = [
    {
      q: 'What is Chatura Solutions?',
      a: 'Chatura Solutions is an EdTech platform offering upskilling courses, mock interviews, and educational consultation services for career advancement.',
    },
    {
      q: 'How do I schedule a mock interview?',
      a: 'Visit our Mock Interview page and click on the scheduling link to book your session with our experts.',
    },
    {
      q: 'Can I get a refund if I am not satisfied?',
      a: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with our services.',
    },
    {
      q: 'Do you offer group sessions?',
      a: 'Yes, we offer both individual and group sessions for consultations and courses.',
    },
    {
      q: 'How long does educational consultation take?',
      a: 'Consultation duration varies based on your needs, typically ranging from 1-3 hours spread over multiple sessions.',
    },
    {
      q: 'What subjects do you cover?',
      a: 'We cover a wide range of subjects including technical interviews, career counseling, university applications, and professional development.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BannerSystemDesign />

      {/* Hero Section */}
      <HeroSection
        title={
          <>
            A new way to learn <br /> & get knowledge
          </>
        }
        subtitle="EduFlex is here for you with various courses & materials from skilled tutors all around the world."
        actions={[
          {
            text: 'Join the Class',
            href: '/courses',
            variant: 'default',
          },
          {
            text: 'Learn more',
            href: '#',
            variant: 'outline',
          },
        ]}
        stats={[
          {
            value: '150+',
            label: 'Active students',
            icon: <Users className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: '5+',
            label: 'Tutors',
            icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
          },
          {
            value: 'Resources',
            label: '',
            icon: <LinkIcon className="h-5 w-5 text-muted-foreground" />,
          },
        ]}
        images={[
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
          'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900?q=80&w=2070&auto=format&fit=crop',
        ]}
      />

      {/* Mission & Vision Section */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower students and professionals worldwide by providing high-quality educational resources, expert guidance, and mock interview practice that bridge the gap between academic learning and industry requirements.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the leading EdTech platform trusted by students and professionals for career development, recognized for our innovative approach to education and commitment to individual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Gallery6
        heading="Our Services"
        demoUrl="https://chaturasolutions.com"
        items={servicesGallery}
      />

      {/* Features Section */}
      <BouncyCardsFeatures features={bounceCardFeatures} />

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <summary className="cursor-pointer flex items-center justify-between p-4 md:p-6 bg-card hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground text-left text-balance">{faq.q}</h3>
                <span className="ml-4 flex-shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-4 md:px-6 py-4 bg-background text-muted-foreground border-t border-border">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Transform Your Career?</h2>
          <p className="text-primary-foreground/90 text-base md:text-lg mb-6">Join thousands of professionals who have advanced their careers with Chatura Solutions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/educational-consultation"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Schedule Consultation <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm md:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedTestimonials
        title="Loved by our students"
        subtitle="Thousands of professionals have transformed their careers with Chatura Solutions. Here&apos;s what they have to say."
        badgeText="Success Stories"
        testimonials={testimonials}
        autoRotateInterval={6000}
      />

      <Footer />
    </div>
  )
}
