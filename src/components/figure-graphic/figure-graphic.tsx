import { ComponentPropsWithoutRef } from 'react'
import { Figure } from '../figure'
import './figure-graphic.scss'

interface FigureGraphicProps extends ComponentPropsWithoutRef<'figure'> {
  caption?: 'string'
}

export function FigureGraphic (props : FigureGraphicProps) {
  const { caption, children, ...atts } = props
  return (
    <Figure {...atts} type="graphic">
      <Figure.Body>{children}</Figure.Body>
      <Figure.Foot isCaption={true}>{caption}</Figure.Foot>
    </Figure>
  )
}
