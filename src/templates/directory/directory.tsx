import { ReactNode } from 'react'
import { Content } from '@/components/content'
import { Nameplate, type DirectoryData } from '@/components/nameplate'
import { Footer } from '@/components/footer'
import { type NavItemInterface } from './types'
import { Navigation } from './navigation'

import '../base.scss'
import './directory.scss'
import '../highlight.scss'

interface DirectoryProps {
  children : ReactNode,
  navItems: NavItemInterface[],
  data : DirectoryData,
}

export function Directory (props : DirectoryProps) {
  const { children, navItems, data } = props
  return (
    <div id="template" data-name="directory">
      <Nameplate directoryData={data} />
      <Navigation itemData={navItems} />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}
