import React, { SVGProps } from 'react'
import { calcCircularCoordinates } from '@/lib/calc-circular-coordinates'

interface Coord {
  x : number,
  y : number
}

export interface SvgSemicircleProps extends SVGProps<SVGPathElement> {
  center : Coord,
  range : [ number, number ],
  radius : number,
}

export function SvgSemicircle (props : SvgSemicircleProps) {
  const { center, d, range, radius, ...atts } = props

  const percent = range[1] - range[0]

  const start = calcCircularCoordinates(range[0], radius, center)
  const end = calcCircularCoordinates(range[1], radius, center)
  const r = radius
  const largeArc = percent > 50 ? 1 : 0
  const sweep = 1
  const rotation = 0

  const createDataAttribute = () => {
    return ''
      + `M ${center.x} ${center.y} `
      + `L ${start.x} ${start.y} `
      + `A ${r} ${r} ${rotation} ${largeArc} ${sweep} ${end.x} ${end.y} `
      + 'Z'
  }

  const data = d ? d : createDataAttribute()

  return <path d={data} {...atts} />
}
