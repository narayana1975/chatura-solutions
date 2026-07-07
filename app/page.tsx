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
  title: 'Chatura Solutions | Upskill to redefine your career',
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
      title: 'Upskilling - Courses',
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
    {
      id: 'item-4',
      title: 'Career Counselling',
      summary: 'Receive personalized career guidance from industry experts. Explore career paths, identify your strengths, set achievable goals, and make informed decisions about your education and professional future.',
      url: '#',
      image: '/images/services/career-counselling.png',
    },
  ]

  const bounceCardFeatures = [
    {
      title: 'Industry Experts Led Training',
      description: 'Learn directly from experienced professionals and industry experts.',
      gradient: 'bg-gradient-to-br from-cyan-400 to-teal-400',
      textColor: 'text-teal-50'
    },
    {
      title: 'Student-Friendly Environment',
      description: 'Supportive learning atmosphere designed to help students succeed.',
      gradient: 'bg-gradient-to-br from-blue-400 to-cyan-400',
      textColor: 'text-cyan-50'
    },
    {
      title: 'Self-Paced Learning',
      description: 'Flexible learning options that let you study anytime, anywhere.',
      gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400',
      textColor: 'text-emerald-50'
    },
    {
      title: 'Online Support System',
      description: 'Get continuous assistance and guidance throughout your learning journey.',
      gradient: 'bg-gradient-to-br from-cyan-400 to-sky-400',
      textColor: 'text-sky-50'
    },
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Courses designed in collaboration with stakeholders and industry requirements.',
      gradient: 'bg-gradient-to-br from-indigo-400 to-blue-500',
      textColor: 'text-blue-50'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sahith Yedlapally",
      role: "Student",
      company: "MLR Institute of Technology",
      content:
        "I recently participated in a Cybersecurity Workshop organized by Chatura, and I must say it was exceptionally well-structured and incredibly educational. I highly recommend it to anyone looking to deepen their understanding of cybersecurity.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Suprathika",
      role: "Student",
      company: "MLR Institute of Technology",
      content:
        "I had the pleasure of attending a Cybersecurity Training hosted by Chatura, and I have to admit that it was quite informative and well-organized. Anyone who wants to learn more about cybersecurity should definitely check it out.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Ambati Jeswin",
      role: "Student",
      company: "MLR Institute of Technology",
      content:
        "I recently participated in an AIML Workshop on SCRUM Technologies organized by Chatura, and I must say it was exceptionally well-structured and incredibly educational. I highly recommend it to anyone looking to deepen their understanding in AIML.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Baswa Reddy Vineeth Prasad Reddy",
      role: "Student",
      company: "MLR Institute of Technology",
      content:
        "I recently participated in an AIML Workshop on SCRUM Technologies organized by Chatura, and I must say it was exceptionally well-structured and incredibly educational. I highly recommend it to anyone looking to deepen their understanding in AIML.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];
  const faqs = [
    {
      q: 'How do I register for a course?',
      a: 'Upcoming batches are listed under Courses. Simply choose your preferred batch and complete the registration process.',
    },
    {
      q: 'Do I get a certificate after completing a course?',
      a: 'Yes. A certificate of completion will be provided upon successfully finishing the course.',
    },
    {
      q: 'How can I get educational consultation?',
      a: 'You can fix an appointment through our platform. One of our executives will contact you within one hour of your scheduled time.',
    },
    {
      q: 'What kind of educational consultation do you provide?',
      a: 'We assist with college admissions, course comparisons, career guidance, and educational planning to help you make informed decisions.',
    },
    {
      q: 'Can I schedule a mock interview?',
      a: 'Yes. Book an appointment, make the payment, upload your resume, job description, and preferred time slot. A meeting link will be shared before the interview.',
    },
    {
      q: 'Who conducts the mock interview?',
      a: 'Mock interviews are conducted by experienced industry professionals who provide detailed feedback and improvement suggestions.',
    },
    {
      q: 'How can I apply for internships?',
      a: 'Internship opportunities are posted under Services → Internships. Register for available openings, and shortlisted candidates will be invited for interviews.',
    },
    {
      q: 'Do I need to pay for an internship?',
      a: 'There is a registration fee to apply. Selected candidates receive a stipend based on assigned tasks and successful completion.',
    },
    {
      q: 'What is the duration of the internship program?',
      a: 'Internship programs typically last between 3 and 6 months, depending on the role and project requirements.',
    },
    {
      q: 'Where can I find job openings at Chatura Solutions?',
      a: 'All current job openings and career opportunities are available on the Careers page.',
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* <BannerSystemDesign /> */}

      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Upskill to Redefine <br />Your Career
          </>
        }
        subtitle="Expert-led learning, mock interviews, and career guidance to help you succeed."
        actions={[
          {
            text: 'Explore Courses',
            href: '/courses',
            variant: 'default',
          },
          {
            text: 'Book Educational Consultation',
            href: '/educational-consultation',
            variant: 'outline',
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
                Chatura Solutions LLP is dedicated to transforming education through cutting-edge technology. We strive to make learning more accessible, engaging, and effective by leveraging AI, machine learning, and advanced analytics to create personalized educational experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading provider of innovative educational technology solutions that empower learners and educators worldwide, fostering a more inclusive and effective learning environment..
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
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Frequently Asked Questions</h2>
          <Link href="/faq" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-semibold whitespace-nowrap">
            View All FAQs <ArrowRight size={20} />
          </Link>
        </div>
        <div className="space-y-4">
          {faqs.slice(0, 5).map((faq, index) => (
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
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl py-12 md:py-16 px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Career?
              </h2>

              <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
                Join thousands of professionals who have advanced their careers with Chatura Solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/educational-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Book Educational Consultation <ArrowRight size={18} />
                </Link>

                <Link
                  href="/mock-interview"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Book Mock Interview
                </Link>
              </div>
            </div>
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
