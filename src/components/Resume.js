import React, { Component } from "react"
import Columns from "react-columns"
import styles from "../css/about.module.css"
import { useStaticQuery } from "gatsby"
import LocomotiveScroll from 'locomotive-scroll'

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

  const scroll = new LocomotiveScroll();
  return (
    <section id="resume">
      <div className="intro">A bit more about me.</div>
      <div className="row work">
        <div className="three columns header-col">
          <h1 data-scroll>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div dangerouslySetInnerHTML={{ __html: work }} />
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div dangerouslySetInnerHTML={{ __html: education }} />
            </div>
          </div>
        </div>
      </div>

      <div className="row affiliations">
        <div className="three columns header-col">
          <h1>
            <span>Affiliations</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div dangerouslySetInnerHTML={{ __html: affiliations }} />
        </div>
      </div>
    </section>
  )
}

export default Resume
