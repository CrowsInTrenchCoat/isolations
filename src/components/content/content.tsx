import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content (props : ContentProps) {
  const { children, ...atts } = props
  return <main {...atts} id="content">{children}</main>
}
