/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://maximhordiienko.vercel.app',
  generateRobotsTxt: true, // Optionally generate a robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/blog'], // Exclude specific pages
};
