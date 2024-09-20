import React, { ReactElement, useEffect, useState } from 'react'

import { readWholeNumber } from './read-whole-number'
import { SvgCircle, SvgCircleProps } from './svg-circle'
import { SvgSemicirclePath } from './svg-semicircle-path'
import { calcCircularCoordinates } from './calc-circular-coordinates'

export interface SvgProps {
  diameter : number,
  padding? : number,
  percent : number,
}

type DotArray = ReactElement<SvgCircleProps>[]

export function Svg (props : SvgProps) {
  const { diameter, percent, padding } = props
  const [ dots, setDots ] = useState<DotArray>([])

  const center = { x: 0, y: 0 }
  const d = readWholeNumber(diameter)
  const p = readWholeNumber(padding)
  const radius = (d / 2) - p
  const viewBox = `${d/2 * -1} ${d/2 * -1} ${d} ${d}`

  useEffect(() => {
    const subdivisions = 50
    const nextDots : DotArray = []
    for (let i = 0; i < subdivisions; i++) {
      const percent = i * (100 / subdivisions)
      const coords = calcCircularCoordinates(percent, radius - 2, center)
      nextDots.push((
        <SvgCircle key={i} center={coords} radius={2} fill="#999" />
      ))
    }
    setDots(nextDots)
  }, [ d ])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={d}
      height={d}
      viewBox={viewBox}
    >
      {dots}
      {percent === 100
        ? <SvgCircle
            center={center}
            className="blue"
            radius={radius}
          />
        : <SvgSemicirclePath
            center={center}
            className="blue"
            range={[ 0, percent ]}
            percent={percent}
            radius={radius}
          />
      }
    </svg>
  )
}
