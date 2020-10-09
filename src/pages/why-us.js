import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Reason from "../components/why-us/Reason"
import Content from "../components/why-us/Content"
import Functions from "../components/why-us/Functions"
import Quotes from "../components/why-us/Quotes"
import Footer from "../components/Footer"

const WhyUs = () => {
  const intl = useIntl()
  return (
    <MasterStyle>
      <Helmet />
      {/* Text inside these components will be migrated to json files */}
      <Navbar lang={intl.locale} />
      <Container>
        <Reason lang={intl.locale} />
        <Content lang={intl.locale} />
        <Functions lang={intl.locale} />
        <Quotes lang={intl.locale} />
      </Container>
      <Footer lang={intl.locale} />
    </MasterStyle>
  )
}

export default WhyUs

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;

  section {
    margin: 50px 0 100px 0;
  }
`
