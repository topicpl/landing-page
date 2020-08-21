/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Topic — Welcome Page`,
    siteUrl: `https://thetopic.pl`,
    description: `The platform for people with passion.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://thetopic.pl`,
        policy: [{ userAgent: "*", allow: "/" }],
        output: `/public/robots.txt`,
      },
    },
  ],
}
