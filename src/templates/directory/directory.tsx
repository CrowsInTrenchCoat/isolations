import { ReactNode } from 'react'
import { Content } from '@/components/content'
import { Nameplate } from '@/components/nameplate'
import { Footer } from '@/components/footer'
import { type NavItemInterface } from './types'
import { Navigation } from './navigation'

import '../base.scss'
import './directory.scss'
import '../highlight.scss'

interface DirectoryProps {
  children : ReactNode,
  navItems: NavItemInterface[],
  sectionName : string,
}

export function Directory (props : DirectoryProps) {
  const { children, navItems, sectionName } = props
  return (
    <div id="template" data-name="directory">
      <Nameplate sectionName={sectionName} />
      <Navigation itemData={navItems} />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}
