import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upskilling Courses | Chatura Solutions',
  description: 'Expert-led upskilling courses designed to enhance your professional skills. Master technical interviews, data structures, and career development with industry experts.',
  keywords: 'upskilling courses, technical courses, interview preparation, data structures, career development',
  openGraph: {
    title: 'Upskilling Courses | Chatura Solutions',
    description: 'Transform your skills with expert-led courses from Chatura Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upskilling Courses | Chatura Solutions',
    description: 'Expert courses for professional development',
  },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
