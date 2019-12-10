import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-mdx"
import { Helmet } from "react-helmet"

const PostTemplate = ({ data }) => {
  const { title, date, author, image, description, slug } = data.mdx.frontmatter
  const { body } = data.mdx.code
  const img = image.childImageSharp.fluid
  return (
    <Layout>
        <Helmet>
        <meta charSet='utf-8' />
          <title>{title}</title>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com${image}`} />
          <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/${slug}`} />
          <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com${image}`} />
          <meta name="twitter:card" content={`https://${process.env.GATSBY_DOMAIN}.com${image}`} />
        </Helmet>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h4>
            <span>{author}</span> | <span>{date}</span>
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
        description
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
