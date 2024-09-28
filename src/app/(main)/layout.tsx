import type { Metadata } from 'next'
import { Nameplate } from './nameplate'
import { Main } from './main'
import './layout.scss'
import './highlight.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | JS Laboratory',
    default: 'JS Laboratory',
  },
  description: 'My super-small JavaScript projects.',
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout(props : RootLayoutProps) {
  const { children } = props
  return (
    <>
      <Nameplate />
      <div id="structure">
        <Main>{children}</Main>
      </div>
    </>
  )
}
