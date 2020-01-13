import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss"

const Button = props => (
  <a
    href={props.to}
    className={props.primary ? `btn btn-primary` : `btn`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.label}
  </a>
)

const Header = ({ siteTitle }) => (
  <header>
    <h1>Daniel Kass</h1>

    <div className="links">
      <Button primary to="mailto:sayheytodan@gmail.com" label="Email" />
      <Button to="/Daniel Kass - Resume.pdf" label="Resume" />
      <Button to="https://twitter.com/dananalog" label="Twitter" />
      <Button to="https://github.com/romeboards" label="Github" />
      <Button
        to="https://www.linkedin.com/in/dan-kass-1734b444/"
        label="Linkedin"
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
