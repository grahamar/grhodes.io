import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'rebass'
import styled, { css, createGlobalStyle } from 'styled-components'
import { fontSize, space } from 'styled-system'

const theme = (key, fallback) => props =>
  props.theme[key] || (fallback || 'initial')

const isMobile = content => `
  @media (max-width: 720px) {
    ${content}
  }
`

const transition = css`
  transition: color 150ms, background 150ms;
  will-change: color, background;
`

export const Bullet = styled(props => <span {...props}>&bull;</span>)`
  color: ${theme('bullet')};
  margin: 0 10px;
`

export const Tag = styled(Link)`
  padding: 5px 12px;
  color: ${theme('tagColor')};
  background: ${theme('tagBackground')};
  background: var(--inline-code-background);
  font-family: 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New',
    Courier, monospace;
  font-weight: 500;
  font-size: 0.9rem;
  margin-right: 8px;
  border-radius: 3px;
  letter-spacing: 0.25px;
  ${transition};

  &:hover {
    background: ${theme('tagHoverBackground')};
  }
`

export const Container = styled.div`
  margin: auto;
  padding: 0 2em;

  ${isMobile(`
    padding: 0 1.5em;
  `)}
`

export const Content = styled.section`
  position: relative;
  z-index: 2;
  margin: 1em 3em 0;
  color: white;
  background: ${theme('contentBackground')};
  padding-top: 1em;
  ${space};
  ${transition};

  ${isMobile(`
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    padding-top: 1em;
  `)}
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 1rem);
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 2em;
`

export const SectionBox = styled(Box)`
  width: calc(99.99% * 6 / 12 - 1.659rem);
  color: white;
`

export const Title = styled.h1`
  color: ${theme('titleColor')};
  font-size: 1.75rem;
  line-height: 1.45;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 12px;
  ${fontSize};
  ${transition};

  ${isMobile(`
    font-weight: 800;
    font-size: 1.65rem;
  `)}

  strong {
    position: relative;
    font-weight: 800;

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      bottom: -1px;
      right: -3px;
      left: -3px;
      background: #3996ff;
      opacity: 0.2;
      z-index: -1;
      transform: rotate(-1deg);
    }
  }
`

export const LineBreak = styled.div.attrs({
  className: 'LineBreak',
})`
  width: ${p => (p.width ? `${p.width}px` : '80px')};
  border: 2px solid ${theme('primary')};
  margin-bottom: 2em;
  ${space};
  transition: width 250ms ease-out;
`

export const Timestamp = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: ${theme('descriptionColor')};
  margin-bottom: 1.5em;
`

export const Post = styled.article`
  border-bottom: 1px solid ${theme('postBorderColor')};
  padding: 0 0 2em;

  &:hover {
    background: ${theme('postHoverColor')};
  }

  ${isMobile(`
    padding-top: 2em;

    &:first-of-type {
      border-top: 1px solid #eaeaea;
    }
  `)}
`

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: ${theme('color')};
  max-width: 800px;
  ${space};
`

export const Description = styled(Paragraph)`
  color: ${theme('descriptionColor')};
  font-size: 1.05rem;
  margin-bottom: 2em;
  ${space};
  ${transition};

  ${isMobile(`
    margin-bottom: 1em;
  `)}
`

export const Footer = styled.footer`
  position: relative;
  text-align: center;
  color: white;
  padding: 1em 0;
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: black;
    font-size: 1.5em;
    margin-left: 1em;
    margin-top: 1px;
    vertical-align: -webkit-baseline-middle;

    ${isMobile(`
      margin-top: 1em;
    `)}

    &:first-of-type {
      margin-left: 0;
    }
  }
`

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: ${theme('background')};
    --primary: ${theme('primary')};

    // Prism styles
    --char: #d8dee9;
    --comment: #999999;
    --keyword: #e89bda;
    --lineHighlight: #343b4a;
    --primitive: #5a9bcf;
    --string: #9effa5;
    --variable: #8f9fb9;
    --boolean: #ff8b50;
    --punctuation: #5fb3b3;
    --tag: #fc929e;
    --function: #79b6f2;
    --className: #fac863;
    --method: #6699cc;
    --operator: #fc929e;
    --code-background: ${theme('codeBackground', 'rgb(40, 44, 52)')};
    --inline-code-background: rgba(133, 180, 255, 0.2);
    --inline-code-color: ${theme('inlineCodeColor')};
  }

  ::selection {
    background: ${theme('selection')};
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 100%;
    letter-spacing: 0.2px;
    color: ${theme('color')};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${theme('background')};
    ${transition};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    font-style: inherit;
    text-decoration: inherit;
  }

  hr {
    display: block;
    border: none;
    height: ${theme('hrWidth', '1px')};
    background: ${theme('hrColor')};
    margin: 4em 30%;
    outline: none;
  }

  p > a,
  li > a,
  strong > a {
    padding: 2px;
    color: ${theme('linkColor')};
    font-weight: 600;
    border-bottom: 1px solid ${theme('linkBorder')};
  }

  p > a:hover,
  li > a:hover,
  strong > a:hover {
    border-bottom: 1px solid #00FFC5;
  }

  blockquote {
    background: ${theme('blockquoteBackground')};
    padding: 0.5em 2em;
    margin: 0;
    margin-bottom: 2em;
    border-left: 2em solid ${theme('blockquoteBorder')};

    ${isMobile(`
      margin: 0 -2em 2em;
      padding: 0.5em 1em;
    `)}
  }
`
