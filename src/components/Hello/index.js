import React from 'react'
import { Box } from 'rebass'
import GetInTouch from '../GetInTouch'
import { Logo, HiLine, BuildLine, Company } from './styles'

export default class Hello extends React.Component {
  render() {
    return (
      <Box mt="15%">
        <HiLine>Hi, I&#39;m</HiLine>
        <Logo>Graham Rhodes.</Logo>
        <BuildLine>I build software and teams to solve problems.</BuildLine>
        <p>
          I&#39;m a software engineer and technical lead based in Dublin,
          Ireland specialising
          <br />
          in building and designing high-quality, scalable software solutions.
          <br />
          From containers and CI/CD to RESTful APIs and JavaScript UIs.
          <br />
          Currently working full-time for{' '}
          <Company
            target="_blank"
            href="https://aylien.com/"
            rel="noopener noreferrer"
          >
            Aylien
          </Company>
        </p>
        <GetInTouch />
      </Box>
    )
  }
}
