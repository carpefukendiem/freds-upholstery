/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.leadconnectorhq.com" },
      { protocol: "https", hostname: "assets.cdn.filesafe.space" },
    ],
  },

  /**
   * 301s from the old GoHighLevel URLs. These preserve whatever ranking equity
   * the current pages have. Do not remove them — some of these URLs have been
   * live and indexed for years.
   */
  async redirects() {
    return [
      { source: "/u", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/fine-furniture-reupholstery-santa-barbara", destination: "/upholstery", permanent: true },
      { source: "/marine-reupholstery-santa-barbara", destination: "/marine-upholstery", permanent: true },
      { source: "/commercial-upholstery-santa-barbara", destination: "/commercial-upholstery", permanent: true },
      { source: "/commercial-upholstery", destination: "/commercial-upholstery", permanent: false },
      { source: "/outdoor-furniture-upholstery", destination: "/outdoor-upholstery", permanent: true },
    ];
  },
};

export default nextConfig;
