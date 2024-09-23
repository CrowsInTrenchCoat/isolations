'use client'

import { PieChart, Slice } from '@/svg/pie-chart'

interface SvgDemoProps {
  diameter: number
}

export function SvgDemo (props : SvgDemoProps) {
  return (
    <>
      <div className="figure">
        <div className="figure-subject">
          <PieChart diameter={300} >
            <Slice value={1} fill="black" />
            <Slice value={1} fill="hotpink" />
            <Slice value={1} fill="black" />
            <Slice value={1} fill="hotpink" />
          </PieChart>
        </div>
        <div className="figure-actions">

        </div>
      </div>
    </>
  )
}
