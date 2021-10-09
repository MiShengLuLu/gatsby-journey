import React from "react"
import { graphql } from 'gatsby'

export default function Home({ data }) {
  return <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.author}</p>
  </div>
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
