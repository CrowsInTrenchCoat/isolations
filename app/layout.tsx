import type { Metadata } from 'next'

import "./globals.scss"

export const metadata: Metadata = {
  title: "JavaScript Laboratory",
  description: "Teeny-tiny javascript projects written by 17 crows in a lab coat.",
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
