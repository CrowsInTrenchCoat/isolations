import React, { SVGProps } from 'react'

interface SvgCirclePropsBase extends SVGProps<SVGCircleElement> {
  center : { x : number, y : number },
}

export type SvgCircleProps = Omit<SvgCirclePropsBase, 'cx' | 'cy' | 'r'>

export function SvgCircle (props : SvgCircleProps) {
  const { center, radius, ...atts } = props
  return <circle cx={center.x} cy={center.y} r={radius} {...atts} />
}
