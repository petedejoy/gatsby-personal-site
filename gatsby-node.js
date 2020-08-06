exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx(filter: {frontmatter: {type: {eq: "blog"}}}) {
        totalCount
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: `/writing/${slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        slug: slug
      }
    })
  })
  const {
    data: {
      allMdx: { edges: projects },
    },
  } = await graphql(`
    {
      allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
        totalCount
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
    
    `)
  projects.forEach(({ node }) => {
    console.log(node);
    const { slug } = node.frontmatter
    createPage({
      path: `projects/${slug}`,
      component: require.resolve("./src/templates/project-template.js"),
      context: {
        slug: slug
      }
    })
  })
}

