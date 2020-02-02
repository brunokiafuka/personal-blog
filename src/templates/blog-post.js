import React from "react"
import { graphql, Link } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
// import '../css/blog-post.css';
import { Container, PostTitle, Divider, Tags, Date, PostsNav } from "./styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data

  const { next, prev } = pageContext

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
        <Divider />
        <PostsNav
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {prev && (
              <Link to={prev.frontmatter.path} rel="prev">
                {`⬅️ ${prev.frontmatter.title}`}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                {`${next.frontmatter.title} ➡️`}
              </Link>
            )}
          </li>
        </PostsNav>
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
