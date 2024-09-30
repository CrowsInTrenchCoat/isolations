import React from 'react'
import Copy from './page-copy.mdx'
import { Markdown } from '@/markdown'

export const metadata = {
  title: 'Nested Layouts in Next.js'
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
