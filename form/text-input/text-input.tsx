import { ComponentPropsWithoutRef, useId } from 'react'

export interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  label : string,
  value : string,
}

export function TextInput (props : TextInputProps) {
  const { label, value, ...atts } = props
  const inputId = useId()
  return (
    <>
      <div className="text-input">
        <label htmlFor={inputId}>{label}</label>
        <input
          id={inputId}
          type="text"
          value={value} {...atts}
        />
      </div>
    </>
  )
}
