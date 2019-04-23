import React from 'react'
import { Box } from 'rebass'
import { Footer } from '../styles'
import SocialIcons from './SocialIcons'

export default props => (
  <Footer {...props}>
    <Box mt={['3em', 0]} pl={[0, '2em']}>
      <SocialIcons />
    </Box>
  </Footer>
)
