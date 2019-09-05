import React from "react"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          author
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
      <div>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}
