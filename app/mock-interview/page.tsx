import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import StackingCardComponent from '@/components/ui/stacking-card'

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                Practice mock interviews with peers
              </h2>
              <p className="text-black text-lg mb-8 leading-relaxed">
                Join thousands of tech candidates practicing interviews to land jobs. Practice real questions over video chat in a collaborative environment and get helpful feedback.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors uppercase tracking-wider"
                >
                  SCHEDULE NOW
                </Link>
              </div>
            </div>

            {/* Right Column - Image with Form Overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 p-8 aspect-square flex items-center justify-center">
                {/* Form Overlay */}
                <div className="absolute top-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 z-10 text-sm font-semibold">
                  <span>👤</span>
                  Interview Preparation Hub
                </div>

                {/* Form Fields */}
                <div className="absolute bottom-8 right-8 space-y-3 z-10">
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Position</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Company</p>
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-lg w-40">
                    <p className="text-gray-700 text-sm font-medium">Job Description</p>
                  </div>
                </div>

                {/* Person Placeholder */}
                <div className="relative z-5">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                    alt="Professional interviewer"
                    width={200}
                    height={280}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Schedule</h3>
              <p className="text-black">Book your preferred interview slot at your convenience</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Prepare</h3>
              <p className="text-black">Receive interview guidelines and comprehensive preparation materials</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Interview</h3>
              <p className="text-black">Participate in a real-world mock interview session</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
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
            link: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop',
            color: '#06b6d4',
          },
          {
            title: 'Real Interview Questions',
            description: 'Access a comprehensive database of actual technical and behavioral questions from top companies. Practice with questions that match your target role and company.',
            link: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop',
            color: '#0891b2',
          },
          {
            title: 'Personalized Feedback',
            description: 'Receive comprehensive feedback after every session highlighting your strengths, areas for improvement, and specific actionable tips to boost your confidence.',
            link: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop',
            color: '#06a8d4',
          },
          {
            title: 'Supportive Community',
            description: 'Connect with thousands of ambitious professionals preparing for their dream roles. Share experiences, learn from peers, and support each other on this journey.',
            link: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop',
            color: '#0b7ab4',
          },
        ]}
      />

      <Footer />
    </div>
  )
}
