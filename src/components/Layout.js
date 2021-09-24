import React from "react"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <motion.main
          id="main"
          role="main"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3,
          }}
        >
          {children}
        </motion.main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
