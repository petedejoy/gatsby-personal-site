import React, { Component } from "react"
import Columns from "react-columns"
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
  console.log(skills)
  const skill = skills.map(function(skills) {
    const className = "bar-expand " + skills.name.toLowerCase()
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className} />
        <em>{skills.name}</em>
      </li>
    )
  })
  const framework = frameworks.map(function(frameworks) {
    const className = "bar-expand " + frameworks.name.toLowerCase()
    return (
      <li key={frameworks.name}>
        <span style={{ width: frameworks.level }} className={className} />
        <em>{frameworks.name}</em>
      </li>
    )
  })
  const language = languages.map(function(languages) {
    const className = "bar-expand " + languages.name.toLowerCase()
    return (
      <li key={languages.name}>
        <span style={{ width: languages.level }} className={className} />
        <em>{languages.name}</em>
      </li>
    )
  })
  return (
    <section id="resume">
      <div className="row skill">
        <div className>
        <div className="intro">Some skills I've picked up through the years.</div>
          <div className="bars">
            <Columns number="3">
              <div>
                <h4 className="skill-title">Languages</h4>
                <ul className="skills">{language}</ul>
              </div>
              <div>
                <h4 className="skill-title">Technologies</h4>
                <ul className="skills">{framework}</ul>
              </div>
              <div>
                <h4 className="skill-title">Skills</h4>
                <ul className="skills">{skill}</ul>
              </div>
            </Columns>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
