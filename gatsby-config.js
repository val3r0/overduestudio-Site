/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* SEO */
  siteMetadata: {
    title: "Overdue Studio",
    description: "Overdue studio is a visual design studio creating thoughtful design digitally and physically",
    url: "https://www.overduestudio.co", // No trailing slash allowed!
    image: "/social_media_preview.jpg", // Path to your image you placed in the 'static' folder
    author: "Overdue Studio"
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-plugin-styled-components`,
    options: {
        // Add any options here
      },
    },  
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-57221889-2",
        head: true,
      },
    },
  ],
}
