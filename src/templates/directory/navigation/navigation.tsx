import { NavItem } from './navigation-item'
import { NavItemInterface } from '../types'

export interface NavigationProps {
  itemData: NavItemInterface[]
}

export function Navigation (props : NavigationProps) {
  const { itemData } = props

  return (
    <nav id="navigation">
      <ul className="drawer-list">
        {itemData.map((item, index) => {
          const { copy, href, icon, name } = item
          return (
            <NavItem
              key={index}
              heading={name}
              href={href}
              icon={icon}
              copy={copy}
              showCopy={true}
            />
          )
        })}
      </ul>
    </nav>
  )
}
