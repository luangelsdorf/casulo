/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'casulo.pet']
  },
  sassOptions: {
    logger: {
      warn: message => console.warn(message),
      debug: message => console.log(message),
    }
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            replaceAttrValues: { 'white': 'currentColor' }
          }
        }
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@icons': path.resolve(__dirname, 'public/images/icons/ui')
    }

    return config;
  }
}

module.exports = nextConfig