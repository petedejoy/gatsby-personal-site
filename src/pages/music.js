import React from "react"
import Layout from "../components/layout"
import PostList from "../components/PostList"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Music from '../components/music'

export default () => {

    return (
      <Layout>
          <Music />
      </Layout>
    )
  }