/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'linkedin.com'],
    },
    trailingSlash: true,
    output: 'export',
    distDir: 'dist',
    assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
}

module.exports = nextConfig
