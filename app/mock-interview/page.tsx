import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import StackingCardComponent from '@/components/ui/stacking-card'
import TestimonialsSection from '@/components/testimonials'

export const metadata = {
  title: 'Mock Interview | Chatura Solutions',
  description: 'Practice real interview questions with peers in a collaborative environment. Get live feedback from experts.',
}

export default function MockInterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Subheading */}
          <p className="text-center text-black text-2xl md:text-3xl font-bold mb-4">
            Stop preparing alone
          </p>

          {/* Main Heading */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Get Real <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Interview Practice</span>
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto text-black text-lg md:text-xl mb-12 leading-relaxed">
            Acing job interviews requires many skills: problem-solving, communication, product sensibility, and strong technical aptitude. There&apos;s one certain way to get dramatically better: <span className="font-semibold">Practicing Live Interviews.</span>
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                Practice mock interviews with experts
              </h2>
              <p className="text-black text-lg mb-8 leading-relaxed">
                Join thousands of tech candidates practicing interviews to land jobs. Practice real questions over video chat in a collaborative environment and get helpful feedback.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2  border-purple-500 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors uppercase tracking-wider"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Column - Image Only */}
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R1N3iCEXYHbrVZGWCJNKgdmm7C6Rdd.webp"
                alt="Person preparing for interview at laptop"
                width={450}
                height={630}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Schedule</h3>
              <p className="text-black">Book your preferred interview slot at your convenience</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Prepare</h3>
              <p className="text-black">Receive interview guidelines and comprehensive preparation materials</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Interview</h3>
              <p className="text-black">Participate in a real-world mock interview session</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Feedback</h3>
              <p className="text-black">Get detailed feedback and personalized improvement areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <StackingCardComponent
        title="Why Choose Us?"
        projects={[
          {
            title: 'Expert Interviewers',
            description: 'Learn from seasoned professionals who have conducted hundreds of interviews at FAANG companies. Get insider tips on what hiring managers really look for and how to stand out.',
            link: '/images/services/mock-interview.jpg',
            color: '#06b6d4',
          },
          {
            title: 'Real Interview Questions',
            description: 'Access a comprehensive database of actual technical and behavioral questions from top companies. Practice with questions that match your target role and company.',
            link: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop',
            color: '#0891b2',
          },
          {
            title: 'Personalized Feedback',
            description: 'Receive comprehensive feedback after every session highlighting your strengths, areas for improvement, and specific actionable tips to boost your confidence.',
            link: '/images/services/consultation.jpg',
            color: '#06a8d4',
          },
          {
            title: 'Supportive Community',
            description: 'Connect with thousands of ambitious professionals preparing for their dream roles. Share experiences, learn from peers, and support each other on this journey.',
            link: '/images/services/Supportive.png',
            color: '#0b7ab4',
          },
        ]}
      />

      {/* Benefits of a Mock Interview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Benefits of a Mock Interview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg">✓</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Reduces Anxiety</h3>
                  <p className="text-gray-700 leading-relaxed">Familiarizes candidates with the interview process and helps them become more comfortable and confident.</p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg">✓</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Improves Responses</h3>
                  <p className="text-gray-700 leading-relaxed">Helps candidates refine their answers to common interview questions and practice articulating their experiences and skills effectively.</p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg">✓</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Enhances Performance</h3>
                  <p className="text-gray-700 leading-relaxed">Provides an opportunity to practice and receive feedback on interview skills, such as communication, professionalism, and problem-solving.</p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg">✓</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Identifies Gaps</h3>
                  <p className="text-gray-700 leading-relaxed">Reveals areas where the candidate might need more preparation or improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <TestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl py-12 md:py-16 px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Interview Skills?
              </h2>

              <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
                Join our community of successful professionals today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule Now
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
