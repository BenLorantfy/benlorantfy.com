/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'imgs.xkcd.com'],
  },
}

module.exports = nextConfig
