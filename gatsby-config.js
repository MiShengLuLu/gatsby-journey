/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'hello Gatsby',
    description: 'description in gatsby-node.js',
    author: 'LuLu'
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'xml',
        path: `${__dirname}/xml/`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Defaults to 100
    //     collectionTypes: ['Post']
    //   },
    // }
    {
      resolve: 'gatsby-source-mystrapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: ['Post', 'Product']
      }
    },
    'gatsby-transformer-xml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less'
  ],
}
