import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/header'

export default function List ({ data }) {
  return <div>
    <Header />
    {
      data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <p>{post.frontmatter.title}</p>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html: post.html }}></div>
        </div>
      ))
    }
  </div>
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date
        }
        html
        fileAbsolutePath
        internal {
          type
        }
      }
    }
  }
`