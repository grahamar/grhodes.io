import React from 'react'
import { kebabCase } from 'lodash'
import {
  Bullet,
  Post as StyledPost,
  Title,
  Timestamp,
  Paragraph,
  LineBreak,
  Tag,
} from '../styles'

const Tags = ({ tags }) =>
  tags &&
  tags.length > 0 && (
    <div>
      {tags.map(({ name }) => (
        <Tag key={name} to={`/tags/${kebabCase(name)}/`}>
          {name}
        </Tag>
      ))}
    </div>
  )

const Post = ({ post }) => (
  <StyledPost>
    <Title>
      <a href={`https://medium.com/@grahamar/${post.uniqueSlug}`}>
        <span dangerouslySetInnerHTML={{ __html: post.title }} />
      </a>
    </Title>

    <Timestamp>
      {post.firstPublishedAt}
      <Bullet />
      {Math.ceil(post.virtuals.readingTime)} min read
    </Timestamp>

    <LineBreak />
    <Paragraph mb={4}>{post.virtuals.subtitle}</Paragraph>
    <Tags tags={post.virtuals.tags} />
  </StyledPost>
)

export default Post
