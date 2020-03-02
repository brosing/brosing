import App from 'next/app'
// import { ThemeProvider } from 'styled-components'
import FontFaceObserver from 'fontfaceobserver'
import { AnimatePresence } from 'framer-motion';

import '../styles/syntax-theme.css'
import '../styles/global-style.css'

export default class MyApp extends App {

  componentDidMount() {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,700|Playfair+Display:500&display=swap'
    link.rel = 'stylesheet'

    document.head.appendChild(link)
    const playfairDisplay = new FontFaceObserver('Playfair Display')
    const montserrat = new FontFaceObserver('Montserrat')
    
    Promise.all([playfairDisplay.load(), montserrat.load()]).then(() => {
      document.documentElement.classList.add('playfairDisplay', 'montserrat')
    })
  }

  render () {
    const { Component, pageProps, router } = this.props
    
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    )
  }
}