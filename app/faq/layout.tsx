import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Chatura Solutions',
  description: 'Frequently Asked Questions about Chatura Solutions courses, mock interviews, educational consultation, and more.',
  openGraph: {
    title: 'FAQs | Chatura Solutions',
    description: 'Get answers to your questions about our services and programs',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
