'use client'

import { ComponentProps, isValidElement, ReactElement, ReactNode, useEffect, useState } from 'react'
import { readWholeNumber } from '@/lib/read/whole-number'
import { SvgSemicircle } from '@/svg/semicircle'

export interface PieChartProps extends ComponentProps<'div'> {
  children : ReactNode,
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
  const [ directDescendants, setDirectDescendants ] = useState<ReactNode>([])

  useEffect(() => {
    let nodes : ReactElement[]
    if (children && Array.isArray(children)) {
      nodes = children
    } else if (children && isValidElement(children)) {
      nodes = [children]
    } else {
      nodes = []
    }

    const isSlice = (aught : any) => (
      aught &&
      typeof aught.type === 'function' &&
      aught.type.name === 'Slice' &&
      typeof aught.props.value === 'number'
    )

    // Recursive array reducer to determine total.
    const totalReducer = (acc : number, node : ReactElement) : number => {
      if (Array.isArray(node)) {
        return node.reduce(totalReducer, acc)
      } else if (isSlice(node)) {
        return acc + node.props.value
      } else {
        return acc
      }
    }

    // Recursive array reducer to rewrite children
    let start = 0
    let index = -1
    const total = nodes.reduce(totalReducer, 0)
    const childrenReducer = (acc : ReactElement[], node : ReactElement) : ReactElement[] => {
      index++
      if (Array.isArray(node)) {
        console.log('Reduce A', node)
        return node.reduce(childrenReducer, acc)
      } else if (isSlice(node)) {
        console.log('Reduce B', node)
        const { value, ...atts } = node.props
        const percent = (value * 100) / total
        const stop = percent + start
        acc.push((
          <SvgSemicircle
            key={index}
            {...atts}
            cx={cx}
            cy={cy}
            r={r - inset}
            start={start}
            stop={stop}
            value={value}
          />
        ))
        start = stop
        return acc
      } else {
        console.log('Reduce C', node)
        acc.push(node)
        return acc
      }
    }

    setDirectDescendants(nodes.reduce(childrenReducer, []))
  }, [children])

  return (
    <svg
      width={d}
      height={d}
      viewBox={viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {inset > 0 && <SvgSemicircle cx={cx} cy={cx} r={r} start={0} stop={100} />}
      {directDescendants}
    </svg>
  )
}
