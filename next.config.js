/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/codebypranav.github.io' : '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/codebypranav.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/codebypranav.github.io' : '',
  trailingSlash: true,
}

module.exports = nextConfig