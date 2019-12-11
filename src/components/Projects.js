import React, { Component } from "react"
import billing from "../images/billing.png"
import styles from "../css/projects.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { find } from "lodash"
import { Helmet } from "react-helmet"
import projectsMeta from "../images/projects-meta.png"


const Projects = ({ projects }) => {
  const project = projects.map(function(projects) {
    const projectInfo = projects.node.frontmatter;
    // const node = find(nodes, {node: {relativePath: projects.image}})
    return(
    <div className={styles.container} key={projects.name}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta property="og:title" content="Pete DeJoy | Projects"/>
        <meta property="og:description" content="Personal and professional projects that I've worked on. Mostly podcasting and programming."/>
        <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${projectsMeta}`} />
        <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/projects`} />
        <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${projectsMeta}`} />
        <meta name="twitter:card" content='summary' />
      </Helmet>
        <Link to={`/projects/${projectInfo.slug}`}>
          <Image fluid={projectInfo.image.childImageSharp.fluid} />
          <div className={styles.overlay}>
            <div className={styles.text}>
                {projectInfo.title}
            </div>
            {/* <div className={styles.subtext}>
              {projectInfo.description}
            </div> */}
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
