import React from "react"
import styles from "../css/projectTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-mdx"

const ProjectTemplate = ({ data }) => {
  const { title, date, author, image, description, link } = data.mdx.frontmatter
  console.log(link)
  const { body } = data.mdx.code
  const img = image.childImageSharp.fluid
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>{title}</h1>
          {link ? <a href={link} className={styles.link}>
            See it in action{" "}
          </a> : null}
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
  query getProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        description
        link
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

export default ProjectTemplate
