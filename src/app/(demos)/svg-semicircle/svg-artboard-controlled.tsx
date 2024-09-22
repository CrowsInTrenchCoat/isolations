'use client'
import { ChangeEvent, useState } from 'react'
import { NumberRangeInput } from '@/form/number-range-input'
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
    <div className="figure">
      <div className="figure-subject">
        <SvgArtboard
          diameter={diameter}
          padding={padding}
          percent={percent}
        />
      </div>
      <div className="figure-actions">
        <NumberRangeInput
          label="Percent"
          min="0"
          max="100"
          onChange={handleChangePercent}
          value={percent}
        />
      </div>
    </div>
  )
}
