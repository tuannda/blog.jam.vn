/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: false,
    skipTrailingSlashRedirect: true,
    distDir: 'docs'
}

module.exports = nextConfig
