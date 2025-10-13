/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // ✅ Required for static export to handle Next.js Image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iili.io', // freeimage.host direct links commonly resolve here
      },
      {
        protocol: 'https',
        hostname: 'freeimage.host', // just in case your direct link stays on this domain
      },
    ],
  },
};

module.exports = nextConfig;