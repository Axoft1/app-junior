/** @type {import('next').NextConfig} */
// const nextConfig = {
//   "/": { page: "/" },
//   reactStrictMode: true,
//   images: { domains: ["localhost"] },
//   env: {
//     APP_URL: process.env.REACT_APP_URL,
//     APP_ENV: process.env.REACT_APP_ENV,
//   },
// };
const debug = process.env.REACT_APP_ENV !== "production";
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
    }
  },
  reactStrictMode: true,
  images: { domains: ["localhost"] },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
  // assetPrefix: `${!debug} ? 'https://anotherplanet-io.github.io/Next-React-Components/' : "`,
};