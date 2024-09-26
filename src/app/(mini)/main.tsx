import React, { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export function Main (props : MainProps) {
  const { children } = props
  return (
    <main id="content">
      {children}
    </main>
  )
}
