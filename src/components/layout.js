import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { StaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from 'react-helmet';

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
        <Parent>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{data.site.siteMetadata.title}</title>
          <meta property="og:title" content="Pete DeJoy" />
          <meta property="og:description" content="A personal site to showcase writing and projects. Built from scratch in Gatsby.js." />
          <meta property="og:image" content="../images/acadia.jpg" />
          <meta property="og:url" content="http://petedejoy.com" />
          <meta name="twitter:card" content="../images/acadia.jpg" />
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
        </Parent>
      </React.Fragment>
    )}
  />
)

export default layout
