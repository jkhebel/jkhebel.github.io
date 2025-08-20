import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AIBackground } from '@/components/AIBackground'

export const metadata: Metadata = {
  title: 'Jai Hebel - AI Specialist & Biomedical Engineer',
  description: 'Portfolio of Jai Hebel, an AI specialist and biomedical engineer passionate about creating innovative solutions for human health.',
  keywords: ['AI', 'Machine Learning', 'Biomedical Engineering', 'Software Engineering', 'Portfolio'],
  authors: [{ name: 'Jai Hebel' }],
  creator: 'Jai Hebel',
  openGraph: {
    title: 'Jai Hebel - AI Specialist & Biomedical Engineer',
    description: 'Portfolio of Jai Hebel, an AI specialist and biomedical engineer passionate about creating innovative solutions for human health.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jai Hebel - AI Specialist & Biomedical Engineer',
    description: 'Portfolio of Jai Hebel, an AI specialist and biomedical engineer passionate about creating innovative solutions for human health.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <AIBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
