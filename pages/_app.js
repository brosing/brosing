import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import FontFaceObserver from 'fontfaceobserver'
// import { Transition } from 'react-spring/renderprops.cjs'

import { colors } from '../utils/constants'

import '../styles/syntax-theme.css'
import '../styles/global-style.css'

const theme = {
  colors: {
    primary: colors.green,
    dark: colors.dark
  }
}

export default class MyApp extends App {
  // Transition on the first mount
  // state = { show: false }

  componentDidMount() {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Crimson+Text:400,600&display=swap'
    link.rel = 'stylesheet'

    document.head.appendChild(link)
    const crimsonText = new FontFaceObserver('Crimson Text')
    const montserrat = new FontFaceObserver('Montserrat')
  
    Promise.all([crimsonText.load(), montserrat.load()]).then(() => {
      document.documentElement.classList.add('crimsonText', 'montserrat')
      // show when fonts loaded
      // this.setState(() => ({ show: true }))
    })
  }

  render () {
    const { Component, pageProps, router } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        {/* <Transition
          items={this.state.show}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 1000 }}
          keys={router.route}
        >
          { show => show && (props => <div style={props}> */}
            <Component {...pageProps} />
          {/* </div>)}
        </Transition> */}
      </ThemeProvider>
    )
  }
}