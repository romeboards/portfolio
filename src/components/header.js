import PropTypes from "prop-types"
import React from "react"

import "../styles/Header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <h1>Daniel Kass</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
