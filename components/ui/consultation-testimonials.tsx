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
            Success Stories from Our Clients
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-lg text-muted-foreground"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Hear how our expert guidance has helped students achieve their educational dreams
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
                  "The consultation service helped me identify the perfect universities for my
                  academic profile. The personalized guidance was invaluable in my application process."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Priya Sharma
                    </h3>
                    <p className="text-muted-foreground text-sm">Student, IIT Admission</p>
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
                  "Excellent support throughout my university selection process. The team&apos;s
                  expertise made all the difference."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-lg">Arjun Desai</h3>
                    <p className="text-sm opacity-90">Oxford University</p>
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
                  "Their comprehensive guidance on application essays and interview prep was
                  outstanding. Highly recommend to anyone pursuing higher education abroad."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Neha Patel
                    </h3>
                    <p className="text-muted-foreground text-sm">MIT Graduate</p>
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
                  "The career path planning sessions helped me align my education with my goals.
                  Exceptional service from start to finish."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">Rohit Kumar</h3>
                    <p className="text-muted-foreground text-sm">Stanford University</p>
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
                  "Responsive, knowledgeable, and genuinely invested in student success. This is
                  the kind of guidance every student needs."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground lg:text-lg">
                      Aisha Khan
                    </h3>
                    <p className="text-muted-foreground text-sm">Cambridge University</p>
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
                  "A true partner in my educational journey. Their insights shaped my entire
                  university selection strategy."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-lg">Vikram Singh</h3>
                    <p className="text-sm opacity-90">Harvard University</p>
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
                  "From university selection to application submission, the comprehensive support
                  I received was transformative. Highly professional and results-driven team."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Sneha Gupta</h3>
                    <p className="text-muted-foreground text-sm">Yale University</p>
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
