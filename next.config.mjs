/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as static HTML for easy hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
