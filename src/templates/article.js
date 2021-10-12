import { graphql } from 'gatsby'
import React from 'react'

export default function Article ({ data }) {
  const { html, frontmatter } = data.markdownRemark
  return <div>
    <p>{frontmatter.title}</p>
    <p>{frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </div>
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date
        title
      }
      id
    }
  }
`
