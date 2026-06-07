import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 ">
          {/* Column 1: Logo and Text */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Chatura Solutions LLP" 
                width={150} 
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
               With us you can upskill, work on real project, works as interns, get educational consultation, attend mock interviews and redefine your career
            </p>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Upskilling - Courses
                </Link>
              </li>
              <li>
                <Link href="/mock-interview" className="text-muted-foreground hover:text-primary transition-colors">
                  Mock Interview
                </Link>
              </li>
              <li>
                <Link href="/educational-consultation" className="text-muted-foreground hover:text-primary transition-colors">
                  Educational Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Careers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Careers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Intern
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Trainer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Fulltime
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.instagram.com/chaturasolutions/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/chaturasolutions/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin size={18} />
                  linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-white border-border pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © 2026 Chatura Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
