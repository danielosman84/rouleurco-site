/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.rouleurco.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // Pages we deliberately keep out of search engines.
  // /pricing and /lead-generation are parked (they redirect to /register-interest)
  // while lead generation is paused — keep them out of the sitemap.
  exclude: ["/thank-you", "/404", "/pricing", "/lead-generation"],

  changefreq: "weekly",
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/", "/pricing", "/lead-generation"],
      },
    ],
    additionalSitemaps: [
      "https://www.rouleurco.com/sitemap.xml",
    ],
  },

  // Per-URL priority hints — flagship pages get a slight boost.
  transform: async (config, path) => {
    const flagship = ["/", "/register-interest"];
    const highValue = ["/growth-check", "/features", "/how-it-works", "/compare", "/contact"];

    let priority = 0.6;
    if (flagship.includes(path)) priority = 1.0;
    else if (highValue.includes(path)) priority = 0.8;
    else if (path.startsWith("/features/")) priority = 0.7;
    else if (path === "/privacy" || path === "/terms") priority = 0.3;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
