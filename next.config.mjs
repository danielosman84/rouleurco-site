/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-first by default; no remote image domains needed yet.
  // Add `unifiedvehiclehire.co.uk` or similar here later if cross-linking real images.
  images: {
    remotePatterns: [],
  },

  poweredByHeader: false,
  reactStrictMode: true,

  // Parked pages — lead generation is paused during the stealth/brand-awareness
  // phase, so the pricing and (UVH) lead-generation pages are unpublished by
  // redirecting them to the register-interest form. The page files are kept
  // intact under app/ so these can be switched back on by removing the redirect.
  // `permanent: false` (307) keeps them recoverable without poisoning caches.
  async redirects() {
    return [
      { source: "/pricing", destination: "/register-interest", permanent: false },
      { source: "/lead-generation", destination: "/register-interest", permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // HSTS — only emitted in production, Vercel handles TLS termination.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Stops other sites iframing rouleurco.com. Doesn't affect us
          // iframing GHL (the contact form embed continues to work).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
