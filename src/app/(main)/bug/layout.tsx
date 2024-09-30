import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Directory } from '@/templates/directory'
import { NavItemInterface } from '@/templates/directory'
import { IconCss } from '@/components/icons/css'
import { IconNextjs } from '@/components/icons/nextjs'

export const metadata: Metadata = {
  title: {
    template: '%s | Bug Fixes | JS Laboratory',
    default: 'Bug Fixes | JS Laboratory',
  },
  description: 'Strange and wonderful bugs and how I gently guide them out of my projects.',
}

interface IsoLayoutProps { children: ReactNode }

const iconSize = 30

const navItems : NavItemInterface[] = [
  {
    name: 'Extra class attribute',
    href: '/bug/nextjs-nested-layout',
    icon: <IconNextjs size={iconSize} />,
    copy: 'Console says: "Warning: Extra attributes from the server: class".'
  },
  {
    name: 'Overflowing pre element',
    href: '/bug/css-grid-pre-overflow',
    icon: <IconCss size={iconSize} />,
    copy: 'Grid layouts like to allow <pre> elements to overflow sometimes.'
  },
]

export default function IsoLayout (props : IsoLayoutProps) {
  const { children } = props
  const data = {
    name: 'Bugs',
    href: '/isolations/bugs'
  }
  return (
    <Directory navItems={navItems} data={data}>{children}</Directory>
  )
}
