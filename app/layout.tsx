import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pioneer Marketing',
  description: 'Empowering Your Brand Through Creative Digital Marketing. From ideas to impact — we build, boost, and brand your digital presence.',
  keywords: 'digital marketing, branding, graphics design, content writing, motion animation, media buying, website development',
  authors: [{ name: 'Pioneer Marketing' }],
  openGraph: {
    title: 'Pioneer Marketing',
    description: 'Empowering Your Brand Through Creative Digital Marketing',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
