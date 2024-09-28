import React from 'react'

interface SvgProps {
  fill : string,
  radius : number,
  stroke? : string,
}

interface SvgFigureCubicCircle extends SvgProps {
  title: string
}

export function FigureCubicCircle (props : SvgFigureCubicCircle) {
  const { fill, radius, stroke, title, ...atts } = props
  return (
    <figure {...atts}>
      <Svg fill={fill} radius={radius} stroke={stroke} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export function Svg (props : SvgProps) {
  const { fill, radius, stroke } = props
  const r = {
    handle: 1.25,
    point: 3.5
  }
  return (
    <svg
      width={radius}
      height={radius}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="50" cy="50" r="44" fill={fill} stroke={stroke} />
        <g fill={stroke} stroke={stroke}>
          <g>
            <circle cx="24" cy="6" r={r.handle} />
            <circle cx="76" cy="6" r={r.handle} />
            <line x1="24" y1="6" x2="76" y2="6" />
          </g>
          <g>
            <circle cx="24" cy="94" r={r.handle} />
            <circle cx="76" cy="94" r={r.handle} />
            <line x1="24" y1="94" x2="76" y2="94" />
          </g>
          <g>
            <circle cx="6" cy="24" r={r.handle} />
            <circle cx="6" cy="76" r={r.handle} />
            <line x1="6" y1="24" x2="6" y2="76" />
          </g>
          <g>
            <circle cx="94" cy="24" r={r.handle} />
            <circle cx="94" cy="76" r={r.handle} />
            <line x1="94" y1="24" x2="94" y2="76" />
          </g>
        </g>
        <g fill="#fff" stroke={stroke}>
          <circle cx="50" cy="6" r={r.point}><title>Top</title></circle>
          <circle cx="94" cy="50" r={r.point}><title>Right</title></circle>
          <circle cx="50" cy="94" r={r.point}><title>Bottom</title></circle>
          <circle cx="6" cy="50" r={r.point}><title>Left</title></circle>
        </g>
      </g>
    </svg>
  )
}
