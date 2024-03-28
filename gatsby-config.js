module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-69196237-1'
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-netlify-cms',
  ],
};