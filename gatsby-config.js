require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://store.gatsbyjs.org',
    title: 'Gatsby Store',
    description: 'Get Gatsby Swag!'
  },
  plugins: [
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-shopify2',
    //   options: {
    //     shopName: 'gatsby-swag',
    //     accessToken: '9aa73c089d34741f36edbe4d7314373a'
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Store',
        short_name: 'Gatsby Store',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'lesoukdemaissa.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.CLIENT_ID,
          wpcom_user: process.env.WPCOM_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD
        },
        verboseOutput: false
      }
    }
  ]
};
