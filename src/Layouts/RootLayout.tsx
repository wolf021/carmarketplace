import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import "./_layout.scss"

type navigation = {
  children?: any
}

const Layout = (props: navigation) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
