/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  resolveJsonModule: true,
  esModuleInterop: true,
};

module.exports = nextConfig;