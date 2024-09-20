'use client'

import React, { ChangeEvent, useState } from 'react'
import { Svg } from './svg'

import './style.css'

export default function SvgDrawSemicircle () {
  const [ percent, setPercent ] = useState<number>(0)

  function handleChangePercent (event : ChangeEvent<HTMLInputElement>) {
    const nextPercent = parseFloat(event.target.value)
    setPercent(nextPercent)
  }

  return (
    <div>
      <main>
        <h2>SVG Semicircle</h2>
        <p>
          Draw an <abbr title="Scalable Vector Graphics">SVG</abbr>{' '}
          semicircle path at a given percentage.
        </p>
        <div className="box">
          <Svg diameter={300} padding={20} percent={percent} />
          <div className="actions">
            <input
              id="range"
              type="range"
              min="0"
              max="100"
              onChange={handleChangePercent}
              value={percent}
            />
            <input
              id="percent"
              type="number"
              min="0"
              max="100"
              onChange={handleChangePercent}
              value={percent}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
