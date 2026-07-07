'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Globe, GraduationCap, Briefcase, ArrowRight, Users } from 'lucide-react'
import { DestinationCard } from '@/components/ui/card-21'
import ConsultationTestimonials from '@/components/ui/consultation-testimonials'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationalConsultation() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Subheading */}
          <p className="text-center text-black text-2xl md:text-3xl font-bold mb-4">
            Transform Your Educational Future
          </p>

          {/* Main Heading */}
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Expert Educational Consultation <br></br></span> for Success
          </h1>

          {/* Description */}
          <p className="text-center max-w-4xl mx-auto text-black text-lg md:text-xl mb-12 leading-relaxed">
            Educational consultation involves providing expert advice and guidance to students, parents, and educational institutions to enhance learning experiences and outcomes. We help you navigate academic planning, career guidance, curriculum development, and educational technology integration.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-12">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Comprehensive Educational Guidance
              </h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Academic Planning</h3>
                  <p className="text-black text-base leading-relaxed">
                    Personalized advice on course selection, study techniques, academic performance optimization, and strategic goal setting tailored to your unique learning style.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Career Guidance</h3>
                  <p className="text-black text-base leading-relaxed">
                    Discover your career interests, define long-term goals, and identify educational pathways that align with your aspirations and market opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">University Selection & Admissions</h3>
                  <p className="text-black text-base leading-relaxed">
                    Expert guidance in selecting universities that match your academic profile, values, and career objectives. We guide you through the entire application process.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors uppercase tracking-wider"
              >
                Book Educational Consultation
              </Link>
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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
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
        // {
        //   title: "Educational Technology Integration",
        //   image: "/images/educational-technology.png",
        //   services: [
        //     {
        //       heading: "Technology Planning",
        //       description:
        //         "Assisting institutions in selecting and implementing effective digital learning tools and platforms.",
        //     },
        //     {
        //       heading: "Professional Training",
        //       description:
        //         "Equipping teachers and administrators with practical skills to maximize educational technology.",
        //     },
        //   ],
        // },
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
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-blue-500 px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Schedule Educational Consultation <ArrowRight size={18} />
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
