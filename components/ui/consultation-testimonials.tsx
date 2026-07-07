'use client'

import { TimelineContent } from '@/components/ui/timeline-animation'
import Image from 'next/image'
import { useRef } from 'react'

function ConsultationTestimonials() {
  const testimonialRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(10px)',
      y: -20,
      opacity: 0,
    },
  }

  return (
    <section
      className="relative w-full bg-background py-16 md:py-24"
      ref={testimonialRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <article className="max-w-screen-md mx-auto text-center space-y-3 mb-12">
          <TimelineContent
            as="h2"
            className="text-3xl md:text-4xl font-bold text-foreground"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Transformative Educational Journeys
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-lg text-muted-foreground"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Discover how strategic educational consultation has empowered students to make informed decisions and achieve their academic and career aspirations
          </TimelineContent>
        </article>

        {/* Testimonials Grid */}
        <div className="lg:grid lg:grid-cols-3 gap-6 flex flex-col w-full py-8">
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-6 h-full lg:gap-0 gap-6">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-card border border-border overflow-hidden rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-50"></div>
              <article className="mt-auto relative z-10">
                <p className="text-foreground mb-6">
                  "The consultation team helped me understand my strengths and align them with the right academic pathway. Their strategic guidance led to acceptances from my top-choice universities."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Priya Sharma
                    </h3>
                    <p className="text-muted-foreground text-sm">Harvard & Stanford Admit</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop"
                    alt="Priya Sharma"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-primary text-primary-foreground overflow-hidden rounded-lg border border-primary/20 p-6 hover:shadow-lg transition-shadow"
            >
              <article className="mt-auto relative z-10">
                <p className="mb-6">
                  "Beyond university selection, they guided my entire academic strategy. Their insights on career alignment transformed my educational trajectory."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-lg">Arjun Desai</h3>
                    <p className="text-sm opacity-90">Oxford & Cambridge Scholar</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                    alt="Arjun Desai"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-6 lg:gap-0 gap-6">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-card border border-border overflow-hidden rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <article className="mt-auto relative z-10">
                <p className="text-foreground text-sm md:text-base mb-6">
                  "The consultation sessions were transformative. They helped me develop a clear roadmap for my academic and professional goals, making every decision purposeful."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Neha Patel
                    </h3>
                    <p className="text-muted-foreground text-sm">MIT & Caltech Admit</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=687&auto=format&fit=crop"
                    alt="Neha Patel"
                    width={200}
                    height={200}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-card border border-border overflow-hidden rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <article className="mt-auto relative z-10">
                <p className="text-foreground text-sm md:text-base mb-6">
                  "What impressed me most was their holistic approach to educational planning. They didn't just help me choose a university—they shaped my entire future path."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">Rohit Kumar</h3>
                    <p className="text-muted-foreground text-sm">Stanford PhD Scholar</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop"
                    alt="Rohit Kumar"
                    width={200}
                    height={200}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-card border border-border overflow-hidden rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <article className="mt-auto relative z-10">
                <p className="text-foreground text-sm md:text-base mb-6">
                  "The consultation process made me realize my potential. They equipped me with the confidence and clarity needed to excel academically and professionally."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Aisha Khan
                    </h3>
                    <p className="text-muted-foreground text-sm">Cambridge & LSE Dual Program</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                    alt="Aisha Khan"
                    width={200}
                    height={200}
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-6 lg:gap-0 gap-6">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-primary text-primary-foreground overflow-hidden rounded-lg border border-primary/20 p-6 hover:shadow-lg transition-shadow"
            >
              <article className="mt-auto relative z-10">
                <p className="mb-6">
                  "They provided not just advice, but a framework for lifelong academic and personal growth. The impact extends far beyond my college years."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-lg">Vikram Singh</h3>
                    <p className="text-sm opacity-90">Harvard Graduate & Entrepreneur</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                    alt="Vikram Singh"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-card border border-border overflow-hidden rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-50"></div>
              <article className="mt-auto relative z-10">
                <p className="text-foreground mb-6">
                  "The educational consultation transformed my perspective on what's possible. With their guidance, I not only gained admission to top universities but discovered my true passion."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Sneha Gupta</h3>
                    <p className="text-muted-foreground text-sm">Yale & Princeton Scholar</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop"
                    alt="Sneha Gupta"
                    width={200}
                    height={200}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationTestimonials
