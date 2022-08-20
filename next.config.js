/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/countdown-timer/' : '',
  experimental: {
    images: {
      unoptimized: true,
    }
  }
}

module.exports = nextConfig
