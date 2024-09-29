import type { Metadata } from 'next'
import { Manuscript } from '@/templates/manuscript'

export const metadata: Metadata = {
  title: {
    template: '%s | SVG | JS Laboratory',
    default: 'SVG | JS Laboratory',
  },
  description: 'Experimenting with SVG.',
}

type HomeLayoutProps = Readonly<{ children: React.ReactNode }>

export default function HomeLayout (props : HomeLayoutProps) {
  const { children } = props
  return <Manuscript>{children}</Manuscript>
}
