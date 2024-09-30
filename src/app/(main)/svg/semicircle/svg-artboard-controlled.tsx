'use client'
import { ChangeEvent, useState } from 'react'
import { Figure } from '@/components/figure'
import { NumberRangeInput } from '@/components/number-range-input'
import { SvgArtboard } from './svg-artboard'

export interface SvgArtboardControlledProps {
  diameter : number,
  padding : number,
  percent : number,
}

export function SvgArtboardControlled (props : SvgArtboardControlledProps) {
  const { diameter, padding, percent: initialPercent } = props
  const [ percent, setPercent ] = useState<number>(initialPercent)

  function handleChangePercent (event : ChangeEvent<HTMLInputElement>) {
    const nextPercent = parseFloat(event.target.value)
    setPercent(nextPercent)
  }

  return (
    <Figure type="demo">
      <Figure.Head>
        <h2>Semicircle Demo</h2>
      </Figure.Head>
      <Figure.Body>
        <SvgArtboard
          diameter={diameter}
          padding={padding}
          percent={percent}
        />
      </Figure.Body>
      <Figure.Foot>
        <NumberRangeInput
          label="Percent"
          min="0"
          max="100"
          onChange={handleChangePercent}
          value={percent}
        />
      </Figure.Foot>
    </Figure>
  )
}
