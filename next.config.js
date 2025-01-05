/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            loaders: {
                // Configure other loaders if needed
            },
        },
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["localhost"],
        formats: ["image/webp"],
    },
};

module.exports = nextConfig;
