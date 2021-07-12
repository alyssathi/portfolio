/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Alyssa Thi Portfolio",
    titleTemplate: "Frontend Web Developer",
    description:
      "The gateway to all things Alyssa, at least in terms of web development! Get contact links to projects and contact details here.",
    url: "https://www.alyssathi.dev",
    siteUrl: "https://www.alyssathi.dev", // No trailing slash allowed!
    image: "/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@lyssthi",
    author: "Alyssa Thi",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
