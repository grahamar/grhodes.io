import React from 'react';
import { HeroSection, Content } from '../styles';
import Hello from '../components/Hello';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Content>
      <HeroSection>
        <Hello />

        <Footer />
      </HeroSection>
    </Content>
  </Layout>
);

export default IndexPage;
