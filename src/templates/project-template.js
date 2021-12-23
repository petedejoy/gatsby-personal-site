import React from "react"
import styles from "../css/projectTemplate.module.css"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"

const ProjectTemplate = ({ data }) => {
  const { title, image, description, link, tools, slug } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid
  const tool = tools ? tools.map((tool) =>
    <li>{tool}</li>
  ) : null
  return (
    <Layout>
       <Helmet>
        <meta charSet='utf-8' />
          <title>{title}</title>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={`https://${process.env.GATSBY_DOMAIN}.com/${img.src}`} />
          <meta property="og:url" content={`https://${process.env.GATSBY_DOMAIN}.com/projects/${slug}`} />
          <meta name="twitter:image" content={`https://${process.env.GATSBY_DOMAIN}.com/${img.src}`} />
          <meta name="twitter:card" content='summary_large_image' />
      </Helmet>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>{title}</h1>
          <div className={styles.projectMeta} >
            {tools ?
              <ul>
                {tool}
              </ul> : null}
          {link ? <a href={link}><button className={styles.link}>
            SEE IT IN ACTION{" "}
          </button></a> : null}
          </div>
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
      body
    }
  }
`

export default ProjectTemplate
