import React from 'react';
import styled from 'styled-components';

import Hello from '../components/Hello';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { HeroSection, Content, SectionBox, Paragraph } from '../styles';

const Stripe = styled.span`
  color: #635bff;
  font-weight: 600;
`;

const Zalando = styled.span`
  color: #ff6800;
  font-weight: 600;
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <HeroSection>
        <Hello />
        <SectionBox>
          <Paragraph>
            Tech lead based in Dublin, Ireland. Currently at{' '}
            <Stripe>Stripe</Stripe>. Previously at <Zalando>Zalando</Zalando>,
            where I helped architect and develop their Fashion Content Platform.
            Before that I designed and built Gilt Groupe&#39;s cart service to
            scale for Black Friday sales.
          </Paragraph>
        </SectionBox>

        <Footer />
      </HeroSection>
    </Content>
  </Layout>
);

export default IndexPage;
