import React from "react"
import PropTypes from "prop-types"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
import pk from "../images/pk2.jpg"

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>Pete and Kelsey's Amazing Recipes</h1>
      <h4>
        A collection of things we've cooked through the years.
      </h4>
      <img src={pk} alt="PK" className={styles.header}/>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
