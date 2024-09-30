interface IconCssProps {
  size? : number,
}

export function IconCss (props : IconCssProps) {
  let { size } = props
  size =  size ?? 32
  return (
    <svg width={size} height={size} viewBox='0 0 32 32'>
      <circle className="fill-foreground" cx="16" cy="16" r="16"/>
      <path className="fill-background" d="m7.5 7.216.31 3.413h12.95l-.31 3.494H8.115l.305 3.412h11.734l-.396 4.425-3.806 1.027-.015.004-3.679-1.026-.243-2.721H8.59l.478 5.358 6.869 1.94 7.01-1.943L24.5 7.216Z"/>
    </svg>
  )
}
