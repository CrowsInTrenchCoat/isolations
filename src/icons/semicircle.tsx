import { SvgSemicircle } from '@/svg/semicircle'

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
        className="fill-foreground"
        cx={radius}
        cy={radius}
        r={radius}
        start={start ?? 25}
        stop={stop ?? 100}
        fill="#bbb"
      />
    </svg>
  )
}
