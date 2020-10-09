import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Main() {
  const intl = useIntl()
  return (
    <MasterStyle>
      <Helmet />
      <Container>
        <Navbar lang={intl.locale} />
        <Hero lang={intl.locale} />
        <Footer lang={intl.locale} />
      </Container>
    </MasterStyle>
  )
}

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`
