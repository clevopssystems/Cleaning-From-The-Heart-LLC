import type { NextConfig } from "next";

// Security headers applied to every response.
// next/font/google self-hosts fonts at build time, so no external font CDN is needed.
// hCaptcha needs frame-src + connect-src + script-src for its widget iframe.
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Enforce HTTPS for 2 years, include subdomains, allow preload list submission.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Prevent this site from being embedded in iframes (clickjacking protection).
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Stop browsers from MIME-sniffing the response content-type.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Only send the origin (no path/query) as the Referer on cross-origin requests.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Disable browser features not needed by this site.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  {
    // Content Security Policy.
    // unsafe-inline is required for Next.js hydration scripts and Tailwind inline styles.
    // hcaptcha.com domains are needed for the CAPTCHA widget.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://hcaptcha.com https://*.hcaptcha.com",
      "style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "font-src 'self' data:",
      "img-src 'self' blob: data: https:",
      "media-src 'self'",
      "connect-src 'self' https://hcaptcha.com https://*.hcaptcha.com",
      "frame-src https://hcaptcha.com https://*.hcaptcha.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (smallest), fall back to WebP
    formats: ["image/avif", "image/webp"],

    // Only generate widths the UI actually requests via `sizes` props.
    // Fewer variants = less disk/memory pressure on the image optimization server.
    deviceSizes: [640, 750, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 640],

    // Cache optimized images for 60 days in production.
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // Compress responses (enabled by default in Next.js but explicit here for documentation)
  compress: true,

  async headers() {
    return [
      {
        // Apply security headers to all routes.
        source: "/:path*",
        headers: securityHeaders,
      },
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              // Cache public media (videos, images) for 7 days (production only).
              source: "/media/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=604800, stale-while-revalidate=86400",
                },
              ],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
