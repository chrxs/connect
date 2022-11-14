const path = require("path");

module.exports = {
  siteMetadata: {
    title: `connect`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-theme-connect-core",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules", "gatsby-theme-connect-core", "src"),
          path.join(__dirname, "../", "gatsby-theme-connect-core", "src"),
        ],
      },
    },
  ],
};
