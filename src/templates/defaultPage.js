import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import TempDefault from "../components/Templates/TempDefault"

const DefaultPage = props => {
  const { page } = props.data
  const seoInfo = props.data.seoInfo

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <TempDefault page={page} />
    </Layout>
  )
}

export const query = graphql`
  query defaultPageQuery($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    page: wpPage(id: { eq: $id }) {
      title
      id
      date
      slug
      content
    }
  }
`

export default DefaultPage
