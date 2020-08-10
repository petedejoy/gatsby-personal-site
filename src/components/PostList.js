import React from "react"
import PostCard from "./PostCard"
import MailingList from "./MailingList"
import styles from "../css/postlist.module.css"
import { Helmet } from "react-helmet"
import writingMeta from "../images/writing-meta.png"

const PostList = ({ posts }) => {
  return (
    <section id="Writing">
      <Helmet>
        <meta charSet='utf-8' />
        <meta property="og:title" content="Pete DeJoy | Writing" />
        <meta property="og:description" content="Musings on technology, business, music, mental health, and everything in-between." />
        <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${writingMeta}`} />
        <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/writing`} />
        <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${writingMeta}`} />
        <meta name="twitter:card" content='summary_large_image' />
      </Helmet>
      <h1 className="intro">Technology, business, music, mental health, and everything in-between.</h1>
      <MailingList/>
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <PostCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default PostList
