/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sm7zhpr4okma`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "zNiXawIJ2i9JriQsmONCt1WSzReNojDXAKPkeanqOZU",
      },
    },
    "gatsby-plugin-typescript",
    `gatsby-plugin-material-ui`,
  ],
}
