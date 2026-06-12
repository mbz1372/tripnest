/** @type {import('next').NextConfig} */
const nextConfig={images:{remotePatterns:[{protocol:'https',hostname:'images.unsplash.com'},{protocol:'https',hostname:'images.pexels.com'}]},eslint:{ignoreDuringBuilds:false},typescript:{ignoreBuildErrors:false}};
export default nextConfig;
