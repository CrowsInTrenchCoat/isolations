'use client'

import React from 'react'
import Description from './page-description.mdx'
import { SvgArtboardControlled } from './svg-artboard-controlled'

import './style.scss'

export default function Page () {
  return (
    <>
      <h1>SVG Semicircle</h1>
      <SvgArtboardControlled diameter={300} padding={20} percent={0} />
      <div className="description">
        <Description />
      </div>
    </>
  )
}
