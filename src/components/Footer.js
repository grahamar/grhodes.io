import React from 'react'
import { Footer, Box } from '../styles'
import SocialIcons from './SocialIcons'

export default props => (
  <Footer {...props}>
    <Box mt={['3em', 0]} pl={[0, '2em']}>
      <SocialIcons />
    </Box>
  </Footer>
)
