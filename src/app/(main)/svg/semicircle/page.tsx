import React from 'react'
import Copy from './page-copy.mdx'
import { Markdown } from '@/markdown'

export const metadata = {
  title: 'Semicircle'
}

export default function Page () {
  return (
    <>
      <Markdown>
        <Copy />
      </Markdown>
    </>
  )
}
