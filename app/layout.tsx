import type { Metadata } from 'next'

import "./globals.scss"
import { Nameplate } from './nameplate'

export const metadata: Metadata = {
  title: "Isolations",
  description: "My super-small javascript projects",
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <Nameplate />
        {children}
      </body>
    </html>
  )
}
