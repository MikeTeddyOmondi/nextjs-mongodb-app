/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'intasend-prod-static.s3.amazonaws.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  }
};

export default nextConfig;
