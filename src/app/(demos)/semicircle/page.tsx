import React from 'react'
import Copy from './page-copy.mdx'
import { Markdown } from '@/markdown'

export const metadata = {
  title: 'Page Title'
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
