import React from 'react'
import Header from '../header'
import Footer from '../Footer'
import Container from '../Container'

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>{children}</main>

      <Footer />
    </Container>
  )
}

export default Layout
