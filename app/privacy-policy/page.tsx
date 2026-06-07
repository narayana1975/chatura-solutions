import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            <strong>Effective Date:</strong> 22 February 2022
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Company:</strong> Chatura Solutions LLP
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Established:</strong> 2024
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>Location:</strong> Vellore, Tamil Nadu, India
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Chatura Solutions Private Limited. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, applications, and services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you provide directly to us, such as your name, email address, phone number, and any other information you provide when you register for an account, contact us, or participate in our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information about how you interact with our website and services, including IP addresses, browser types, pages visited, and other usage data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Educational Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information related to your educational progress, such as course enrollments, grades, and other academic records, as necessary for providing our services.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">To Provide Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use your information to deliver and improve our educational products and services, respond to inquiries, and support your learning experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">To Communicate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may use your contact information to send you updates, newsletters, and other information related to our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">To Enhance User Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We analyze usage data to understand how our services are used and to improve their functionality and performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Third-Party Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third-party service providers who assist us in operating our website, conducting business, or providing services to you, subject to confidentiality agreements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Business Transfers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of a merger, acquisition, or any other form of business restructuring, your information may be transferred to the acquiring entity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no security measures are entirely foolproof.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Access and Correction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access and update your personal information. You can request corrections or deletions of your data by contacting us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Opt-Out</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website and updating the effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <p className="text-foreground">
                <strong>Chatura Solutions LLP</strong>
              </p>
              <p className="text-muted-foreground">
                1st Cross Road, C Sector V.G.Rao Nagar<br />
                Katpadi, Vellore<br />
                Tamil Nadu 632007, India
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> <a href="tel:+91-416-4055743" className="text-primary hover:underline">+91-416-4055743</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong> <a href="mailto:support@chaturasolutions.com" className="text-primary hover:underline">support@chaturasolutions.com</a>
              </p>
              <p className="text-muted-foreground">
                <strong>Website:</strong> <a href="https://chaturasolutions.com" className="text-primary hover:underline">chaturasolutions.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
