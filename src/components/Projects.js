import React, { Component } from "react"
import billing from "../images/billing.png"
import styles from "../css/projects.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { find } from "lodash"


const Projects = ({ projects }) => {
  const getImage = graphql`
  query getImage{
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        relativePath
        childImageSharp{
          fluid(maxWidth:1600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
  }
  `
const response = useStaticQuery(getImage)
const nodes = response.allFile.edges;
  const project = projects.map(function(projects) {
    const node = find(nodes, {node: {relativePath: projects.image}})
    return(
    <div className={styles.container}>
        <a href={projects.href}>
          <Image fluid={node.node.childImageSharp.fluid} />
          <div className={styles.overlay}>
            <div className={styles.text}>
                {projects.name}
              <hr />
            </div>
            <div className={styles.subtext}>
              {projects.description}
            </div>
          </div>
        </a>
      </div>)
  })
  return (
    <div id="projects">
      <div className="row"></div>
      <h1 className={styles.intro}>Some of my work.</h1>
      {project}
      </div>
  )
}

export default Projects
