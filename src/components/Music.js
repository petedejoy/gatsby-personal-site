import React, { Component } from "react"
import guitars from "../images/guitars.jpg"
import styles from "../css/music.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { SocialIcon } from "react-social-icons"

const Music = ({ children }) => {
  const getMusic = graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "music" } }) {
        html
      }
    }
  `
  const response = useStaticQuery(getMusic)
  console.log(response)
  const body = response.markdownRemark.html
  return (
    <section id="Music">
    <div>
      <h1 className={styles.intro}>Some of my tunes.</h1>
      <h3 className={styles.subtitle}>
        I'm a bedroom guitarist and aspiring vintage guitar collector. In my free time, I make Instagram videos.
      </h3>
      </div>
      <img src={guitars} className={styles.guitars} alt="Guitars" />
      <hr/>
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  )
}

export default Music
