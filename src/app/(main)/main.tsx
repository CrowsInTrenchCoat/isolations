'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { Navigation } from './nav'
import { useMatchMedia } from '@/hooks/use-match-media'

interface MainProps {
  children: ReactNode
}

export function Main (props : MainProps) {
  const { children } = props
  const isLarge = useMatchMedia('(min-width: 700px)')
  const isMedium = useMatchMedia('(min-width: 500px)')
  const [ isLoading, setIsLoading ] = useState<boolean>(true)

  useEffect(() => {
    if (typeof isLarge === 'boolean' || typeof isMedium === 'boolean') {
      setIsLoading(false)
    }
  }, [ isLarge, isMedium ])

  let Component
  if (isLarge) {
    Component = Large
  } else if (isMedium) {
    Component = Medium
  } else {
    Component = Small
  }

  if (isLoading) {
    return null
  }

  return <Component>{children}</Component>
}

function Large (props : MainProps) {
  const { children } = props
  return (
    <>
      <div id="stuffs" data-size="large">
        <Navigation />
        <main id="content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

function Medium (props : MainProps) {
  const { children } = props
  return (
    <>
      <div id="stuffs" data-size="medium">
        <Navigation showDescription={false} />
        <main id="content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

function Small (props : MainProps) {
  const { children } = props
  return (
    <>
      <div id="stuffs" data-size="small">
        <main id="content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

function Footer () {
  return (
    <>
      <footer id="footer">
        <a
          className="repo-link"
          href="https://github.com/CrowsInTrenchCoat/isolations"
        >View source code</a>
      </footer>
    </>
  )
}
