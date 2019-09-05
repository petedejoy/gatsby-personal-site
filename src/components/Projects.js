import React, { Component } from "react"
import billing from "../images/billing.png"
import styles from "../css/projects.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { find } from "lodash"


const Projects = ({ projects }) => {
  const project = projects.map(function(projects) {
    const projectInfo = projects.node.frontmatter;
    // const node = find(nodes, {node: {relativePath: projects.image}})
    return(
    <div className={styles.container} key={projects.name}>
        <Link to={`/projects/${projectInfo.slug}`}>
          <Image fluid={projectInfo.image.childImageSharp.fluid} />
          <div className={styles.overlay}>
            <div className={styles.text}>
                {projectInfo.title}
              <hr />
            </div>
            <div className={styles.subtext}>
              {projectInfo.description}
            </div>
          </div>
        </Link>
      </div>)
  })
  return (
    <div id="projects">
      <div className="row"></div>
      <h1 className="intro">Some of my work.</h1>
      {project}
      </div>
  )
}

export default Projects
