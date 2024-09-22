import React, { ReactElement, SVGProps, useEffect, useState } from 'react'

import { Svg } from '@/svg'
import { SvgSemicircle } from '@/svg/semicircle'
import { readWholeNumber } from '@/lib/read-whole-number'
import { colors } from '@/colors'

export interface SvgArtboardProps {
  diameter : number,
  padding? : number,
  percent : number,
}

type CircleProps = SVGProps<SVGCircleElement>
type Coordinates = { x : number, y : number }
type DotArray = ReactElement<CircleProps>[]

export function SvgArtboard (props : SvgArtboardProps) {
  const { diameter, percent, padding } = props
  const [ dots, setDots ] = useState<DotArray>([])

  const center = { x: 0, y: 0 }
  const d = readWholeNumber(diameter)
  const p = readWholeNumber(padding)
  const radius = (d / 2) - p
  const viewBox = `${d/2 * -1} ${d/2 * -1} ${d} ${d}`

  const calcDotPoint = (percent : number) : Coordinates =>  {
    percent = percent - 25 // Move zero point from 3 o'clock to 12 o'clock.
    const angle = (percent - 0) * (360 - 0) / (100 - 0) + 0
    const radians = (Math.PI / 180) * angle;
    const coords = {
      x: center.x + (radius - 2) * Math.cos(radians),
      y: center.y + (radius - 2) * Math.sin(radians),
    }
    return coords
  }

  useEffect(() => {
    const subdivisions = 50
    const nextDots : DotArray = []
    for (let i = 0; i < subdivisions; i++) {
      const percent = i * (100 / subdivisions)
      const { x ,y } = calcDotPoint(percent)
      nextDots.push((
        <circle key={i} cx={x} cy={y} r={2} fill="#999" />
      ))
    }
    setDots(nextDots)
  }, [ d ])

  return (
    <Svg width={d} height={d} viewBox={viewBox}>
      {dots}
      <SvgSemicircle
        cx={center.x}
        cy={center.y}
        fill={colors.hotpink}
        r={radius}
        start={0}
        stop={percent}
      />
    </Svg>
  )
}
