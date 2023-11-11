/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "drive.google.com" },
      { hostname: "random.imagecdn.app" },
      { hostname: "googleusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
