import React, { Component } from "react"
import Columns from "react-columns"
import styles from "../css/resume.module.css"
import { useStaticQuery } from "gatsby"
import classnames from "classnames"
import { Helmet } from "react-helmet"
import aboutMeta from "../images/about-meta.png"

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
      <Helmet>
        <meta charSet='utf-8' />
        <meta property="og:title" content="Pete DeJoy | About"/>
        <meta property="og:description" content="A bit about me, including work history, education, and skillset."/>
        <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${aboutMeta}`} />
        <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/about`} />
        <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${aboutMeta}`} />
        <meta name="twitter:card" content='summary_large_image' />
      </Helmet>
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
