/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  images: { domains: ["localhost"] },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
};

module.exports = nextConfig;
