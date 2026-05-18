/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://rouleurco.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // Pages we deliberately keep out of search engines.
  exclude: ["/thank-you", "/404"],

  changefreq: "weekly",
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
    ],
    additionalSitemaps: [
      "https://rouleurco.com/sitemap.xml",
    ],
  },

  // Per-URL priority hints — flagship pages get a slight boost.
  transform: async (config, path) => {
    const flagship = ["/", "/lead-generation", "/register-interest"];
    const highValue = ["/pricing", "/features", "/how-it-works", "/compare", "/contact"];

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
