import React, { ReactNode, SVGProps } from 'react'

interface SvgProps extends SVGProps<SVGSVGElement> {
  children? : ReactNode,
  height : number,
  width : number,
}

export function Svg (props : SvgProps) {
  const {
    children,
    height,
    viewBox: initialViewBox,
    width,
    xmlns: initialXmlns,
    ...atts
  } = props

  const xmlns = initialXmlns ? initialXmlns : 'http://www.w3.org/2000/svg'
  const viewBox = initialViewBox ? initialViewBox : `0 0 ${width} ${height}`

  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      {...atts}
    >{children}</svg>
  )
}
