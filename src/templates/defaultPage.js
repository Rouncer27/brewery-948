import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import TempDefault from "../components/Templates/TempDefault"

const DefaultPage = props => {
  const { page } = props.data

  return (
    <Layout>
      <Seo title="Default Page" />
      <TempDefault page={page} />
    </Layout>
  )
}

export const query = graphql`
  query defaultPageQuery($id: String!) {
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
