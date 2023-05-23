/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'lh5.googleusercontent.com',
      'lh3.googleusercontent.com',
      'upload.wikimedia.org'
    ]
  }
};

module.exports = nextConfig;
