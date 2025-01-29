// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add the domain here
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  webpack: (config: { cache: boolean; }) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
