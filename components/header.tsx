'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  const desktopNavOrder = [
    navLinks[0], // Home
    // Services dropdown goes here
    navLinks[1], // Blogs
    navLinks[2], // Contact
  ]

  const serviceLinks = [
    { href: '/courses', label: 'Upskilling - Courses' },
    { href: '/mock-interview', label: 'Mock Interview' },
    { href: '/educational-consultation', label: 'Educational Consultation' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Chatura Solutions LLP" 
            width={180} 
            height={60}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home Link */}
          <Link
            href={desktopNavOrder[0].href}
            className="text-foreground hover:text-primary transition-colors font-medium text-xl"
          >
            {desktopNavOrder[0].label}
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleServices}
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-xl"
            >
              Services
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-foreground hover:bg-accent first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining Links */}
          {desktopNavOrder.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-xl"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/courses"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Services Menu */}
            <div>
              <button
                onClick={toggleServices}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-colors font-medium"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false)
                        setServicesOpen(false)
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/courses"
              className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
