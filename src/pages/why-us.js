import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Helmet from "../components/Helmet"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"
import Reason from "../components/why-us/Reason"
import Content from "../components/why-us/Content"
import Functions from "../components/why-us/Functions"
import Quotes from "../components/why-us/Quotes"
import Footer from "../components/Footer"

const WhyUs = () => {
  const [lang, setLang] = useState("pl")

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) setLang("pl")
    else setLang("en")
  }, [lang])

  return (
    <MasterStyle>
      <Helmet />
      <Navbar lang={lang} />
      <Container>
        <Reason lang={lang} />
        <Content lang={lang} />
        <Functions lang={lang} />
        <Quotes lang={lang} />
      </Container>
      <Footer lang={lang} />
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
