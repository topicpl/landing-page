import React from "react"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`
