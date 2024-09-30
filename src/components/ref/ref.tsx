import { ComponentPropsWithoutRef } from 'react'

interface RefProps extends ComponentPropsWithoutRef<'a'> {
  by : string,
  date? : string,
  children: string
}
export function Ref (props : RefProps) {
  const { by, children, date, ...atts } = props

  return (
    <span className="ref">
      <a {...atts}>{children}</a>
      {by.trim().length > 0 && (
        <span className="ref-by">{` - ${by}`}</span>
      )}
      {date && date.trim().length > 0 && (
        <span className="ref-date">{` (${date})`}</span>
      )}
    </span>
  )
}
