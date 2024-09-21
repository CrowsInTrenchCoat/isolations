import { SvgMoonCircle } from '@/svg/moon-circle/moon-circle'

export interface SvgArtboardProps {
  diameter : number,
  border : number,
  squishLeft : number,
  squishRight : number,
}

export function SvgArtboard (props : SvgArtboardProps) {
  const { border, diameter, squishLeft, squishRight } = props

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgMoonCircle
        size={diameter}
        fill="black"
      />
      <SvgMoonCircle
        inset={border}
        size={diameter}
        squishLeft={squishLeft}
        squishRight={squishRight}
        fill="hotpink"
      />
    </svg>
  )
}
