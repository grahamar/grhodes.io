import React from 'react';
import { Box } from 'rebass';
import { Logo, HiLine, BuildLine } from './styles';

export default class Hello extends React.Component {
  render() {
    return (
      <Box mt="10em">
        <HiLine>Hi, I&#39;m</HiLine>
        <Logo>Graham Rhodes.</Logo>
        <BuildLine>I build software and teams to solve problems.</BuildLine>
      </Box>
    );
  }
}
