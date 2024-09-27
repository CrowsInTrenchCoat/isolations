'use client'

export interface SliceProps {
  className? : string,
  draggable?: boolean,
  [key: `data-${string}`] : unknown,
  hidden?: boolean,
  id? : string,
  fill?: string,
  stroke?: string,
  tabindex?: number,
  title?: string,
  value : number,
}

export function Slice (_props : SliceProps) {
  return <text>This is the output of the slice component.</text>
}
