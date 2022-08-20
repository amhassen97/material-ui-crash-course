/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['tcproduction.blob.core.windows.net', 'images.unsplash.com', 'd2ru2mvuh5wx24.cloudfront.net', 'niagarafallsstatepark.com', 'assets.simpleviewcms.com', 's3.amazonaws.com', 'footwearnews.com'],
    },

}

module.exports = nextConfig