import React from 'react'
import { Box } from 'rebass'
import { Logo, HiLine, BuildLine, Company } from './styles'

export default class Hello extends React.Component {
  render() {
    return (
      <Box mt="15%">
        <HiLine>Hi, I&#39;m</HiLine>
        <Logo>Graham Rhodes.</Logo>
        <BuildLine>I build software and teams to solve problems.</BuildLine>
        <p>
          I&#39;m a software engineer and technical lead based in Ireland specialising
          <br />
          in building and designing high-quality, scalable software solutions.
          <br />
          From containers and CI/CD to RESTful APIs and JavaScript UIs.
        </p>
      </Box>
    )
  }
}
