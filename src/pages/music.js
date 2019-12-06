import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Music from '../components/Music'

export default () => {
    return (
      <Layout>
          <Music />
      </Layout>
    )
  }