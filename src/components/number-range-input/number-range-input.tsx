import { ComponentPropsWithoutRef, CSSProperties, useId } from 'react'
import './number-range-input.scss'
import { colors as c } from '@/colors'

interface NumberRangeInputProps extends ComponentPropsWithoutRef<'input'> {
  label : string,
  value : number,
}

interface CustomVariables extends CSSProperties {
  // Default
  '--number-border-color'?: string,
  '--number-border-radius'?: string,
  '--number-border-style'?: string,
  '--number-border-width'?: string,
  '--thumb-background-color'?: string,
  '--track-background-color'?: string,
  '--track-border-color'?: string,
  '--track-border-radius'?: string,
  '--track-border-style'?: string,
  '--track-border-width'?: string,
  '--track-box-sizing'?: string,

  // Focused state
  '--focused-thumb-outline-color'?: string,
  '--focused-thumb-outline-offset'?: string,
  '--focused-thumb-outline-style'?: string,
  '--focused-thumb-outline-width'?: string,

  // Disabled state
  '--disabled-number-opacity'?: number;
  '--disabled-thumb-background-color'?: string,
  '--disabled-thumb-opacity'?: number,
  '--disabled-track-background-color'?: string,
  '--disabled-track-opacity'?: number,
}

export function NumberRangeInput (props : NumberRangeInputProps) {
  const { label, value, ...atts } = props
  const rangeId = useId()
  const numberId = useId()

  const style : CustomVariables = {
    '--number-border-color': c.black,
    '--thumb-background-color': c.black,
    '--track-border-color': c.black,
  }

  return (
    <>
      <div className="number-range-input" style={style}>
        <label
          className="number-range-input-label"
          htmlFor={rangeId}
        >{label}</label>
        <input
          className="number-range-input-slide"
          id={rangeId}
          type="range"
          value={value} {...atts}
        />
        <label
          className="number-range-input-label screen-reader-only"
          htmlFor={numberId}
        >{label}</label>
        <input
          className="number-range-input-number"
          id={numberId}
          type="number"
          value={value} {...atts}
        />
      </div>
    </>
  )
}
