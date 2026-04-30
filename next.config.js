const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This explicitly allows your Codespace preview to connect
  allowedDevOrigins: ['127.0.0.1', '10.0.2.54', 'localhost'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        pathname: '/**',
      },
    ],
  },
turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(wav|mp3|ogg|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPWA(nextConfig);
