import React, { useState, useEffect } from "react"
import styled from "styled-components"
import detectBrowserLanguage from "detect-browser-language"
import MasterStyle from "../assets/styles/MasterStyle.js"
import Navbar from "../components/Navbar"

const About = () => {
  const [lang, setLang] = useState("pl")

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    if (detectedLang.includes("pl")) setLang("pl")
    else setLang("en")
  }, [lang])

  return (
    <MasterStyle>
      <Navbar lang={lang} />
      <Container>about</Container>
    </MasterStyle>
  )
}

export default About

const Container = styled.div``
