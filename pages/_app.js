import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import FontFaceObserver from 'fontfaceobserver'

import GlobalStyle from '../utils/style'
import { colors } from '../utils/constants'

const theme = {
  colors: {
    primary: colors.green
  }
}

export default class MyApp extends App {

  componentDidMount() {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:500,700|Open+Sans:300,400,700&display=swap'
    link.rel = 'stylesheet'

    document.head.appendChild(link)
    const openSans = new FontFaceObserver('Open Sans')
    const montserrat = new FontFaceObserver('Montserrat')
  
    Promise.all([openSans.load(), montserrat.load()]).then(() => {
      document.documentElement.classList.add('openSans', 'montserrat')
    })
  }

  render () {
    const { Component, pageProps } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}