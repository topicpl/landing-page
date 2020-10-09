import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
  const intl = useIntl()
  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={intl.locale} />
      <Container>about</Container>
      <Footer lang={intl.locale} />
    </MasterStyle>
  )
}

export default About

const Container = styled.div``
