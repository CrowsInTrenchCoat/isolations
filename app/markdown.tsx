import { ReactNode } from 'react'
import { lato } from '@/app/fonts'

interface MarkdownProps {
  children: ReactNode
}
export function Markdown ({ children } : MarkdownProps) {
  return (
    <div
      className={`description markdown ${lato.className}`}
    >{children}</div>
  )
}
