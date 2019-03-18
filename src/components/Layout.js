import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyles } from '../styles'
import useTheme from '../hooks/theme'

const query = graphql`
  query HeadingQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Head = ({ site }) => (
  <Helmet>
    <html lang="en" />
    <title>{site.siteMetadata.title}</title>
    <meta name="description" content={site.siteMetadata.description} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/favicon-16x16.png"
    />
    <link rel="manifest" href="/img/site.webmanifest" />

    <meta name="theme-color" content="#fff" />

    <meta property="og:type" content="business.business" />
    <meta property="og:url" content="https://grhodes.io" />
    <meta property="og:title" content={site.siteMetadata.title} />
    <meta property="og:description" content={site.siteMetadata.description} />
    <meta property="og:image" content="https://grhodes.io/facebook.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@rhodesgraham" />
    <meta name="twitter:creator" content="@rhodesgraham" />
    <meta name="twitter:url" content="https://grhodes.io" />
    <meta name="twitter:title" content={site.siteMetadata.title} />
    <meta name="twitter:description" content={site.siteMetadata.description} />
    <meta name="twitter:image" content="https://grhodes.io/twitter.jpg" />
  </Helmet>
)

const Content = ({ site, children }) => {
  const theme = useTheme()[0]

  return (
    <div>
      <Head site={site} />

      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />

          <div>{children}</div>
        </div>
      </ThemeProvider>
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={query}
      render={data => <Content {...data}>{children}</Content>}
    />
  )
}

export default Layout
