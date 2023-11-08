const ms = require('ms');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // }
    ],
  },
  headers() {
    return [
      {
        source: '/((?!_next|favicon.ico).*)',
        missing: [
          {
            type: 'header',
            key: 'Next-Router-Prefetch',
          },
        ],
        headers: [
          {
            key: 'Cache-Control',
            value: [
              `s-maxage=` + ms('1d') / 1000,
              `stale-while-revalidate=` + ms('1y') / 1000,
            ].join(', '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
