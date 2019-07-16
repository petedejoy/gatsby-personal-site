import React from "react"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
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
