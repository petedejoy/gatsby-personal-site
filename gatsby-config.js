module.exports = {
  siteMetadata: {
    title: `Pete DeJoy`,
    description: `Personal website for Pete DeJoy, built from scratch in Gatsby.js.`,
    siteUrl: `https://petedejoy.com`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "resume",
        link: "/resume",
      },
      {
        name: "projects",
        link: "/projects",
      },
      {
        name:"music",
        link:"/music",
      },
      {
        name:"writing",
        link:"/writing",
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            class  : 'emoji-icon',
            // Select the size (available size: 16, 24, 32, 64)
            size   : 64,
            // Add custom styles
            styles : {
              display      : 'inline',
              margin       : '0',
              // 'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        },
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
          }
        },] 
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `src/content/resume`,
      },
    },
  ],
}
