import React, { Component } from "react"
import Columns from "react-columns"
import styles from "../css/resume.module.css"
import { useStaticQuery } from "gatsby"
import classnames from "classnames"

const Resume = ({ resume }) => {
  const getResume = graphql`
    query getResume {
      allMarkdownRemark(sort: { fields: frontmatter___title }) {
        edges {
          node {
            html
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `

  const response = useStaticQuery(getResume)
  const work = response.allMarkdownRemark.edges[4].node.html
  const affiliations = response.allMarkdownRemark.edges[2].node.html
  const education = response.allMarkdownRemark.edges[3].node.html

  return (
    <section id="resume">
      <div className="intro">A bit more about me.</div>
      <div className={classnames("row", styles.work)}>
        <div className="three columns header-col">
          <h1 data-scroll className={styles.title}>
            <span className={styles.underline}>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className={styles.markdownStyling} dangerouslySetInnerHTML={{ __html: work }} />
        </div>
      </div>

      <div className={classnames("row", styles.education)}>
        <div className="three columns header-col">
          <h1 data-scroll className={styles.title}>
            <span className={styles.underline}>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div className={styles.markdownStyling} dangerouslySetInnerHTML={{ __html: education }} />
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("row", styles.affiliations)}>
        <div className="three columns header-col">
        <h1 data-scroll className={styles.title}>
            <span className={styles.underline}>Affiliations</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className={styles.markdownStyling} dangerouslySetInnerHTML={{ __html: affiliations }} />
        </div>
      </div>
    </section>
  )
}

export default Resume
