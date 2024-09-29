import { ReactNode } from 'react'
import { Content } from '@/components/content'
import { Nameplate } from '@/components/nameplate'

import '../base.scss'
import './manuscript.scss'

interface ManuscriptProps {
  children: ReactNode
}

export function Manuscript (props : ManuscriptProps) {
  const { children } = props
  return (
    <div id="manuscript">
      <div id="manuscript-box">
        <Nameplate />
        <Content>{children}</Content>
      </div>
    </div>
  )
}
