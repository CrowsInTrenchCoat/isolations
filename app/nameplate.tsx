'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nameplate () {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header id="nameplate">
      <span id="nameplate-name">Laboratory</span>
      {pathname !== '/' && <Link id="nameplate-back" href="/">Back</Link>}
    </header>
  )
}
