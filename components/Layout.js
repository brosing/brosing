import React from 'react';
import Head from 'next/head'
// import Helmet from 'react-helmet';
import styled from 'styled-components'

// import { helmet } from '../utils';
// import Footer from './Footer'

const Layout = ({ children }) => (
  <StyledLayout>
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
  padding: 0 16px;
  /* background-color: #eee; */
  color: #666;
`

const StyledWrapperChildren = styled.div`
  min-height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`