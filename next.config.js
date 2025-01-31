/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/codebypranav.github.io',
  assetPrefix: '/codebypranav.github.io/',
}

module.exports = nextConfig 