import { ComponentPropsWithoutRef, useId } from 'react'

interface NumberRangeInputProps extends ComponentPropsWithoutRef<'input'> {
  label : string,
  value : number,
}

export function NumberRangeInput (props : NumberRangeInputProps) {
  const { label, value, ...atts } = props
  const rangeId = useId()
  const numberId = useId()
  return (
    <>
      <div className="number-range-input">
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
