'use client'

import React, { ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface NavItemProps {
  icon : ReactNode,
  heading : string,
  href: string,
  copy : string,
  showCopy : boolean,
}

export function NavItem (props : NavItemProps) {
  const { icon, heading, href, copy, showCopy } = props
  const [ isHighlighted, setIsHighlighted ] = useState<boolean>(false)
  const router = useRouter()

  const handleBlur = () => setIsHighlighted(false)
  const handleClick = () => router.push(href)
  const handleFocus = () => setIsHighlighted(true)
  const handleMouseOut = () => setIsHighlighted(false)
  const handleMouseOver = () => setIsHighlighted(true)

  return (
    <li
      className="drawer-list-item"
      data-is-highlighted={isHighlighted ? '' : null}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="drawer-list-item-icon">
        <div className="circular-icon">{icon}</div>
      </div>
      <div className="drawer-list-item-text">
        <Link
          className="drawer-list-item-name"
          href={href}
        >{heading}</Link>
        {showCopy && <p>{copy}</p>}
      </div>
    </li>
  )
}
