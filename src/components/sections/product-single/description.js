import React from "react"
import styled from "styled-components"
import device from "../../device"

const Wrapper = styled.div`
  margin-top: 4rem;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    ${device.small`font-size: 0.9rem;`}
  }
`

export default function Description({ content }) {
  return (
    <Wrapper>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Wrapper>
  )
}
