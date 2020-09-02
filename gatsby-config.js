/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My Portfolio',
    description: 'A website for my personal portfolio containing my journey.',
    author: 'Christian Villamin',
    twitterUsername: '@codekcv',
    image: '/card.png',
    siteUrl: 'https://ChristianVillamin.github.io',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/images/sansfav.png',
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
