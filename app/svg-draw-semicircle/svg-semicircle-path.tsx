import React, { SVGProps } from 'react'

interface Coord {
  x : number,
  y : number
}

export interface SvgSemicirclePathProps extends SVGProps<SVGPathElement> {
  center : Coord,
  range : [ number, number ],
  percent : number,
  radius : number,
}

export function SvgSemicirclePath (props : SvgSemicirclePathProps) {
  const { center, d, range, percent, radius, ...atts } = props

  const start = calc(range[0], radius, center)
  const end = calc(range[1], radius, center)
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

function calc (percent : number, radius : number, center : Coord) : Coord {
  percent = percent - 25 // Set zero point to 12 o'clock.
  const angle = (percent - 0) * (360 - 0) / (100 - 0) + 0
  const radians = (Math.PI / 180) * angle;
  return {
    x: center.x + radius * Math.cos(radians),
    y: center.y + radius * Math.sin(radians),
  }
}
