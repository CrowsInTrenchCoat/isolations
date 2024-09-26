import React, { ComponentPropsWithoutRef } from 'react'
import './animated-circular-border.scss'

export interface CircleProps extends ComponentPropsWithoutRef<'span'> {}

export function Circle (props : CircleProps) {
  const { children, className, ...atts } = props
  return (
    <span className={`${className} demo-circular-icon`} {...atts}>{children}</span>
  )
}
