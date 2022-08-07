/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
          'www.goodnewsfromindonesia.id',
          'nextjs-restaurant-website-cms.vercel.app',
          'imgix.cosmicjs.com'
        ],
    },
}

module.exports = nextConfig
