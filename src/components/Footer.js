import React from 'react';
import { Footer } from '../styles';
import SocialIcons from './SocialIcons';

const FooterComponent = (props) => (
  <Footer {...props}>
    <SocialIcons />
  </Footer>
);

export default FooterComponent;
