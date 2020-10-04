/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve: ['gatsby-source-filesystem', 'gatsby-plugin-verify-brave'],
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
        token: '14a68ba80c18e5e1e1c3ca0d777698511e615595efb7cecf7825654e28dc3034',
        domain: 'keen-davinci-854e86.netlify.app'
      }
    }
  ],
}
