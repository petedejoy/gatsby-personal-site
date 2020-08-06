import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import styles from "../css/postcard.module.css"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  const { title, date, author, slug, description } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  return (
    <Link to={`/writing/${slug}`} className={styles.cardLink}>
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          {/* <h6>
            <span>{date}</span>
          </h6> */}
          <h6>{description}</h6>
          {/* <Link to={`/${slug}`} className={styles.link}>
            READ MORE{" "}
          </Link> */}
        </div>
      </div>
    </article>
    </Link>
  )
}

export default PostCard
