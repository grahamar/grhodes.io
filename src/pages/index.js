import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'
import {
  HeroSection,
  Section,
  Content,
  Paragraph,
  SectionBox,
  Tag,
} from '../styles'
import Hello from '../components/Hello'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Post from '../components/Post'

const skills = [
  'AWS',
  'Kubernetes',
  'Scala',
  'Java',
  'ReactJS',
  'Go',
  'Python',
  'JavaScript',
  'API Design',
  'Networking',
  'Git',
  'Docker',
  'Akka',
  'SQL',
]

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMediumPost
    const posts = edges.map(({ node }) => node)

    return (
      <Layout>
        <Content>
          <HeroSection>
            <Hello />

            <Footer />
          </HeroSection>
          <Section>
            <SectionBox>
              <h4>About</h4>
              <Paragraph mb={4}>
                Tech lead based in Dublin, Ireland. Currently at Aylien.
                Previously at Zalando, where I helped architect and develop
                their Fashion Content Platform. Before that I designed and built
                Gilt Groupe&#39;s cart service to scale for Black Friday sales.
              </Paragraph>
            </SectionBox>
            <SectionBox>
              <h4>Latest Writing</h4>
              {posts.map(post => (
                <Post key={post.id} post={post} />
              ))}
            </SectionBox>
          </Section>
          <Section>
            <Box>
              <h2>Skills</h2>
              {skills.map(skill => (
                <Tag key={skill} to={`/skills/${skill}/`}>
                  {skill}
                </Tag>
              ))}
              <Box>
                <p>
                  Site is open source on{' '}
                  <a href="https://github.com/grahamar/grhodes.io">Github</a>{' '}
                  and deployed with{' '}
                  <a href="https://www.netlify.com/">Netlify</a>.
                </p>
              </Box>
            </Box>
          </Section>
        </Content>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          firstPublishedAt(formatString: "MMMM DD, YYYY")
          virtuals {
            tags {
              name
            }
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
