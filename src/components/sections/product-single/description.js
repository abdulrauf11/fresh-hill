import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 4rem;

  .description > * {
    margin: 1rem 0;
  }

  /* Headings */
  h1 {
  }
  h2 {
  }
  h3 {
  }
  h4 {
  }
  h5 {
  }
  h6 {
  }
  /* Paragraph */
  p {
  }
  /* Image */
  img {
  }
  /* Iframe */
  iframe {
    max-width: 100%;
    display: block;
  }
  /* Lists */
  ul {
  }
  ol {
  }
  /* Link */
  a {
    text-decoration: underline;
    color: var(--green);
    text-transform: none;
  }
`

export default function Description({ content }) {
  console.log(content)
  return (
    <Wrapper>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Wrapper>
  )
}
