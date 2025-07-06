/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'ALLOWALL',
        },
        {
          key: 'Content-Security-Policy',
          value: "frame-ancestors 'self' https://discord.com",
        },
      ],
    },
  ],
}

module.exports = nextConfig
