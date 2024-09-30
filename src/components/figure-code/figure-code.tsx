import { ComponentPropsWithoutRef } from 'react'
import { Figure } from '../figure'
import './figure-code.scss'

interface FigureCodeProps extends ComponentPropsWithoutRef<'figure'> {
  caption?: 'string'
}

export function FigureCode (props : FigureCodeProps) {
  const { caption, children, ...atts } = props
  return (
    <Figure {...atts} type="code">
      <Figure.Body>{children}</Figure.Body>
      <Figure.Foot isCaption={true}>{caption}</Figure.Foot>
    </Figure>
  )
}
