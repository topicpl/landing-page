import React from "react"
import styled from "styled-components"

const Button = () => {
  return <Container>Meet someone</Container>
}

export default Button

const Container = styled.button`
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.color.red[500]};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border-radius: 5px;
  border: none;

  :hover {
    cursor: pointer;
  }
  :focus {
    border: none;
    outline: none;
  }
`
