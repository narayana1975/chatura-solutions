import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Chatura Solutions - Frequently Asked Questions',
  description: 'Find answers to common questions about our courses, mock interviews, educational consultation, internships, and career opportunities.',
  keywords: 'FAQs, frequently asked questions, courses, mock interviews, consultation, internships',
  openGraph: {
    title: 'Frequently Asked Questions | Chatura Solutions',
    description: 'Find answers to your questions about our services and programs',
    type: 'website',
  },
}

export default function FAQPage() {
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
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Find answers to common questions about our courses, services, and programs. If you don&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32">
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

        {/* Contact CTA */}
        <div className="mt-16 p-8 md:p-12 bg-card border border-border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Didn&apos;t find your answer?</h3>
          <p className="text-muted-foreground mb-6">
            If you have additional questions, please don&apos;t hesitate to reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
