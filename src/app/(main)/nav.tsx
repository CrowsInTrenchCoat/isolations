import React from 'react'

import { IconMoon } from '@/icons/moon'
import { IconSemicircle } from '@/icons/semicircle'
import { IconPieChart } from '@/icons/pie-chart'
import { NavItem } from './nav-item'

interface NavigationProps {
  showDescription? : boolean,
}

export function Navigation (props : NavigationProps) {
  const { showDescription: _showDescription } = props
  const showDescription = _showDescription ?? true
  const iconSize = 30

  return (
    <div
      id="isolation-navigation"
      className="drawer"
    >
      <nav>
        <ul className="drawer-list">
          <NavItem
            heading="Moon Phase"
            href="/svg/moon-phase"
            icon={<IconMoon size={iconSize} />}
            copy="React component that illustates all phases of the moon in SVG."
            showCopy={showDescription}
          />
          <NavItem
            heading="Semicircle"
            href="/svg/semicircle"
            icon={<IconSemicircle size={iconSize} />}
            copy="React component that draws an SVG semicircle."
            showCopy={showDescription}
          />
          <NavItem
            heading="Pie Chart"
            href="/svg/pie-chart"
            icon={<IconPieChart size={iconSize} inset={1.5} />}
            copy="React component that draws an SVG pie chart."
            showCopy={showDescription}
          />
        </ul>
      </nav>
    </div>
  )
}
