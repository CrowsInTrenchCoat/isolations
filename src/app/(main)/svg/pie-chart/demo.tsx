'use client'

import { useState } from 'react'
import { PieChart, Slice } from '@/svg/pie-chart'
import { readWholeNumber } from '@/lib/read/whole-number'

interface DemoProps {
  diameter: number
}

interface SliceData {
  value : number,
  fill : string,
}

export function Demo (props : DemoProps) {
  const diameter = readWholeNumber(props.diameter) || 300
  return (
    <>
      <div className="figure">
        <div className="figure-subject">
          <PieChart diameter={diameter} data={[
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
          ]} />
        </div>
        <div className="figure-actions">
          <button>Add slice</button>
        </div>
      </div>
    </>
  )
}
