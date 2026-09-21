/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spacevisionlabs.com',
      },
      {
        protocol: 'https',
        hostname: 'ajithhariharan.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'productimages.withfloats.com',
      },
    ],
  },
};

export default nextConfig;
