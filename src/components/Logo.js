import React from "react"
import styled from "styled-components"

const Logo = () => {
  return <Container>topic</Container>
}

export default Logo

const Container = styled.span`
  color: ${({ theme }) => theme.color.grey[950]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 25px;
`
