import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Link to="/">topic</Link>
    </Container>
  )
}

export default Logo

const Container = styled.span`
  color: ${({ isOpen }) => (isOpen ? "#fff" : "#141414")};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 25px;
`
