import { ReactNode } from 'react'

export interface NavItemInterface {
  name: string,
  href: string,
  icon: ReactNode | null,
  copy: string,
}
