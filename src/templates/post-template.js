import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-mdx"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx.code
  const img = image.childImageSharp.fluid
  console.log(img)
  return (
    <Layout>
      <section className={styles.template}>
        <Link to="/">Home</Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>{author}</span>/<span>{date}</span>
          </h4>
        </div>
        <Image fluid={img} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`

export default PostTemplate
