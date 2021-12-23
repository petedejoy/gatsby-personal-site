import React, { Component } from "react"
import guitars from "../images/guitars.jpg"
import styles from "../css/music.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-mdx"
import { useStaticQuery } from "gatsby"
import { SocialIcon } from "react-social-icons"
import { Helmet } from "react-helmet"
import musicMeta from "../images/music-meta.png"

const Music = ({ children }) => {
  const getMusic = graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "music" } }) {
        html
      }
    }
  `
  const response = useStaticQuery(getMusic)
  const body = response.markdownRemark.html
  return (
    <section id="Music">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Music | Pete DeJoy</title>
        <meta property="og:title" content="Pete DeJoy | Music" />
        <meta property="og:description" content="I'm an aspiring vintage guitar collector and bedroom musician. In my free time, I make instagram videos." />
        <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${musicMeta}`} />
        <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/music`} />
        <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${musicMeta}`} />
        <meta name="twitter:card" content='summary_large_image' />
      </Helmet>
      <div>
        <h1 className="intro">Some of my tunes.</h1>
        <p className={styles.subtitle}>
          I'm a bedroom guitarist and aspiring vintage guitar collector. In my free time, I make Instagram videos.
      </p>
      </div>
      <img src={guitars} className={styles.guitars} alt="Guitars" />
      <hr />
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  )
}

export default Music
