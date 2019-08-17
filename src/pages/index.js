import React from "react"
import Layout from "../components/layout"
import About from "../components/About"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}
