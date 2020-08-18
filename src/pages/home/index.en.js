import React from "react"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: calc(100vw - 64px);
  margin: 0 auto;
`
