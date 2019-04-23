import React from 'react'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'
import { Box } from 'rebass'

const H4 = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
`

const Post = styled.span`
  color: #28ffcd;
  font-size: 1.2em;
  font-weight: bold;
`

const post = ['m', 'o', 'c', '.', 'l', 'i', 'a', 'm', 'g'].reverse().join('')

export default () => (
  <Box pt="1em">
    <H4>Get in touch</H4>
    <Post>
      <Obfuscate email={'graham.a.r@' + post} />
    </Post>
  </Box>
)
