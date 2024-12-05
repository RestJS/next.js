/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
