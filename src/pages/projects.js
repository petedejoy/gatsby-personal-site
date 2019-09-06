import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const getProjects = graphql`
{
  allMdx(filter: {frontmatter: {type: {eq: "project"}}}, sort: {order: ASC, fields: frontmatter___order}) {
    edges {
      node {
        frontmatter {
          title
          slug
          description
          link
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
  const response = useStaticQuery(getProjects)
  const projects = response.allMdx.edges
  console.log(projects)
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  )
}
