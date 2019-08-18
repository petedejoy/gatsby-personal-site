import React from "react"
import PropTypes from "prop-types"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
import pk from "../images/pk2.jpg"

const PostList = ({ posts }) => {
  return (
    <section >
      <h1 className="intro">Technology, Business, Music, Mental Health, and Everything In-Between.</h1>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
