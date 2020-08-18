import React from "react"
import styled from "styled-components"

const Logo = ({ isOpen }) => {
  return <Container isOpen={isOpen}>topic</Container>
}

export default Logo

const Container = styled.span`
  color: ${({ isOpen }) => (isOpen ? "#fff" : "#141414")};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 25px;
`
