import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { StaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from 'react-helmet'
import homeMeta from "../images/home-meta.png"

const layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{data.site.siteMetadata.title}</title>
          <meta property="og:title" content="Pete DeJoy | Personal Site" />
          <meta property="og:description" content="Writing, projects, and music. Built from scratch in Gatsby.js." />
          <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${homeMeta}`} />
          <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com`} />
          <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${homeMeta}`} />
          <meta name="twitter:card" content={`https://${process.env.GATSBY_DOMAIN}.com${homeMeta}`} />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
)

export default layout
