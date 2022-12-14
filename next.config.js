/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
