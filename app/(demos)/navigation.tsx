import React from 'react'

import Link from 'next/link'
import { IconMoon } from '@/icons/moon'
import { IconSemicircle } from '@/icons/semicircle'

export function Navigation () {
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
              <p>SVG element that illustates all phases of the moon.</p>
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
              <p>SVG component that draws a percentage-based semicircle.</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
