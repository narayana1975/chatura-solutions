import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Consultation | Chatura Solutions',
  description: 'Get expert guidance for university selection, application support, and career path planning. Choose the right university and achieve your educational goals.',
  keywords: 'educational consultation, university selection, application help, career guidance, higher education planning',
  openGraph: {
    title: 'Educational Consultation | Chatura Solutions',
    description: 'Expert guidance for your educational journey and university selection',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Consultation | Chatura Solutions',
    description: 'University selection and career path guidance',
  },
}

export default function EducationalConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
