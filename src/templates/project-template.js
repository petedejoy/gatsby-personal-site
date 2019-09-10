import React from "react"
import styles from "../css/projectTemplate.module.css"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-mdx"

const ProjectTemplate = ({ data }) => {
  const { title, image, description, link, tools } = data.mdx.frontmatter
  console.log(link)
  const { body } = data.mdx.code
  const img = image.childImageSharp.fluid
  const tool = tools ? tools.map((tool) =>
    <li>{tool}</li>
  ) : null
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>{title}</h1>
          <div className={styles.tools}>
            {tools ?
              <ul>
                {tool}
              </ul> : null}
          </div>
          {link ? <a href={link} className={styles.link}>
            See it in action{" "}
          </a> : null}
        </div>
        <Image fluid={img} className={styles.image} />
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
        tools
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
