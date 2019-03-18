import React from 'react'

const Content = ({ content, className }) => (
  <div style={{ padding: '2em' }} className={className}>
    {content}
  </div>
)

export default Content
