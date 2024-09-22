import { SVGProps } from 'react'
import { ClosedInterval } from '@/lib/interval'

/**
 * @param size A positive integer representing the height
 *   and width of the SVG.
 * @param squishLeft A number between 0 and 100 representing
 *   the percentage that the circle will be squished from
 *   the left.
 * @param squishRight A number between 0 and 100
 *   representing the percentage that the circle will be
 *   squished from the right.
 * @param inset A whole number representing the number of
 *   pixles to offset the circle from all sides realtive to
 *   size.
 * @returns string The `d` attribute of an SVG element.
 */
interface SvgMoonCircleProps extends SVGProps<SVGPathElement>{
  size: number,
  squishLeft?: number,
  squishRight?: number,
  inset?: number
}

export function SvgMoonCircle (props : SvgMoonCircleProps) {
  const { inset: initialInset, size, squishLeft, squishRight, ...atts } = props

  const inset = initialInset ?? 0

  // Multiplier
  const multiplier = 22.4

  // Circle Range
  // This represents the diameter of the circle that
  // contains our derivitive shape.
  const edge = new ClosedInterval(inset, size - inset)

  // Range for cubic bezier handle (control points)
  // Our circle is constructed from a series of four cubic
  // bezier curves. It is a centered subrange of the diameter.
  const handleRange = new ClosedInterval(
    edge.percent(multiplier),
    edge.percent(100 - multiplier)
  )

  // Point Mutations
  // Change the positions of the left and right-most points
  // of the circle allowing for it to "squish" horizontally,
  // Dynamic X coordinates derived from "squish" arguments.
  const custom = {
    l: edge.percent(squishLeft ?? 0),
    r: edge.percent(100 - (squishRight ?? 0)),
  }

  // Control Point Mutations
  // While the circle has a total of 8 control points, we
  // only need to calculate 4 of them because the remaining
  // 4 are mirror images.
  const handle = {
    t: handleRange.min,
    r: edge.translate(custom.r, handleRange),
    b: handleRange.max,
    l: edge.translate(custom.l, handleRange),
  }

  const t = {
    p1 : { x: handle.r, y: edge.min },
    p2 : { x: custom.r, y: handle.t },
    p3 : { x: custom.r, y: edge.mid },
  }
  const r = {
    p1 : { x: custom.r, y: handle.b },
    p2 : { x: handle.r, y: edge.max },
    p3 : { x: edge.mid, y: edge.max },
  }
  const b = {
    p1 : { x: handle.l, y: edge.max },
    p2 : { x: custom.l, y: handle.b },
    p3 : { x: custom.l, y: edge.mid },
  }
  const l = {
    p1 : { x: custom.l, y: handle.t },
    p2 : { x: handle.l, y: edge.min },
    p3 : { x: edge.mid, y: edge.min },
  }

  const d = ''
    + `M ${l.p3.x} ${l.p3.y} `
    + `C ${t.p1.x} ${t.p1.y} ${t.p2.x} ${t.p2.y} ${t.p3.x} ${t.p3.y} `
    + `C ${r.p1.x} ${r.p1.y} ${r.p2.x} ${r.p2.y} ${r.p3.x} ${r.p3.y} `
    + `C ${b.p1.x} ${b.p1.y} ${b.p2.x} ${b.p2.y} ${b.p3.x} ${b.p3.y} `
    + `C ${l.p1.x} ${l.p1.y} ${l.p2.x} ${l.p2.y} ${l.p3.x} ${l.p3.y} `
    + `Z`

  return <path d={d} {...atts} />
}
