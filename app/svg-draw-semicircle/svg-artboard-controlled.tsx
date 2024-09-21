import { ChangeEvent, useId, useState } from 'react'
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

  const rangeInputId = 'percentRange' + useId()
  const numberInputId = 'percentNumber' + useId()

  return (
    <div className="box">
      <SvgArtboard
        diameter={diameter}
        padding={padding}
        percent={percent}
      />
      <div className="actions">
        <label
          className="screen-reader-only"
          htmlFor={rangeInputId}
        >Percent (slider)</label>
        <input
          id={rangeInputId}
          type="range"
          min="0"
          max="100"
          onChange={handleChangePercent}
          value={percent}
        />
        <label
          className="screen-reader-only"
          htmlFor={numberInputId}
        >Percent (number)</label>
        <input
          id={numberInputId}
          type="number"
          min="0"
          max="100"
          onChange={handleChangePercent}
          value={percent}
        />
      </div>
    </div>
  )
}
