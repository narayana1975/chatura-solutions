import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section with Image and Text */}
      <section className="flex-1 flex items-center justify-center py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Professional Services for Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                We deliver expert solutions tailored to your unique business needs. Transform your vision into reality with our comprehensive suite of professional services designed for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </button>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Professional services team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
