import React from "react"
import { graphql } from "gatsby"

// import '../css/blog-post.css';
import { Container, PostTitle, Divider, Tags, Date } from "./styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <div className="blog-post">
          <Date>{post.frontmatter.date}</Date>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <div style={{ marginBottom: 20 }}>
            {post.frontmatter.tags.map(tag => (
              <Tags key={tag}>{tag}</Tags>
            ))}
          </div>
          <Divider />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
