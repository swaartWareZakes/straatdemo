/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true, // ✅ Required for static export to handle Next.js Image
  },
};

module.exports = nextConfig;