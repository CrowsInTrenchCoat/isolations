import type { Metadata, Viewport } from 'next'
import { lato } from '@/fonts'

export const metadata: Metadata = {
  title: "JavaScript Laboratory",
  description: "Teeny-tiny javascript projects written by 17 crows in a lab coat.",
}

export const viewport : Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}
