import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mock Interview Practice | Chatura Solutions',
  description: 'Practice real interview questions with industry experts. Get live feedback and personalized coaching to ace your next job interview.',
  keywords: 'mock interviews, interview practice, technical interviews, interview preparation, job interview coaching',
  openGraph: {
    title: 'Mock Interview Practice | Chatura Solutions',
    description: 'Real interview practice with expert feedback and coaching',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mock Interview Practice | Chatura Solutions',
    description: 'Interview preparation with expert guidance',
  },
}

export default function MockInterviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
