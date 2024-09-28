import { SvgSemicircle } from '@/svg/semicircle'
import { colors } from '@/colors'

interface IconSemicircleProps {
  size : number,
  start?: number,
  stop?: number,
}

export function IconSemicircle (props : IconSemicircleProps) {
  const { size, start, stop } = props
  const radius = size / 2
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgSemicircle
        cx={radius}
        cy={radius}
        r={radius}
        start={0}
        stop={100}
        fill={colors.black}
      />
      <SvgSemicircle
        className="fill-background"
        cx={radius}
        cy={radius}
        r={radius - 2}
        start={0}
        stop={100}
        fill={colors.hotpink}
      />
      <SvgSemicircle
        className="fill-foreground"
        cx={radius}
        cy={radius}
        r={radius - 1}
        start={start ?? 25}
        stop={stop ?? 100}
        fill={colors.black}
      />
    </svg>
  )
}
