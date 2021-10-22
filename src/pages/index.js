import React from "react"
import { graphql } from 'gatsby'
import Seo from '../components/SEO'
import * as styles from '../styles/index.module.less'

export default function Home({ data }) {
  return <div>
    <Seo title="index page" description="首页" />
    <div>
      <p>{data.site.siteMetadata.title}</p>
      <p className={styles.red}>{data.site.siteMetadata.author}</p>
    </div>
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
