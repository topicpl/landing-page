import React, { useState, useEffect } from "react"
import Helmet from "../components/Helmet"
import MasterStyle from "../assets/styles/MasterStyle.js"
import detectBrowserLanguage from "detect-browser-language"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Main() {
  // TODO: change to url language because language change is visible and slow
  const [lang, setLang] = useState("pl")

  useEffect(() => {
    const detectedLang = detectBrowserLanguage()
    // if (detectedLang === "pl-PL" || detectedLang === "pl") setLang("pl")
    if (detectedLang.includes("pl")) setLang("pl")
    else setLang("en")
  }, [lang])

  return (
    <MasterStyle>
      <Helmet />
      <Container>
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <Footer lang={lang} />
      </Container>
    </MasterStyle>
  )
}

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`
