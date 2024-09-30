import type { Metadata } from 'next'

import { Directory, type NavItemInterface } from '@/templates/directory'

import { IconMoon } from '@/components/icons/moon'
import { IconSemicircle } from '@/components/icons/semicircle'
import { IconPieChart } from '@/components/icons/pie-chart'

export const metadata: Metadata = {
  title: {
    template: '%s | SVG | JS Laboratory',
    default: 'SVG | JS Laboratory',
  },
  description: 'Experimenting with SVG.',
}

type SvgLayoutProps = Readonly<{ children: React.ReactNode }>

const iconSize = 30

const navItems : NavItemInterface[] = [
  {
    name: 'Moon Phase',
    href: '/svg/moon-phase',
    icon: <IconMoon size={iconSize} />,
    copy: 'React component that illustates all phases of the moon in SVG.',
  },
  {
    name: 'Semicircle',
    href: '/svg/semicircle',
    icon: <IconSemicircle size={iconSize} />,
    copy: 'React component that draws an SVG semicircle.',
  },
  {
    name: 'Pie Chart',
    href: '/svg/pie-chart',
    icon: <IconPieChart size={iconSize} inset={1.5} />,
    copy: 'React component that draws an SVG pie chart.',
  }
]

export default function SvgLayout (props : SvgLayoutProps) {
  const { children } = props
  const data = {
    name: 'SVG',
    href: '/isolations/svg'
  }
  return (
    <Directory navItems={navItems} data={data}>{children}</Directory>
  )
}
