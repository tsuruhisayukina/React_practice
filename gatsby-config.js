/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を探求するサイト`,
    lang: `ja`,
    siteUrl: `https://********.netlify.app`, 
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`, 
      options: {
        name: `ESSENTIALS エッセンシャルズ`, 
        short_name: `ESSENTIALS`, 
        start_url: `/`, 
        background_color: `#ffffff`, 
        theme_color: `#477294`, 
        display: `standalone`, 
        icon: `src/images/icon.png`, 
      },
    },
    `gatsby-plugin-offline`,
  ],
}
