/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "en.gravatar.com",
      },
    ],
  },
};

module.exports = nextConfig;
