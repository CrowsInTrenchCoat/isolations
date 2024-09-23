import { ComponentProps, isValidElement, ReactElement, useEffect, useState } from 'react'
import { readWholeNumber } from '@/lib/read/whole-number'
import { SliceProps } from '@/svg/pie-chart'
import { SvgSemicircle, SvgSemicircleProps } from '@/svg/semicircle'

export type PieChartChild = ReactElement<SliceProps> | ReactElement<SliceProps>[]

export interface PieChartProps extends ComponentProps<'div'> {
  children : PieChartChild,
  diameter : number,
  padding? : number,
  inset? : number,
}

export function PieChart (props : PieChartProps) {
  const { children, diameter, inset: _inset, padding } = props

  const cx = 0
  const cy = 0
  const d = readWholeNumber(diameter)
  const p = readWholeNumber(padding)
  const inset = _inset && _inset > 0 ? _inset : 0
  const r = (d / 2) - p
  const viewBox = `${d/2 * -1} ${d/2 * -1} ${d} ${d}`

  const [ shapeProps, setShapeProps ] = useState<SvgSemicircleProps[]>([])

  useEffect(() => {
    let nodes : ReactElement<SliceProps>[]
    if (children && Array.isArray(children)) {
      nodes = children
    } else if (children && isValidElement(children)) {
      nodes = [children]
    } else {
      nodes = []
    }

    let total = 0
    const itemProps = []
    for (const node of nodes) {
      const { props : { value, ...atts } } = node
      if (typeof value !== 'number' || !(value > 0)) {
        console.error('Slice must have a value props that is a positive number.')
        break
      }
      total += value
      itemProps.push({ value, ...atts })
    }

    let start = 0
    const nextShapeProps : SvgSemicircleProps[] = []
    for (const index in itemProps) {
      const item = itemProps[index]
      const { value, ...atts } = item
      const percent = (value * 100) / total
      const stop = percent + start
      nextShapeProps.push({ cx, cy, r : r - inset, start, stop, ...atts })
      start = stop
    }

    setShapeProps(nextShapeProps)
  }, [children])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={d}
      height={d}
      viewBox={viewBox}
    >
      {inset > 0 && <SvgSemicircle cx={cx} cy={cx} r={r} start={0} stop={100} />}
      {shapeProps.map((props, index) => {
        return <SvgSemicircle key={index} {...props} />
      })}
    </svg>
  )
}
