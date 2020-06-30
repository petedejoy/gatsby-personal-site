import React, { Component } from "react"
import Columns from "react-columns"
import styles from "../css/skills.module.css"
import classnames from "classnames"
import { useStaticQuery } from "gatsby"

const Resume = ({ resume }) => {
  const getSkills = graphql`
    query Skills {
      allResumeJson {
        edges {
          node {
            resume {
              skills {
                name
                level
              }
              frameworks {
                name
                level
              }
              languages {
                name
                level
              }
            }
          }
        }
      }
    }
  `

  const response = useStaticQuery(getSkills)
  const skills = response.allResumeJson.edges[0].node.resume.skills
  const frameworks = response.allResumeJson.edges[0].node.resume.frameworks
  const languages = response.allResumeJson.edges[0].node.resume.languages
  const skill = skills.map(function(skills) {
    const className = styles.barExpand
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className} />
        <em>{skills.name}</em>
      </li>
    )
  })
  const framework = frameworks.map(function(frameworks) {
    const className = styles.barExpand
    return (
      <li key={frameworks.name}>
        <span style={{ width: frameworks.level }} className={className} />
        <em>{frameworks.name}</em>
      </li>
    )
  })
  const language = languages.map(function(languages) {
    const className = styles.barExpand
    return (
      <li key={languages.name}>
        <span style={{ width: languages.level }} className={className} />
        <em>{languages.name}</em>
      </li>
    )
  })
  return (
    <section id="resume">
      <div className={classnames("row", styles.skills)}>
        <div className="intro">Some tools I like working with.</div>
          <div className={styles.bars}>
            <Columns number="3">
              <div>
                <h4 className={styles.skillTitle}>Languages</h4>
                <ul className={styles.skills}>{language}</ul>
              </div>
              <div>
                <h4 className={styles.skillTitle}>Technologies</h4>
                <ul className={styles.skills}>{framework}</ul>
              </div>
              <div>
                <h4 className={styles.skillTitle}>Skills</h4>
                <ul className={styles.skills}>{skill}</ul>
              </div>
            </Columns>
          </div>
      </div>
    </section>
  )
}

export default Resume
