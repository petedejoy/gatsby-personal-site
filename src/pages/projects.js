import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const getProjects = graphql`
  query Projects {
    allProjectsJson {
      edges {
        node {
          projects {
            name
            description
            image
            href
          }
        }
      }
    }
  }
`

export default () => {
  const response = useStaticQuery(getProjects)
  const projects = response.allProjectsJson.edges[0].node.projects
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  )
}
