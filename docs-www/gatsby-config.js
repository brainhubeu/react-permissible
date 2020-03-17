'use strict';

const path = require('path');
const pluginConfigFactory = require('@brainhubeu/gatsby-docs-kit/plugins');

module.exports = {
  siteMetadata: {
    title: 'react-permissible Docs',
    description: 'Making the permission management for React components easier',
    image: 'https://cdn-images-1.medium.com/max/1200/1*CLUFZFaXF6NG27NA3d_JkQ.jpeg',
    url: 'https://brainhubeu.github.io/react-permissible',
    type: 'article',
    siteName: 'react-permissible Docs',
    githubUrl: 'https://github.com/brainhubeu',
  },

  // URL prefix on production environment. For more info see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: process.env.PATH_PREFIX || ' ',

  plugins: [
    ...pluginConfigFactory({
      config: `${__dirname}/gatsby-docs-kit.yml`,
      resources: path.resolve(__dirname, '../docs'),
    }),
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-62818184-6',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        cookieDomain: 'brainhubeu.github.io',
      },
  ],
};
