import React from 'react'

import Link from 'next/link'
import { IconMoon } from '@/icons/moon'
import { IconSemicircle } from '@/icons/semicircle'

interface NavigationProps {
  showDescription? : boolean,
}

export function Navigation (props : NavigationProps) {
  const { showDescription: _showDescription } = props
  const showDescription = _showDescription ?? true
  return (
    <div id="isolation-navigation" className="drawer">
      <nav>
        <ul className="drawer-list">
          <li className="drawer-list-item">
            <div className="drawer-list-item-icon">
              <IconMoon size={30} />
            </div>
            <div className="drawer-list-item-text">
              <Link
                className="drawer-list-item-name"
                href="/svg-moon"
              >Moon Phase</Link>
              {showDescription && <p>SVG element that illustates all phases of the moon.</p>}
            </div>
          </li>
          <li className="drawer-list-item">
            <div className="drawer-list-item-icon">
              <IconSemicircle size={30} />
            </div>
            <div className="drawer-list-item-text">
              <Link
                className="drawer-list-item-name"
                href="/svg-semicircle"
              >Semicircle</Link>
              {showDescription && <p>SVG component that draws a percentage-based semicircle.</p>}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
