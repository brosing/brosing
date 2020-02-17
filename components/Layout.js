import React from 'react';
import Head from 'next/head'
// import Helmet from 'react-helmet';
import styled from 'styled-components'

import { helmet, colors } from '../utils';
// import Footer from './Footer'

const Layout = ({ children, className }) => (
  <StyledLayout className={className}>
    <Head>
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
    </Head>
    {/* <Helmet {...helmet} /> */}

    <StyledWrapperChildren>
      { children }
    </StyledWrapperChildren>

    {/* <Footer /> */}
  </StyledLayout>
)

export default Layout

const StyledLayout = styled.div`
  background-color: #fff;
  color: ${colors.dark};
`

const StyledWrapperChildren = styled.div`
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`