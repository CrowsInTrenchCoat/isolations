import type { Metadata } from 'next'
import { Nameplate } from '@/app/nameplate'
import '@/app/globals.scss'
import '@/app/highlight.scss'
import { Main } from './main'

export const metadata: Metadata = {
  title: {
    template: '%s | JavaScript Laboratory',
    default: 'JavaScript Laboratory',
  },
  description: "",
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout (props : RootLayoutProps) {
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
