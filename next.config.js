/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
};