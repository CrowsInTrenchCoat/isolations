import type { Metadata } from 'next'
import { Nameplate } from '@/app/nameplate'
import { Navigation } from './navigation'
import '@/app/globals.scss'
import '@/app/highlight.scss'

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
        <div id="structure">
          <Navigation />
          <main id="content">
            {children}
          </main>
        </div>
        <footer id="footer">
          <a
            className="repo-link"
            href="https://github.com/CrowsInTrenchCoat/isolations"
          >GitHub Repo</a>
        </footer>
      </body>
    </html>
  )
}
