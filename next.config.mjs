/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel handle Next.js natively (no static export needed)
  // This enables middleware for locale detection/redirect
  
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;
