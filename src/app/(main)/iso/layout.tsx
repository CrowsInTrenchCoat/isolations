import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Directory } from '@/templates/directory'

export const metadata: Metadata = {
  title: {
    template: '%s | Isolations | JS Laboratory',
    default: 'Isolations | JS Laboratory',
  },
  description: 'Experimenting with a cornucopia different things.',
}

interface IsoLayoutProps { children: ReactNode }

export default function IsoLayout (props : IsoLayoutProps) {
  const { children } = props
  const data = {
    name: 'Isolations',
    href: '/isolations/iso'
  }
  return (
    <Directory
      data={data}
      navItems={[]}
    >{children}</Directory>
  )
}
