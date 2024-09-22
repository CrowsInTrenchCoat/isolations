import { SvgMoonCircle } from '@/svg/moon-circle'

export function IconMoon (props : { size : number }) {
  const { size } = props
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <SvgMoonCircle
        className="fill-foreground"
        size={size}
      />
      <SvgMoonCircle
        className="fill-background"
        inset={2}
        size={size}
        squishLeft={0}
        squishRight={35}
        fill="#fff"
      />
    </svg>
  )
}
