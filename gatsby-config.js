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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCJ1a5hHhPuufEtjWns0cOxV1TwmsvBy1M",
          authDomain: "blog-site-eb3d8.firebaseapp.com",
          databaseURL: "https://blog-site-eb3d8.firebaseio.com",
          projectId: "blog-site-eb3d8",
          storageBucket: "blog-site-eb3d8.appspot.com",
          messagingSenderId: "606889257413",
          appId: "1:606889257413:web:1f8fcb53a57d6d4cfc43ac",
          measurementId: "G-KQHGFM7H5E",
        }
      }
      },
    "gatsby-plugin-typescript",
    `gatsby-plugin-material-ui`,
  ],
}
