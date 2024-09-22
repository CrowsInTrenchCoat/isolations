'use client'

import { usePathname } from 'next/navigation'
import { bangers } from '@/app/fonts'

export function Nameplate () {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header id="nameplate">
      <span id="nameplate-name" className={bangers.className}><abbr title="JavaScript">JS</abbr> Laboratory</span>
    </header>
  )
}
