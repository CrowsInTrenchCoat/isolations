import React, { SVGProps } from 'react'

interface Coordinate {
  x : number,
  y : number
}

export interface SvgSemicircleProps extends SVGProps<SVGPathElement> {
  cx : number,
  cy : number,
  r : number,
  start: number,
  stop: number,
}

export function SvgSemicircle (props : SvgSemicircleProps) {
  const { cx, cy, d, r: radius, start, stop, ...atts } = props

  const percent = stop - start

  // We do not have anything to draw.
  if (percent === 0) {
    return null
  }

  // A full circle has been requested.
  if (percent === 100) {
    const circleAtts = atts as SVGProps<SVGCircleElement>
    return (
      <circle cx={cx} cy={cy} r={radius} {...circleAtts} />
    )
  }

  const calcPoint = (percent : number) : Coordinate =>  {
    percent = percent - 25 // Move zero point from 3 o'clock to 12 o'clock.
    const angle = (percent - 0) * (360 - 0) / (100 - 0) + 0
    const radians = (Math.PI / 180) * angle;
    const coords = {
      x: cx + radius * Math.cos(radians),
      y: cy + radius * Math.sin(radians),
    }
    return coords
  }

  const alpha = calcPoint(start)
  const omega = calcPoint(stop)
  const r = radius
  const largeArc = percent > 50 ? 1 : 0
  const sweep = 1
  const rotation = 0

  const createDataAttribute = () => {
    return ''
      + `M ${cx} ${cy} `
      + `L ${alpha.x} ${alpha.y} `
      + `A ${r} ${r} ${rotation} ${largeArc} ${sweep} ${omega.x} ${omega.y} `
      + 'Z'
  }

  const data = d ? d : createDataAttribute()

  return <path d={data} {...atts} />
}
