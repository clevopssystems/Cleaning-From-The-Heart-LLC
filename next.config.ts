import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (smallest), fall back to WebP
    formats: ["image/avif", "image/webp"],

    // Only generate widths the UI actually requests via `sizes` props.
    // Fewer variants = less disk/memory pressure on the image optimization server.
    deviceSizes: [640, 750, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 640],

    // Cache optimized images for 60 days (default is 60 s in dev, 60 days prod — explicit for clarity)
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // Compress responses (enabled by default in Next.js but explicit here for documentation)
  compress: true,

  // Add long-lived cache headers for static assets served from /_next/static/
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public media (videos, images) for 7 days
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
