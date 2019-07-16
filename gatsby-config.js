module.exports = {
  plugins: [
    { resolve: `gatsby-mdx`,
      options:{
        gatsbyRemarkPlugins:[
          {
            resolve: `gatsby-remark-images`,
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts/`,
      },
    },
  ],
}
