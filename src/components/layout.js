import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
