import React, { Component } from "react"
import homepic from "../images/home-image.jpg"
import styles from "../css/about.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { SocialIcon } from "react-social-icons"

const About = ({ children }) => {
  const getAbout = graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "about" } }) {
        html
      }
    }
  `
  const response = useStaticQuery(getAbout)
  const body = response.markdownRemark.html
  return (
    <section id="about">
      <div className={styles.freeze}>
        {/* <img src={headshot} className={styles.headshot} /> */}
        <h1 className={styles.intro}>Hello, I'm Pete.</h1>
        {/* <h3 className={styles.subtitle}>
        I'm a full stack engineer and product manager with a passion for growing
        early-stage startups.
      </h3> */}
      </div>
      <div className={styles.imageContainer}>
        <img src={homepic} className={styles.image} alt="A photo of me and my girlfriend" />
      </div>
      {/* <div className={styles.social}>
          <SocialIcon
            url="https://github.com/petedejoy"
            className={styles.icon}
            bgColor="3f3f3f"
          />
          <SocialIcon
            url="https://twitter.com/petedejoy"
            className={styles.icon}
            bgColor="3f3f3f"
          />
          <SocialIcon
            url="https://instagram.com/peteybutterjellytime"
            className={styles.icon}
            bgColor="3f3f3f"
          />
        </div> */}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  )
}

export default About
