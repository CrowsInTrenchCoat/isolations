import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/isolations',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
