import { SvgSemicircle } from '@/svg/semicircle'

export function IconSemicircle (props : { size : number }) {
  const { size } = props
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
        start={25}
        stop={100}
        fill="#bbb"
      />
    </svg>
  )
}
