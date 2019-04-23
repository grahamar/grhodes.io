import styled from 'styled-components'

const font = family => `font-family: ${family}`

const theme = (key, fallback) => props =>
  props.theme[key] || (fallback || 'initial')

export const Logo = styled.h1`
  ${font('Roboto, sans-serif')};
  color: ${theme('logoColor')};
  font-size: 3.5rem;
  margin: 0;
  letter-spacing: 0.75px;
  font-weight: light;
  background-clip: text;
  -webkit-background-clip: text;
`

export const HiLine = styled.h2`
  font-family: Proxima Soft, Arial, sans-serif;
  font-weight: 200;
  font-size: 4em;
  color: ${theme('helloColor')};
  margin: 0.2rem 0;
`

export const BuildLine = styled.h3`
  font-family: Proxima Soft, Arial, sans-serif;
  font-weight: 200;
  font-size: 3em;
  color: ${theme('helloColor')};
  margin: 0.2rem 0;
`

export const Company = styled.a`
  padding: 2px;
  color: ${theme('helloColor')};
  font-weight: 600;
  border-bottom: 1px solid #eee;
`
