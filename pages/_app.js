import App from "next/app"
import Head from 'next/head'
import { PageTransition } from "next-page-transitions"

import '../styles.css'

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="description" content="brosing site" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* set app icon */}
    <meta name="apple-mobile-web-app-title" content="Brosing" />
    <meta name="application-name" content="Brosing" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.webmanifest" />
  </Head>
)

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props

    if (router.route.includes('/story')) {
      return <Component {...pageProps} />
    }

    return (
      <>
        <HeadComponent />

        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </>
    );
  }
}
