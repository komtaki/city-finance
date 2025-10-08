import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
