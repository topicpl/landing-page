import React from "react"
import styled from "styled-components"
import LS from "../assets/images/laptop-small.png"

const Gallery = () => {
  return (
    <Container>
      <img src={LS} />
    </Container>
  )
}

export default Gallery

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey[950]};
  width: 100vw;
  margin: 120px 0 150px -32px;
  padding-top: 70px;
  display: flex;
  justify-content: center;
`
