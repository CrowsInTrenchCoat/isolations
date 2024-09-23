import React, { ReactNode } from 'react'

import Link from 'next/link'
import { IconMoon } from '@/icons/moon'
import { IconSemicircle } from '@/icons/semicircle'
import { IconPieChart } from '@/icons/pie-chart'

interface NavigationProps {
  showDescription? : boolean,
}

export function Navigation (props : NavigationProps) {
  const { showDescription: _showDescription } = props
  const showDescription = _showDescription ?? true
  const iconSize = 30
  return (
    <div id="isolation-navigation" className="drawer">
      <nav>
        <ul className="drawer-list">
          <NavItem
            heading="Moon Phase"
            href="/moon-phase"
            icon={<IconMoon size={iconSize} />}
            copy="React component that illustates all phases of the moon in SVG."
            showCopy={showDescription}
          />
          <NavItem
            heading="Semicircle"
            href="/semicircle"
            icon={<IconSemicircle size={iconSize} />}
            copy="React component that draws an SVG semicircle."
            showCopy={showDescription}
          />
          <NavItem
            heading="Pie Chart"
            href="/pie-chart"
            icon={<IconPieChart size={iconSize} inset={1.5} />}
            copy="React component that draws an SVG pie chart."
            showCopy={showDescription}
          />
        </ul>
      </nav>
    </div>
  )
}

interface NavItemProps {
  icon : ReactNode,
  heading : string,
  href: string,
  copy : string,
  showCopy : boolean,
}

function NavItem (props : NavItemProps) {
  const { icon, heading, href, copy, showCopy } = props
  return (
    <li className="drawer-list-item">
      <div className="drawer-list-item-icon">{icon}</div>
      <div className="drawer-list-item-text">
        <Link className="drawer-list-item-name"href={href}>{heading}</Link>
        {showCopy && <p>{copy}</p>}
      </div>
    </li>
  )
}
