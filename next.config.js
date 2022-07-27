/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            unoptimized: true
        }
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    swcMinify: true,
    reactStrictMode: true,
}

module.exports = nextConfig
