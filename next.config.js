/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/lists/:slug',
        destination: '/list/:slug',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
