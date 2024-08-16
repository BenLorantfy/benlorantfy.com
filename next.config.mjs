import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'imgs.xkcd.com'],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
