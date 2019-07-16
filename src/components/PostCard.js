import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import styles from "../css/postcard.module.css"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  const { title, date, author, slug } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>{author}</span> / <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link to={slug} className={styles.link}>
            Read More{" "}
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
