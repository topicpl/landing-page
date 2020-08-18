import React from "react"
import styled from "styled-components"

const Wave = () => {
  return (
    <Container>
      <svg viewBox="0 0 70 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
      </svg>
    </Container>
  )
}

export default Wave

const Container = styled.div`
  width: 100%;

  svg {
    /* fill: ${({ theme }) => theme.color.grey[950]}; */
		fill: red;
  }
`
