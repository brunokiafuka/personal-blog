import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
// import '../css/blog-post.css';
import { Container, PostTitle, Divider, Tags, Date } from "./styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: post.frontmatter.path,
      title: post.frontmatter.title,
    },
  }

  return (
    <Layout>
      <SEO
        title="Bruno Kiafuka Dev Blog"
        description={post.frontmatter.title}
      />
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

        <DiscussionEmbed {...disqusConfig} />
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
