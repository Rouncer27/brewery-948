import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import HeaderNav from "./Navigation/HeaderNav/HeaderNav"
import MobileNav from "./Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <HeaderNav />
    <MobileNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
