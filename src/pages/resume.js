import React from "react"
import Layout from "../components/layout"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
    return (
      <Layout>
        <Resume/>
        <Skills/>
      </Layout>
    )
  }