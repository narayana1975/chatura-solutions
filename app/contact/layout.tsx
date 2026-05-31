import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Chatura Solutions',
  description: 'Get in touch with Chatura Solutions. Contact our team for inquiries about upskilling courses, mock interviews, and educational consultation services.',
  keywords: 'contact Chatura Solutions, get in touch, customer support, inquiry form',
  openGraph: {
    title: 'Contact Us | Chatura Solutions',
    description: 'Reach out to our team for career guidance and consultation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Chatura Solutions',
    description: 'Get in touch with our expert team',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
