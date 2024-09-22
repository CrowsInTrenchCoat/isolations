import type { Metadata } from 'next'
import { Nameplate } from '@/app/nameplate'
import '@/app/globals.scss'
import '@/app/highlight.scss'
import { Main } from '@/app/(demos)/main'

export const metadata: Metadata = {
  title: {
    template: '%s | JavaScript Laboratory',
    default: 'JavaScript Laboratory',
  },
  description: "My super-small javascript projects",
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Nameplate />
        <div id="structure">
          <Main>{children}</Main>
        </div>
      </body>
    </html>
  )
}
