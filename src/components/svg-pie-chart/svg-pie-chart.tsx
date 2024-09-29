'use client'

import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { readWholeNumber } from '@/lib/read/whole-number'
import { SvgSemicircle } from '@/components/svg-semicircle'

export interface PieChartData {
  value: number,
  fill?: string,
  className?: string,
}

export interface PieChartProps extends ComponentProps<'div'> {
  children? : ReactNode,
  data: PieChartData[],
  diameter : number,
  padding? : number,
  inset? : number,
}

export function PieChart (props : PieChartProps) {
  const { data, diameter, inset: _inset, padding } = props
  const cx = 0
  const cy = 0
  const d = readWholeNumber(diameter)
  const p = readWholeNumber(padding)
  const inset = _inset && _inset > 0 ? _inset : 0
  const r = (d / 2) - p
  const viewBox = `${d/2 * -1} ${d/2 * -1} ${d} ${d}`
  const [ descendants, setDescendants ] = useState<ReactNode[]>([])

  useEffect(() => {
    let start = 0
    const total = data.reduce((acc, item) => acc + item.value, 0)
    const nextDescendants = data.map((item, index) => {
      const { value, ...atts } = item
      const percent = (value * 100) / total
      const stop = percent + start
      const output = (
        <SvgSemicircle
          key={index}
          {...atts}
          cx={cx}
          cy={cy}
          r={r - inset}
          start={start}
          stop={stop}
        />
      )
      start = stop
      return output
    })
    setDescendants(nextDescendants)
  }, [ data ])

  return (
    <svg
      width={d}
      height={d}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {inset > 0 && <SvgSemicircle cx={cx} cy={cx} r={r} start={0} stop={100} />}
      {descendants}
    </svg>
  )
}
