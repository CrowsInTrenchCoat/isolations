import rehypeHighlight from 'rehype-highlight'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/isolations',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight]
  }
})

export default withMDX(nextConfig)
